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
  quantity_selection: boolean
}

interface IFormula {
  id: number
  expression: string
}

interface IPriceList {
  [key: string]: number
}

interface ICalculatorData {
  id: number
  blocks: IBlock[]
  price_list: IPriceList
}

export type { ICamera, IRegister, IOption, IBlock, IPriceList, ICalculatorData }
