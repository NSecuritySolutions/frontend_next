import { ICamera } from '@/widgets/Calculator/types'

export type TCard = {
  item: {
    id: number
    title: string
    description: string
    moreInfo: string[]
    image: string
    price: number
  }
}

export interface ProductCardProps {
  item: ICamera
}
