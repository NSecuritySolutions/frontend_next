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
  block_amount_undependent: boolean
  amount_depend?: string
  variability_with_block_amount: boolean
  initial_value?: string
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
  main_product: number
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

interface ICalculatorData {
  id: number
  blocks: IBlock[]
  active: boolean
}

export type { IOption, IBlock, ICalculation, ICalculatorData, IProduct }
