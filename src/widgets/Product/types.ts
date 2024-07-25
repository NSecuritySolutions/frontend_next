import { ICamera } from '@/widgets/Calculator/types'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'

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
