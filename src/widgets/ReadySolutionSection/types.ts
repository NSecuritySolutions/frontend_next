import { TProduct } from '../Calculator/types'

interface ITag {
  id: number
  title: string
}

interface IEquipment {
  id: number
  solution: number
  amount: number
  product: TProduct
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
