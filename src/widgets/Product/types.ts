import { IProduct } from '@/widgets/Calculator/types'

export interface ProductProps {
  data: IProduct
}

export type TItem = {
  id: number
  price: number
  title: string
  description: string
  moreInfo: string[]
  image: string
}
