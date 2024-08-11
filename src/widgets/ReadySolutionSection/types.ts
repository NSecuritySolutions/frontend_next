import { IBlock, TProduct } from '../Calculator/types'

interface ITag {
  id: number
  title: string
}

interface IEquipment {
  id: number
  solution: number
  text: string
  is_link: boolean
  product: TProduct
  calculator_block: number
  amount: number
}

interface ISolution {
  id: number
  title: string
  image: string
  tooltip_text: string
  description: string[]
  price?: number
  tags: ITag[]
  equipment: IEquipment[]
}

export type { ISolution, ITag, IEquipment }
