import { makeAutoObservable, computed, observable } from 'mobx'

import { create, all } from 'mathjs'
import calculatorStore from '@/widgets/Calculator/store'

const config = {}
const math = create(all, config)

math.import(
  {
    if: function (condition: boolean, trueValue: number, falseValue: number) {
      return condition ? trueValue : falseValue
    },
  },
  { override: true },
)

interface IProduct {
  id: number
  category: { id: number; title: string }
  manufacturer: { id: number; title: string }
  article: string
  model: string
  image: string
  price: number
}

interface ICamera extends IProduct {
  description: string
  type: string
  form_factor: string
  accomodation: string
  resolution: string
  dark: string
  temperature: string
  power_supply: string
  microphone: string
  micro_sd: string
  viewing_anlge: string
  focus: string
}

interface IRegister extends IProduct {
  description: string
  max_resolution: string
  quantity_cam: number
  quantity_hdd: number
  max_size_hdd: number
  power_supply: string
}

interface IOption {
  id: number
  title: string
  description: string
  option_type: 'number' | 'checkbox' | 'radio'
  name: string
  choices?: string
  product?: string
  filters?: string
  block: number
}

interface IBlock {
  id: number
  title: string
  image: string
  calculator: number
  options: IOption[]
  formula: IFormula
}

interface IFormula {
  id: number
  expression: string
}

interface IPriceList {
  id: number
  setup_inner_camera_easy: number
  setup_inner_camera: number
  setup_inner_camera_hard: number
  cabel_price_for_inner_cameras_per_meter: number
  setup_outer_camera_easy: number
  setup_outer_camera: number
  setup_outer_camera_hard: number
  cabel_price_for_outer_cameras_per_meter: number
  setup_ahd_registery: number
  setup_ip_registery: number
  price_multiplier_for_registery_setup: number
  registery_4: number
  registery_8: number
  registery_16: number
  registery_20: number
  registery_24: number
  registery_32: number
  power_unit: number
  is_current: boolean
}

type TCondition = {
  leftPart: keyof (ICamera | IRegister)
  operator?: string
  rightPart?: string
}

class CalculatorBlockStore {
  data: IBlock
  formula: string = ''
  variables: Record<string, string | number | boolean> = {}
  filters: Record<string, TCondition[]> = {}

  constructor(data: IBlock, price: IPriceList) {
    this.data = data
    this.formula = data.formula.expression
    this.variables = { ...price }
    this.setVariables()
    makeAutoObservable(this, {
      variables: observable,
      filters: observable,
      result: computed,
    })
  }

  get result() {
    const mathResult = math.evaluate(this.formula, this.variables)
    const filterResult = this.filter()
    const result = mathResult + filterResult * (this.variables[this.data.title] as number)
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
    const products = calculatorStore.products.filter((item) => item.category.title === category)
    // Применяем дополнительные фильтры на основе выбора + начальных условий
    const filteredProducts = products.filter((item) =>
      this.applyConditions(item, this.filters[category]),
    )
    return filteredProducts
  }

  applyConditions(item: ICamera | IRegister, conditions: TCondition[]) {
    // Логика для применения условий
    return conditions.every((condition) => {
      // Если в объекте условия отсутствует operator, значит это отслеживаемое условие
      if (!condition.operator)
        return (
          item[condition.leftPart] == this.variables[condition.leftPart] ||
          this.variables[condition.leftPart] == 'unknown'
        )
      // Это для неотслеживаемых условий (начальные фильтры, которые были заданы ны бэке)
      const { leftPart, operator, rightPart } = condition
      switch (operator) {
        case '==':
          return item[leftPart] == rightPart!
        case '!=':
          return item[leftPart] != rightPart!
        case '>':
          return item[leftPart] > rightPart!
        case '<':
          return item[leftPart] < rightPart!
        case '>=':
          return item[leftPart] >= rightPart!
        case '<=':
          return item[leftPart] <= rightPart!
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
      option.option_type === 'checkbox' && this.setVariable(option.name, false)
      option.option_type === 'radio' && this.setVariable(option.name, 'unknown')
      option.option_type === 'number' && this.setVariable(option.name, 0)

      // Формируем словарь фильтров, если указано, что это условие для фильтра какого-то товара
      if (option.product) {
        this.filters[option.product] = []
        option.filters && this.filters[option.product].push(...this.parseFilters(option.filters))
        this.filters[option.product].push({ leftPart: option.name as keyof (ICamera | IRegister) })
      }
    })
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
    const leftPart = condition.slice(0, operatorIndex).trim() as keyof (ICamera | IRegister)
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
