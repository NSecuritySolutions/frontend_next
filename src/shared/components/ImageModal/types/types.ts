import { TWorkExamples } from '@/shared/constants/texts/types'
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props'
export default interface TImageModalProps {
  image: {
    src: string | StaticImport
    height?: number | undefined
    width?: number | undefined
    blurDataURL?: string | undefined
    blurWidth?: number | undefined
    blurHeight?: number | undefined
  }

  images: TWorkExamples['img'] | undefined
  closeModal: () => void
}
