import { TProduct } from '@/widgets/Calculator/types'

interface CalculatorData {
  price: number
  blocks: CalculatorBlockData[]
}

interface CalculatorBlockData {
  name: string
  amount: number
  options: { name: string; value: string }[]
  products_category: { name: string; products: TProduct[] }[]
  price: number
}

export type { CalculatorData, CalculatorBlockData }
