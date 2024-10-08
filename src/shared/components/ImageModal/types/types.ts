import { TWorkExamples } from '@/shared/constants/texts/types'
import { Example, ExampleImage } from '@/widgets/ExamplesSlider/types'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
export default interface TImageModalProps {
  image: string
  images: Example['images'] | undefined
  closeModal: () => void
}
