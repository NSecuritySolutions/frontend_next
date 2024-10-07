import { makeAutoObservable, computed, observable, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { create, all } from 'mathjs'
import calculatorStore from '@/app/store/calculatorStore'
import { IBlock, IPriceVariables, IOption, TProduct } from '@/widgets/Calculator/types'
import { ICondition, IConditionCategory } from '@/shared/components/CalculatorCard/types'
import { IEquipment } from '@/widgets/ReadySolutionSection/types'
import { CalculatorBlockData } from '@/shared/components/FormModal/types'

const config = {}
const math = create(all, config)

math.import(
  {
    if: function (condition: boolean, trueValue: number, falseValue: number) {
      return condition ? trueValue : falseValue
    },
    str_equals: function (str1: string, str2: string) {
      return str1 === str2
    },
  },
  { override: true },
)

class CalculatorBlockStore {
  backend_id: number
  id: string
  prev_block_amount: number
  data: IBlock
  presentOptions: IOption[] = []
  disabled: number = 0
  appeared: number = 0
  formula: string
  initialVariables: Map<string, string | number | boolean>
  variables: Map<string, string | number | boolean>
  variabilityVariables: Map<string, number> = new Map()
  quantity_selection: boolean

  // Ключи это id категорий
  filters: Map<number, IConditionCategory> = new Map()
  products: Map<number, TProduct[]> = new Map()
  productAmountDependencies: Map<number, string | undefined> = new Map()

  constructor(data: IBlock, price: IPriceVariables) {
    this.id = uuidv4()
    this.backend_id = data.id
    this.data = data
    this.prev_block_amount = 0
    this.quantity_selection = data.quantity_selection
    this.formula = data.formula.expression
    this.variables = new Map(Object.entries(price))
    this.setVariables()
    this.initialVariables = new Map(this.variables)
    this.setPresent()
    makeAutoObservable(this, {
      variables: observable,
      presentOptions: observable,
      disabled: observable,
      appeared: observable,
      filters: observable,
      prev_block_amount: observable,
      changed: computed,
      result: computed,
      isOptionValueDisabled: action,
      setVariable: action,
      setPresent: action,
    })
  }

  isOptionValueDisabled(name: string, value: string | number | boolean) {
    const optionData = this.data.options.find((option) => option.name === name)
    if (optionData?.product) {
      return this.checkOptionValueFilter(optionData.product, name, value).length === 0
    }
    return false
  }

  private checkOptionValueFilter(category: number, name: string, value: string | number | boolean) {
    const products = calculatorStore.products.filter((item) => item?.polymorphic_ctype === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      this.applyFiltersForCheck(item, this.filters.get(category)!, name, value),
    )
    return filteredProducts
  }

  private applyFiltersForCheck(
    item: TProduct,
    conditionCategory: IConditionCategory,
    name: string,
    value: string | number | boolean,
  ) {
    const initial = this.applyInitialFilters(item, conditionCategory.initial)
    const restFilters = Object.keys(conditionCategory).filter((option) => option != 'initial')
    if (restFilters.length == 0) return initial
    const rest = restFilters.every((option) => {
      return conditionCategory[option].every((condition) => {
        if (this.variables.get(option) == 'unknown') {
          return true
        }
        if (condition.leftPart == name) {
          if (condition.optionValue == value.toString()) return this.applyCondition(item, condition)
          else return true
        }
        if (condition.optionValue == this.variables.get(option)!.toString()) {
          return this.applyCondition(item, condition)
        } else return true
      })
    })
    return rest && initial
  }

  get changed() {
    if (JSON.stringify(this.variables) != JSON.stringify(this.initialVariables)) return true
    return false
  }

  // Нужно для плавной анимации
  // Начало блока
  private compareArrays = (prevArr: IOption[], currentArr: IOption[]): void => {
    this.disabled = 0
    this.appeared = 0
    for (let i = 0; i < prevArr.length; i++) {
      if (!currentArr.find((option) => option.id == prevArr[i].id)) {
        this.disabled++
      }
    }
    for (let i = 0; i < currentArr.length; i++) {
      if (!prevArr.find((option) => option.id == currentArr[i].id)) {
        this.appeared++
      }
    }
  }

  private handleIsPresent = (option: IOption) => {
    if (option.depends_on == undefined) return true
    if (option.depends_on) {
      const depends = this.data.options.find((item) => item.id == option.depends_on)
      if (
        depends &&
        this.handleIsPresent(depends) &&
        this.getVariable(depends.name)!.toString() == option.depends_on_value
      )
        return true
    }
    return false
  }

  setPresent() {
    this.presentOptions = this.data.options.filter(this.handleIsPresent)
  }
  // Конец блока

  // Итоговый расчет
  // Начало блока
  get result() {
    let mathResult
    try {
      mathResult = math.evaluate(this.formula, this.variables)
    } catch (error) {
      console.error(error)
      calculatorStore.error = error
      return 0
    }

    const filteredProducts = this.filterByMinPrice()
    const resultWithoutProducts =
      this.variables.has('block_amount') && this.variables.get('block_amount') != 0 ? mathResult : 0
    const blockFilteredProducts = filteredProducts.filter(
      (product) => this.productAmountDependencies.get(product?.polymorphic_ctype) == undefined,
    )
    const otherFilteredProducts = filteredProducts.filter(
      (product) => !blockFilteredProducts.includes(product),
    )
    const blockFilteredProductsResult = blockFilteredProducts.reduce((sum, current) => {
      if (!current) return sum
      return sum + current.price
    }, 0)
    const blockResult =
      resultWithoutProducts *
        ((this.filters && blockFilteredProductsResult) ||
        Array.from(this.filters.keys()).length == 0
          ? 1
          : 0) +
      blockFilteredProductsResult * (this.variables.get('block_amount') as number)
    const otherFilteredProductsResult = otherFilteredProducts.reduce((sum, current) => {
      if (!current) return sum
      return (
        sum +
        current.price *
          (this.productAmountDependencies.get(current.polymorphic_ctype)
            ? (this.variables.get(
                this.productAmountDependencies.get(current.polymorphic_ctype)!,
              ) as number)
            : 1)
      )
    }, 0)
    const result = blockResult + (blockResult ? otherFilteredProductsResult : 0)
    return result || 0
  }

  private filterByMinPrice() {
    const filteredProducts: { categoryId: number; products: TProduct[] }[] = this.filter()
    const minPriceData: TProduct[] = []
    filteredProducts.forEach((category) =>
      minPriceData.push(
        category.products.reduce((min, current) => {
          return current.price < min.price ? current : min
        }, category.products[0]),
      ),
    )
    return minPriceData
  }

  private filter() {
    const data: { categoryId: number; products: TProduct[] }[] = []
    this.filters.forEach((_, k) => {
      if (this.products.has(k) && this.products.get(k)!.length > 0) {
        data.push({ categoryId: k, products: this.products.get(k)! })
      } else data.push({ categoryId: k, products: this.filterProduct(k) })
    })
    return data
  }

  private filterProduct(category: number) {
    // Отфильтровываем по категории
    const products = calculatorStore.products.filter((item) => item?.polymorphic_ctype === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      this.applyFilters(item, this.filters.get(category)!),
    )
    return filteredProducts
  }

  private applyInitialFilters(item: TProduct, conditions: ICondition[]) {
    if (conditions.length == 0) return true
    return conditions.every((condition) => {
      // Если в объекте условия отсутствует operator, значит это отслеживаемое условие
      if (!condition.operator) {
        if (this.filters.get(item.polymorphic_ctype)![condition.leftPart]) return true
        return (
          item[condition.leftPart] == this.variables.get(condition.leftPart) ||
          this.variables.get(condition.leftPart) == 'unknown' ||
          this.variables.get(condition.leftPart) == false
        )
      }
      // Это для неотслеживаемых условий (начальные фильтры, которые были заданы ны бэке)
      return this.applyCondition(item, condition)
    })
  }

  private applyFilters(item: TProduct, conditionCategory: IConditionCategory) {
    const initial = this.applyInitialFilters(item, conditionCategory.initial)
    const restFilters = Object.keys(conditionCategory).filter((option) => option != 'initial')
    if (restFilters.length == 0) return initial
    const rest = restFilters.every((option) => {
      return conditionCategory[option].every((condition) => {
        if (this.variables.get(option) == 'unknown' || this.variables.get(option) == false) {
          return true
        }
        if (condition.optionValue == this.variables.get(option)!.toString()) {
          return this.applyCondition(item, condition)
        } else return true
      })
    })
    return rest && initial
  }

  private typeChange(value1: string | number | boolean | undefined, value2: string) {
    if (typeof value1 != typeof value2) {
      if (typeof value1 == 'number') return parseInt(value2)
      else if (typeof value1 == 'boolean')
        return value2 == 'true' ? true : value2 == 'false' ? false : 'unknown'
    }
    return value2
  }

  private applyCondition(item: TProduct, condition: ICondition) {
    const { leftPart, operator, rightPart } = condition
    const finalRightPart = this.typeChange(
      item[leftPart] as string | number | boolean | undefined,
      rightPart as string,
    )
    if (!item[leftPart]) return false
    switch (operator) {
      case '==':
        return item[leftPart] == finalRightPart
      case '!=':
        return item[leftPart] != finalRightPart
      case '>':
        return item[leftPart]! > finalRightPart!
      case '<':
        return item[leftPart]! < finalRightPart!
      case '>=':
        return item[leftPart]! >= finalRightPart!
      case '<=':
        return item[leftPart]! <= finalRightPart!
      default:
        return true
    }
  }
  // Конец блока

  // Работа с переменными
  // Начало блока
  private checkOptionProduct(name: string) {
    // сбрасываем товар, если произошли изменения в блоке
    const option = this.data.options.filter((option) => option.name == name)[0]
    if (option?.product && this.products.get(option.product)!.length > 0) {
      this.products.set(option.product, [])
    }
  }

  setVariable(name: string, value: string | number | boolean, setProduct?: boolean) {
    if (name == 'block_amount') {
      this.prev_block_amount = this.variables.get('block_amount') as number
      Array.from(this.variabilityVariables.keys()).map((name) => {
        const blockAmount = this.variables.get('block_amount')
        const prevValue = this.variables.get(name)
        if (blockAmount) {
          const increment = Math.floor((prevValue as number) / (blockAmount as number)) || 1
          if (blockAmount < value) this.variables.set(name, (prevValue as number) + increment)
          else this.variables.set(name, Math.max(0, (prevValue as number) - increment))
        } else {
          this.variables.set(name, this.variabilityVariables.get(name)!)
        }
      })
    }
    this.variables.set(name, value)
    const prevArr = [...this.presentOptions]
    this.setPresent()
    this.compareArrays(prevArr, this.presentOptions)
    if (!setProduct) this.checkOptionProduct(name)
  }

  getVariable(name: string) {
    return this.variables.get(name)
  }

  resetVariables = () => {
    this.variables = new Map(this.initialVariables)
  }
  // Конец блока

  // Функции для инициализации store
  // Начало блока
  private setInitialVariable(option: IOption) {
    switch (option.option_type) {
      case 'checkbox':
        this.variables.set(option.name, false)
        break
      case 'radio':
        this.variables.set(option.name, option.choices!.split(';').map((part) => part.trim())[0])
        break
      case 'counter':
      case 'number':
        this.variables.set(option.name, 0)
        break
      default:
        const error = new Error(`Unknown option type: ${option.option_type}`)
        throw error
    }
  }

  private setVariables = () => {
    // Формируем общий словарь для переменных
    this.variables.set('block_amount', 0)
    try {
      this.data.options.forEach((option) => {
        this.setInitialVariable(option)

        if (option.variability_with_block_amount) {
          this.variabilityVariables.set(option.name, option.initial_value || 1)
        }
        if (option.product) {
          // Формируем словарь фильтров, если указано, что это условие для фильтра какого-то товара
          if (option.block_amount_undependent)
            this.productAmountDependencies.set(option.product, option.amount_depend)
          if (!this.filters.get(option.product)) {
            this.filters.set(option.product, { initial: [] })
            this.products.set(option.product, [])
          }
          if (option.filters) this.parseFilters(option.filters, option.name, option.product)
          this.filters.get(option.product)!['initial' as keyof IConditionCategory].push({
            leftPart: option.name as keyof TProduct,
          })
        }
      })
    } catch (error) {
      console.error(error)
      calculatorStore.error = error
    }
  }

  private parseFilters = (str: string, optionName: string, optionProduct: number) => {
    // С бэка приходит строка из фильтров, нам нужно разбить на фильтры
    str.split('\n').map((categoryPart) => {
      const category = categoryPart.trim().split(/:(.*)/)[0]
      categoryPart
        .trim()
        .split(/:(.*)/)[1]
        .split(';')
        .map((part) => part.trim())
        .filter((part) => part !== '')
        .map((condition) => {
          if (category == 'initial')
            this.filters.get(optionProduct)!.initial.push({ ...this.splitCondition(condition) })
          else {
            if (!this.filters.get(optionProduct)![optionName])
              this.filters.get(optionProduct)![optionName] = []
            this.filters.get(optionProduct)![optionName].push({
              optionValue: category,
              ...this.splitCondition(condition),
            })
          }
        })
    })
  }

  private splitCondition = (condition: string) => {
    // Регулярное выражение для поиска оператора и разделения строки
    const regex = /(==|!=|>=|<=|>|<)/
    const match = condition.match(regex)

    if (!match) {
      const error = new Error(`Invalid condition string ${condition}`)
      throw error
    }

    // Получение индекса оператора
    const operatorIndex = match.index

    // Разделение строки на левую часть, оператор и правую часть
    const leftPart = condition.slice(0, operatorIndex).trim() as keyof TProduct
    const operator = match[0]
    const rightPart = condition.slice(operatorIndex! + operator.length).trim()

    return {
      leftPart,
      operator,
      rightPart,
    }
  }
  // Конец блока

  // Реализация добавления товаров в калькулятор
  // Начало блока
  private changeTypeForOption(option: IOption, value: string) {
    switch (option.option_type) {
      case 'counter':
      case 'number':
        return parseInt(value)
      case 'checkbox':
        if (value == 'true') return true
        if (value == 'false') return false
      default:
        return value
    }
  }

  private reverseCondition<K extends keyof TProduct>(product: TProduct) {
    const filtersKeys = Object.keys(this.filters.get(product.polymorphic_ctype)!).filter(
      (key) => key != 'initial',
    ) as K[]
    filtersKeys.map((key) => {
      const conditions = this.filters.get(product.polymorphic_ctype)![key]
      const optionValues = [...new Set(conditions.map((condition) => condition.optionValue))]
      optionValues.map((value) => {
        const optionValueConditions = conditions.filter(
          (condition) => condition.optionValue == value,
        )
        if (optionValueConditions.every((condition) => this.applyCondition(product, condition))) {
          const changedValue = this.changeTypeForOption(
            this.data.options.find((option) => option.name == key)!,
            value!,
          )
          this.setVariable(key, changedValue, true)
        }
      })
    })
  }

  private setProductByFilters(product: TProduct, value: number) {
    if (this.products.has(product.polymorphic_ctype)) {
      if (this.applyInitialFilters(product, this.filters.get(product.polymorphic_ctype)!.initial)) {
        this.products.set(product.polymorphic_ctype, [product])
        this.reverseCondition(product)
        if (this.productAmountDependencies.has(product.polymorphic_ctype)) {
          if (this.productAmountDependencies.has(product.polymorphic_ctype))
            this.setProductVariable(
              this.productAmountDependencies.get(product.polymorphic_ctype)!,
              typeof value == 'number' ? value : 0,
            )
        } else this.setProductVariable('block_amount', typeof value == 'number' ? value : 0)
      }
    }
  }

  private setProductVariable(name: string, value: string | number | boolean) {
    if (name == 'block_amount') {
      this.prev_block_amount = parseInt(this.variables.get(name) as string)
    }
    this.variables.set(name, value)
    const prevArr = [...this.presentOptions]
    this.setPresent()
    this.compareArrays(prevArr, this.presentOptions)
  }

  private setVariableByOptionType(type: string, name: string, value: number | string) {
    switch (type) {
      case 'checkbox':
        this.setProductVariable(name, value)
        break
      case 'counter':
      case 'number':
        this.setProductVariable(name, parseInt(value as string))
        break
      case 'radio':
        this.setProductVariable(name, value.toString())
        break
      default:
        const error = new Error('Invalid option_type')
        calculatorStore.error = error
        console.error(error)
    }
  }

  private setOptions(product: TProduct, value: number | string) {
    const priceOptions = this.data.options.filter((option) => {
      const productPrices = product.prices_in_price_lists.filter(
        (price) => option.price?.id == price.id,
      )
      if (productPrices.length > 0) return true
    })
    if (priceOptions.length > 0)
      priceOptions.map((option) => {
        this.setVariableByOptionType(option.option_type, option.name, value)
      })
  }

  private resetProductOptions(category: number) {
    this.data.options
      .filter((option) => option.product == category)
      .map((option) => this.variables.set(option.name, this.initialVariables.get(option.name)!))
  }

  checkProductsForCurrentBlock(products: IEquipment[]) {
    const result = products.reduce((result, current) => {
      if (this.products.has(current.product.polymorphic_ctype))
        return (
          result &&
          this.applyInitialFilters(
            current.product,
            this.filters.get(current.product.polymorphic_ctype)!.initial,
          )
        )
      else return false
    }, true)
    return result
  }

  checkProductForCurrentBlock(product: TProduct) {
    if (this.products.has(product.polymorphic_ctype))
      return this.applyInitialFilters(product, this.filters.get(product.polymorphic_ctype)!.initial)
    else return false
  }

  setProducts(products: IEquipment[]) {
    const currentBlock = this.checkProductsForCurrentBlock(products)
    if (currentBlock) {
      products.map((product) => {
        this.resetProductOptions(product.product.polymorphic_ctype)
        this.setProductByFilters(product.product, product.amount)
        this.setOptions(product.product, product.amount)
      })
    }
  }

  setProduct(product: TProduct, amount: number) {
    if (this.products.has(product.polymorphic_ctype)) {
      this.resetProductOptions(product.polymorphic_ctype)
      this.setProductByFilters(product, amount)
      this.setOptions(product, amount)
    }
  }
  // Конец блока

  createFormData() {
    const data: CalculatorBlockData = {
      name: this.data.title,
      amount: parseInt(this.variables.get('block_amount') as string),
      options: this.data.options.map((option) => ({
        name: option.title,
        value: this.variables.get(option.name)!.toString(),
      })),
      products_category: this.filter(),
      price: this.result,
    }
    return data
  }
}

export default CalculatorBlockStore
