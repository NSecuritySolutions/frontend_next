import { ICamera, IRegister } from '@/widgets/Calculator/types'

type TCondition = {
  leftPart: keyof (ICamera | IRegister)
  operator?: string
  rightPart?: string
}

export type { TCondition }
