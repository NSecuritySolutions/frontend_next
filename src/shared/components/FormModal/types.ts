import { IProduct } from '@/widgets/Calculator/types'

interface CalculatorData {
  price: number
  blocks: CalculatorBlockData[]
}

interface CalculatorBlockData {
  name: string
  amount: number
  options: { name: string; value: string }[]
  products_category: { category_id: number; products: IProduct[] }[]
  price: number
}

export type { CalculatorData, CalculatorBlockData }
