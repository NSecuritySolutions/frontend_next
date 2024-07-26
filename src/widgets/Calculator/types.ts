interface IProduct {
  id: number
  category: { id: number; title: string }
  manufacturer: { id: number; title: string }
  article?: string
  model: string
  image: string
  description: string
  price: number
  prices_in_price_lists: IPrice[]
}

interface ICamera extends IProduct {
  type: string
  form_factor: string
  accommodation: string
  resolution: string
  dark: string
  temperature: string
  power_supply: string
  microphone: string
  micro_sd: string
  viewing_angle: string
  focus: string
}

interface IRegister extends IProduct {
  max_resolution: string
  quantity_cam: number
  quantity_hdd: number
  max_size_hdd: number
  power_supply: string
}

interface IFACP extends IProduct {
  alarm_loops: number
  wireless_sensor_support: boolean
  phone_control: boolean
  temperature: string
}

interface ISensor extends IProduct {
  temperature: string
}

interface IPACSProduct extends IProduct {}

interface IHDD extends IProduct {}

interface IOption {
  id: number
  position: number
  title: string
  description: string
  option_type: 'number' | 'checkbox' | 'radio' | 'counter'
  name: string
  choices?: string
  product?: string
  filters?: string
  block: number
  depends_on: number
  depends_on_value: string | number | boolean
  dependencies: boolean
  price: IPrice
}

interface IBlock {
  id: number
  position: number
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

interface IPrice {
  id: number
  price_list_category: number
  name: string
  variable_name: string
  price: number
  is_show: boolean
  product: TProduct
}

interface IPriceListCategory {
  id: number
  name: string
  price_list: number
  prices: IPrice[]
}

interface IPriceList {
  id: number
  date: string
  categories: IPriceListCategory[]
}

interface IPriceVariables {
  [key: string]: number
}

interface ICalculatorData {
  id: number
  blocks: IBlock[]
  price_list: IPriceList
}

type TProduct = ICamera | IRegister | IFACP | IHDD | ISensor | IPACSProduct

export type {
  ICamera,
  IRegister,
  IOption,
  IBlock,
  IPriceList,
  ICalculatorData,
  IFACP,
  IHDD,
  ISensor,
  IPACSProduct,
  IPriceVariables,
  TProduct,
}
