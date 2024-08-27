import { TProduct } from '@/widgets/Calculator/types'

interface CalculatorData {
  price: number
  blocks: CalculatorBlockData[]
}

interface CalculatorBlockData {
  name: string
  amount: number
  choices: { name: string; value: string }[]
  minPriceProducts: TProduct[]
  products: { [category: string]: TProduct[] }
  price: number
}

export type { CalculatorData, CalculatorBlockData }
