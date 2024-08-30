import { TWorkExamples } from '@/shared/constants/texts/types'
import { Example } from '@/widgets/ExamplesSlider/types'

export interface IArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export type TSliderProps = {
  modalItem: Example | undefined
}
