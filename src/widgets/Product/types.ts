import { TProduct } from '@/widgets/Calculator/types'

export interface ProductProps {
  data: TProduct
}

export type TItem = {
  id: number
  price: number
  title: string
  description: string
  moreInfo: string[]
  image: string
}
