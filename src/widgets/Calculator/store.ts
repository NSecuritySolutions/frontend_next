import axios from 'axios'
import { makeAutoObservable, action } from 'mobx'

interface IOption {
  id: number
  title: string
  description: string
  option_type: 'number' | 'checkbox' | 'radio'
  name: string
  choices?: string
  block: number
}

interface IBlock {
  id: number
  title: string
  image: string
  calculator: number
  options: IOption[]
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

interface ICalculatorData {
  id: number
  blocks: IBlock[]
  formula: IFormula
  price_list: IPriceList
}

class CalculatorStore {
  data: IBlock[] | [] = []
  formula: string = ''
  variables: Record<string, string | number | boolean> = {}
  isLoading = true
  error: null | unknown = null

  constructor() {
    makeAutoObservable(this)
  }

  setVariable(name: string, value: string | number | boolean) {
    this.variables[name] = value
  }

  getVariable(name: string) {
    return this.variables[name] || ''
  }

  printInputsData() {
    console.log(this.variables)
  }

  fetchData() {
    this.isLoading = true
    axios.get('http://localhost:8000/api/v1/calculator/').then(
      action('fetchData', (response) => {
        const fullData: ICalculatorData[] = response.data
        this.formula = fullData[0].formula.expression
        this.data = fullData[0].blocks
        const prices = fullData[0].price_list
        this.variables = Object.assign(prices, this.variables)
        this.setVariables()
        this.isLoading = false
      }),
      action('fetchError', (error) => {
        this.error = error
        this.isLoading = false
      }),
    )
  }

  setVariables = () => {
    this.data.forEach((block) => {
      block.options.forEach((option) => {
        option.option_type === 'checkbox' && this.setVariable(option.name, false)
        option.option_type === 'radio' && this.setVariable(option.name, 'unknown')
        option.option_type === 'number' && this.setVariable(option.name, 0)
      })
    })
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
