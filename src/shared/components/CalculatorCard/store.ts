import { makeAutoObservable, computed, observable, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { create, all } from 'mathjs'
import calculatorStore from '@/widgets/Calculator/store'
import {
  IBlock,
  ICamera,
  IRegister,
  IHDD,
  IFACP,
  ISensor,
  IPACSProduct,
  IPriceVariables,
  IOption,
} from '@/widgets/Calculator/types'
import { ICondition, IConditionCategory } from './types'

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
  id: string
  data: IBlock
  presentOptions: IOption[] = []
  disabled: number = 0
  appeared: number = 0
  formula: string = ''
  initialVariables: Record<string, string | number | boolean> = {}
  variables: Record<string, string | number | boolean> = {}
  filters: Record<string, IConditionCategory> = {}
  quantity_selection: boolean

  constructor(data: IBlock, price: IPriceVariables) {
    this.id = uuidv4()
    this.data = data
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
      result: computed,
      setVariable: action,
      setPresent: action,
    })
  }

  compareArrays = (prevArr: IOption[], currentArr: IOption[]): void => {
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

  handleIsPresent = (option: IOption) => {
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

  get result() {
    const mathResult = math.evaluate(this.formula, this.variables)
    const filterResult = this.filter()
    const result =
      (this.variables.block_amount && this.variables.block_amount != 0 ? mathResult : 0) +
      filterResult * (this.variables.block_amount as number)
    return result || 0
  }

  filter() {
    // Фильтруем по категориям, заодно выбираем самую минимальную цену
    const minPriceData = Object.keys(this.filters).map((category) => {
      const filteredData = this.filterProduct(category)
      return filteredData.reduce((min, current) => {
        return current.price < min.price ? current : min
      }, filteredData[0])
    })
    // Складываем цены товаров (в каждой категории 1 товар с минимальной ценой на основе фильтров)
    const sum = minPriceData.reduce((sum, current) => {
      if (!current) return sum
      return sum + current.price
    }, 0)
    return sum
  }

  filterProduct(category: string) {
    // Отфильтровываем по категории
    const products = calculatorStore.products.filter((item) => item?.category?.title === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      // this.applyInitialFilters(item, this.filters[category].initial) &&
      this.applyFilters(item, this.filters[category]),
    )
    return filteredProducts
  }

  applyInitialFilters(
    item: ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct,
    conditions: ICondition[],
  ) {
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

  applyFilters(
    item: ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct,
    conditionCategory: IConditionCategory,
  ) {
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

  applyCondition(
    item: ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct,
    condition: ICondition,
  ) {
    const { leftPart, operator, rightPart } = condition
    switch (operator) {
      case '==':
        return item[leftPart] == rightPart!
      case '!=':
        return item[leftPart] != rightPart!
      case '>':
        return item[leftPart]! > rightPart!
      case '<':
        return item[leftPart]! < rightPart!
      case '>=':
        return item[leftPart]! >= rightPart!
      case '<=':
        return item[leftPart]! <= rightPart!
      default:
        return true
    }
  }

  setVariable(name: string, value: string | number | boolean) {
    this.variables[name] = value
    const prevArr = [...this.presentOptions]
    this.setPresent()
    this.compareArrays(prevArr, this.presentOptions)
  }

  getVariable(name: string) {
    return this.variables[name] || ''
  }

  setVariables = () => {
    // Формируем общий словарь для переменных
    this.data.options.forEach((option) => {
      switch (option.option_type) {
        case 'checkbox':
          this.setVariable(option.name, false)
          break
        case 'radio':
          this.setVariable(option.name, 'unknown')
          break
        case 'number':
          this.setVariable(option.name, 0)
          break
        case 'counter':
          this.setVariable(option.name, '0')
          break
        default:
          throw new Error(`Unknown option type: ${option.option_type}`)
      }

      // Формируем словарь фильтров, если указано, что это условие для фильтра какого-то товара
      if (option.product) {
        if (!this.filters[option.product]) this.filters[option.product] = { initial: [] }
        if (option.filters) this.parseFilters(option.filters, option.name, option.product)
        this.filters[option.product]['initial' as keyof IConditionCategory].push({
          leftPart: option.name as keyof (
            | ICamera
            | IRegister
            | IHDD
            | IFACP
            | ISensor
            | IPACSProduct
          ),
        })
      }
      this.variables.block_amount = 0
    })
  }

  resetVariables = () => {
    this.variables = { ...this.initialVariables }
  }

  parseFilters = (str: string, optionName: string, optionProduct: string) => {
    // С бэка приходит строка из фильтров, нам нужно разбить на фильтры
    str.split('\n').map((categoryPart) => {
      const category = categoryPart.trim().split(/:(.*)/)[0]
      // console.log(categoryPart.split(/:(.*)/))
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

  splitCondition = (condition: string) => {
    // Регулярное выражение для поиска оператора и разделения строки
    const regex = /(==|!=|>=|<=|>|<)/
    const match = condition.match(regex)

    if (!match) {
      console.log(`Invalid condition string: ${condition}`)
      throw new Error('Invalid condition string')
    }

    // Получение индекса оператора
    const operatorIndex = match.index

    // Разделение строки на левую часть, оператор и правую часть
    const leftPart = condition.slice(0, operatorIndex).trim() as keyof (
      | ICamera
      | IRegister
      | IHDD
      | IFACP
      | ISensor
      | IPACSProduct
    )
    const operator = match[0]
    const rightPart = condition.slice(operatorIndex! + operator.length).trim()

    return {
      leftPart,
      operator,
      rightPart,
    }
  }
}

export default CalculatorBlockStore
