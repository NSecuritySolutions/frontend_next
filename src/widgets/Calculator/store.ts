import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'
import { BASE_URL } from '@/shared/constants/url/url'
import axios from 'axios'
import { makeAutoObservable, action, computed, observable } from 'mobx'

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
  formula: IFormula
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
  price_list: IPriceList
}

class CalculatorStore {
  data: IBlock[] = []
  // @TODO Не забыть переделать модель цен на бэке!!!!
  prices: IPriceList | undefined = undefined
  products: (ICamera | IRegister)[] = []
  blocks: CalculatorBlockStore[] = []
  isLoading = true
  error: null | unknown = null

  constructor() {
    makeAutoObservable(this, {
      blocks: observable,
      result: computed,
    })
  }

  get result() {
    const sum = this.blocks.reduce((sum, block) => {
      return sum + block.result
    }, 0)
    const formatedSum = sum.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    return formatedSum
  }

  setBlocks() {
    this.blocks = this.data.map((blockData) => new CalculatorBlockStore(blockData, this.prices!))
  }

  setNewBlock(id: number) {
    this.blocks.push(
      new CalculatorBlockStore(this.data.filter((block) => block.id == id)[0], this.prices!),
    )
  }

  removeBlock(id: number) {
    this.blocks.splice(id, 1)
  }

  fetchData() {
    this.isLoading = true
    axios.get(`${BASE_URL}/api/v1/product/`, { timeout: 10000 }).then(
      action('fetchProducts', (response) => {
        this.products = response.data
      }),
      action('fetchProductsError', (error) => {
        this.error = error
        this.isLoading = false
      }),
    )
    axios.get(`${BASE_URL}/api/v1/calculator/`, { timeout: 10000 }).then(
      action('fetchData', (response) => {
        const fullData: ICalculatorData[] = response.data
        this.data = fullData[0].blocks
        this.prices = fullData[0].price_list
        this.setBlocks()
        this.isLoading = false
      }),
      action('fetchError', (error) => {
        this.error = error
        this.isLoading = false
      }),
    )
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
