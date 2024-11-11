interface IProp {
  field_name: string
  name: string
  value: string | number | boolean
}

interface IProduct {
  id: number
  product_type: number
  category: { id: number; title: string }
  manufacturer: { id: number; title: string }
  article?: string
  model: string
  image?: string
  description: string
  price: string
  prices_in_price_lists: IPrice[]
  properties: IProp[]
}

interface IOption {
  id: number
  position: number
  title: string
  description: string
  option_type: 'number' | 'checkbox' | 'radio' | 'counter'
  name: string
  choices?: string
  product?: number
  filters?: string
  block: number
  depends_on?: number
  depends_on_value?: string
  dependencies: boolean
  price?: IPrice
  block_amount_undependent: boolean
  amount_depend?: string
  variability_with_block_amount: boolean
  initial_value: number
}

interface ICalculation {
  id: number
  amount: string
  filters?: string
  product: number
}

interface IBlock {
  id: number
  position: number
  title: string
  image: string
  formula: IFormula
  calculator: number
  options: IOption[]
  calculations: ICalculation[]
  quantity_selection: boolean
}

interface IFormula {
  id: number
  name: string
  expression: string
}

interface IPrice {
  id: number
  name: string
  variable_name: string
  price: number
  is_show: boolean
  price_list_category: number
  product: IProduct
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
  active: boolean
}

export type {
  IOption,
  IBlock,
  ICalculation,
  IPriceList,
  ICalculatorData,
  IPriceVariables,
  IProduct,
}
