import { StaticImageData } from 'next/image'

export type TError = {
  errorCode: string
  errorText: string
  errorImg: StaticImageData
  errorMessage: string
}
