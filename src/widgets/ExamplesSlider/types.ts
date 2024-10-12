import { Stringifier } from 'styled-components/dist/types'
import { TProduct } from '../Calculator/types'

interface ExampleImage {
  id: number
  image: string
  is_main: boolean
}

interface IOurWorkProduct {
  text: string
  is_link: boolean
  amount: number
  product: TProduct
}

interface Example {
  id: number
  budget: number
  area: number
  add_date: string
  title: string
  images: ExampleImage[]
  time: number
  description: string[]
  products: IOurWorkProduct[]
}

export type { Example, ExampleImage }
