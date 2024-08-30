import { TWorkExamples } from '@/shared/constants/texts/types'
import { Example } from '@/widgets/ExamplesSlider/types'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
export default interface TImageModalProps {
  image: {
    src: string | StaticImport
    height?: number | undefined
    width?: number | undefined
    blurDataURL?: string | undefined
    blurWidth?: number | undefined
    blurHeight?: number | undefined
  }
  images: Example['images'] | undefined
  closeModal: () => void
}
