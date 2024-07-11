import { makeAutoObservable, computed, observable, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { create, all } from 'mathjs'
import calculatorStore from '@/widgets/Calculator/store'
import {
  IBlock,
  ICamera,
  IPriceList,
  IRegister,
  IHDD,
  IFACP,
  ISensor,
  IPACSProduct,
} from '@/widgets/Calculator/types'
import { TCondition } from './types'

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
  formula: string = ''
  initialVariables: Record<string, string | number | boolean> = {}
  variables: Record<string, string | number | boolean> = {}
  filters: Record<string, TCondition[]> = {}
  quantity_selection: boolean

  constructor(data: IBlock, price: IPriceList) {
    this.id = uuidv4()
    this.data = data
    this.quantity_selection = data.quantity_selection
    this.formula = data.formula.expression
    this.variables = { ...price }
    this.setVariables()
    this.initialVariables = { ...this.variables }
    makeAutoObservable(this, {
      variables: observable,
      filters: observable,
      result: computed,
      setVariable: action,
    })
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
      this.applyConditions(item, this.filters[category]),
    )
    return filteredProducts
  }

  applyConditions(
    item: ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct,
    conditions: TCondition[],
  ) {
    // Логика для применения условий
    return conditions.every((condition) => {
      // Если в объекте условия отсутствует operator, значит это отслеживаемое условие
      if (!condition.operator) {
        return (
          item[condition.leftPart] == this.variables[condition.leftPart] ||
          this.variables[condition.leftPart] == 'unknown'
        )
      }
      // Это для неотслеживаемых условий (начальные фильтры, которые были заданы ны бэке)
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
    })
  }

  setVariable(name: string, value: string | number | boolean) {
    this.variables[name] = value
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
        this.filters[option.product] = []
        option.filters && this.filters[option.product].push(...this.parseFilters(option.filters))
        this.filters[option.product].push({
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

  parseFilters = (str: string) => {
    // С бэка приходит строка из фильтров, нам нужно разбить на фильтры
    const filters = str
      .split(',')
      .map((part) => part.trim())
      .filter((part) => part !== '')
      .map((condition) => this.splitCondition(condition))
    return filters
  }

  splitCondition = (condition: string) => {
    // Регулярное выражение для поиска оператора и разделения строки
    const regex = /(==|!=|>=|<=|>|<)/
    const match = condition.match(regex)

    if (!match) {
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
