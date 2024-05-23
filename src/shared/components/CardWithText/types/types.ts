import { StaticImageData } from 'next/image'

export type TCardProps = {
  title: string
  img: StaticImageData | string
  text: string[]
  btnName: string
  link: string
}
