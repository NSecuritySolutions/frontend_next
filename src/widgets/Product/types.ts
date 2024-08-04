import { ICamera } from '@/widgets/Calculator/types'
import { TCardSolutionProps } from '@/shared/constants/texts/cards-solution.ts'

export interface ProductProps {
  data: TCardSolutionProps | ICamera
}

export type TItem = {
  id: number
  price: number
  title: string
  description: string
  moreInfo: string[]
  image: string
}
