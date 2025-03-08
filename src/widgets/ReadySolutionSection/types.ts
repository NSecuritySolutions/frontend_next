import { IProduct } from '../Calculator/types'

interface ITag {
  id: number
  title: string
}

interface IEquipment {
  id: number
  solution: number
  text: string
  is_link: boolean
  product: IProduct | null
  calculator_block: number
  amount: number
  show: boolean
}

interface ISolution {
  id: number
  title: string
  image: string
  tooltip_text: string
  description: string[]
  price: string
  equipment_price: string
  tags: ITag[]
  equipment: IEquipment[]
}

export type { ISolution, ITag, IEquipment }
