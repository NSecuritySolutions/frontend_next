import { makeAutoObservable, computed, observable, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { create, all } from 'mathjs'
import calculatorStore from '@/app/store/calculatorStore'
import { IBlock, IPriceVariables, IOption, TProduct } from '@/widgets/Calculator/types'
import { ICondition, IConditionCategory } from '@/shared/components/CalculatorCard/types'
import { IEquipment } from '@/widgets/ReadySolutionSection/types'

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
  initialVariables: Record<string, string | number | boolean>
  variables: Record<string, string | number | boolean>
  variabilityVariables: Record<string, number> = {}
  quantity_selection: boolean

  // Ключи это названия категорий
  filters: Record<string, IConditionCategory> = {}
  products: Record<string, TProduct[]> = {}
  productAmountDependencies: Record<string, string | undefined> = {}

  constructor(data: IBlock, price: IPriceVariables) {
    this.id = uuidv4()
    this.backend_id = data.id
    this.data = data
    this.prev_block_amount = 0
    this.quantity_selection = data.quantity_selection
    this.formula = data.formula.expression
    this.variables = { ...price }
    this.setVariables()
    this.initialVariables = { ...this.variables }
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

  private checkOptionValueFilter(category: string, name: string, value: string | number | boolean) {
    const products = calculatorStore.products.filter((item) => item?.category?.title === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      this.applyFiltersForCheck(item, this.filters[category], name, value),
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
        if (this.variables[option] == 'unknown') {
          return true
        }
        if (condition.leftPart == name) {
          if (condition.optionValue == value.toString()) return this.applyCondition(item, condition)
          else return true
        }
        if (condition.optionValue == this.variables[option].toString()) {
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
        this.getVariable(depends.name).toString() == option.depends_on_value
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

    const filteredProducts = this.filter()
    const resultWithoutProducts =
      this.variables.block_amount && this.variables.block_amount != 0 ? mathResult : 0
    const blockFilteredProducts = filteredProducts.filter(
      (product) =>
        Object.keys(this.productAmountDependencies).find(
          (item) => product?.category.title == item,
        ) == undefined,
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
        ((this.filters && blockFilteredProductsResult) || Object.keys(this.filters).length == 0
          ? 1
          : 0) +
      blockFilteredProductsResult * (this.variables.block_amount as number)
    const otherFilteredProductsResult = otherFilteredProducts.reduce((sum, current) => {
      if (!current) return sum
      return (
        sum +
        current.price *
          (this.productAmountDependencies[current.category.title]
            ? (this.variables[this.productAmountDependencies[current.category.title]!] as number)
            : 1)
      )
    }, 0)
    const result = blockResult + (blockResult ? otherFilteredProductsResult : 0)
    return result || 0
  }

  private filter() {
    // Фильтруем по категориям, заодно выбираем самую минимальную цену
    const categoriesWithProducts = Object.keys(this.products).filter(
      (category) => this.products[category].length > 0,
    )
    const minPriceData = Object.keys(this.filters).map((category) => {
      let filteredData: TProduct[]
      if (categoriesWithProducts.find((item) => item == category))
        filteredData = this.products[category]
      else filteredData = this.filterProduct(category)
      return filteredData.reduce((min, current) => {
        return current.price < min.price ? current : min
      }, filteredData[0])
    })
    return minPriceData
  }

  private filterProduct(category: string) {
    // Отфильтровываем по категории
    const products = calculatorStore.products.filter((item) => item?.category?.title === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      this.applyFilters(item, this.filters[category]),
    )
    return filteredProducts
  }

  private applyInitialFilters(item: TProduct, conditions: ICondition[]) {
    if (conditions.length == 0) return true
    return conditions.every((condition) => {
      // Если в объекте условия отсутствует operator, значит это отслеживаемое условие
      if (!condition.operator) {
        if (this.filters[item.category.title][condition.leftPart]) return true
        return (
          item[condition.leftPart] == this.variables[condition.leftPart] ||
          this.variables[condition.leftPart] == 'unknown' ||
          this.variables[condition.leftPart] == false
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
        if (this.variables[option] == 'unknown' || this.variables[option] == false) {
          return true
        }
        if (condition.optionValue == this.variables[option].toString()) {
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
    const option = this.data.options.filter((option) => option.name == name)[0]
    if (option?.product && this.products[option.product].length > 0) {
      this.products[option.product] = []
    }
  }

  setVariable(name: string, value: string | number | boolean) {
    if (name == 'block_amount') {
      this.prev_block_amount = this.variables.block_amount as number
      Object.keys(this.variabilityVariables).map((name) => {
        const blockAmount = this.variables.block_amount
        const prevValue = this.variables[name]
        if (blockAmount) {
          const increment = Math.floor((prevValue as number) / (blockAmount as number)) || 1
          if (blockAmount < value) this.variables[name] = (prevValue as number) + increment
          else this.variables[name] = Math.max(0, (prevValue as number) - increment)
        } else {
          this.variables[name] = this.variabilityVariables[name]
        }
      })
    }
    this.variables[name] = value
    const prevArr = [...this.presentOptions]
    this.setPresent()
    this.compareArrays(prevArr, this.presentOptions)
    this.checkOptionProduct(name)
  }

  getVariable(name: string) {
    return this.variables[name]
  }

  resetVariables = () => {
    this.variables = { ...this.initialVariables }
  }
  // Конец блока

  // Функции для инициализации store
  // Начало блока
  private setInitialVariable(option: IOption) {
    switch (option.option_type) {
      case 'checkbox':
        this.variables[option.name] = false
        break
      case 'radio':
        this.variables[option.name] = option.choices!.split(';').map((part) => part.trim())[0]
        break
      case 'counter':
      case 'number':
        this.variables[option.name] = 0
        break
      default:
        const error = new Error(`Unknown option type: ${option.option_type}`)
        console.error(error)
        calculatorStore.error = error
    }
  }

  private setVariables = () => {
    // Формируем общий словарь для переменных
    this.variables.block_amount = 0
    this.data.options.forEach((option) => {
      this.setInitialVariable(option)

      if (option.variability_with_block_amount) {
        this.variabilityVariables[option.name] = option.initial_value || 1
      }
      if (option.product) {
        // Формируем словарь фильтров, если указано, что это условие для фильтра какого-то товара
        if (option.block_amount_undependent)
          this.productAmountDependencies[option.product] = option.amount_depend
        if (!this.filters[option.product]) {
          this.filters[option.product] = { initial: [] }
          this.products[option.product] = []
        }
        if (option.filters) this.parseFilters(option.filters, option.name, option.product)
        this.filters[option.product]['initial' as keyof IConditionCategory].push({
          leftPart: option.name as keyof TProduct,
        })
      }
    })
  }

  private parseFilters = (str: string, optionName: string, optionProduct: string) => {
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
            this.filters[optionProduct].initial.push({ ...this.splitCondition(condition) })
          else {
            if (!this.filters[optionProduct][optionName])
              this.filters[optionProduct][optionName] = []
            this.filters[optionProduct][optionName].push({
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
      console.error(error)
      calculatorStore.error = error
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
    const filtersKeys = Object.keys(this.filters[product.category.title]).filter(
      (key) => key != 'initial',
    ) as K[]
    filtersKeys.map((key) => {
      const conditions = this.filters[product.category.title][key]
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
          this.setVariable(key, changedValue)
        }
      })
    })
  }

  private setProductByFilters(product: TProduct, value: number) {
    if (Object.keys(this.products).find((item) => item == product.category.title)) {
      if (this.applyInitialFilters(product, this.filters[product.category.title].initial)) {
        // this.products[product.category.title].push(product)
        this.products[product.category.title] = [product]
        this.reverseCondition(product)
        if (
          Object.keys(this.productAmountDependencies).find((item) => item == product.category.title)
        ) {
          if (this.productAmountDependencies[product.category.title])
            this.setProductVariable(
              this.productAmountDependencies[product.category.title]!,
              typeof value == 'number' ? value : 0,
            )
        } else this.setProductVariable('block_amount', typeof value == 'number' ? value : 0)
      }
    }
  }

  private setProductVariable(name: string, value: string | number | boolean) {
    if (name == 'block_amount') {
      this.prev_block_amount = parseInt(this.variables[name] as string)
    }
    this.variables[name] = value
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

  private resetProductOptions(category: string) {
    this.data.options
      .filter((option) => option.product == category)
      .map((option) => (this.variables[option.name] = this.initialVariables[option.name]))
  }

  private checkProductsForCurrentBlock(products: IEquipment[]) {
    const result = products.reduce((result, current) => {
      if (Object.keys(this.products).find((item) => item == current.product.category.title))
        return (
          result &&
          this.applyInitialFilters(
            current.product,
            this.filters[current.product.category.title].initial,
          )
        )
      else return result
    }, true)
    return result
  }

  setProducts(products: IEquipment[]) {
    const currentBlock = this.checkProductsForCurrentBlock(products)
    if (currentBlock) {
      products.map((product) => {
        this.resetProductOptions(product.product.category.title)
        this.setProductByFilters(product.product, product.amount)
        this.setOptions(product.product, product.amount)
      })
    }
  }

  setProduct(product: TProduct, amount: number) {
    if (Object.keys(this.products).find((item) => item == product.category.title)) {
      this.resetProductOptions(product.category.title)
      this.setProductByFilters(product, amount)
      this.setOptions(product, amount)
    }
  }
  // Конец блока
}

export default CalculatorBlockStore
