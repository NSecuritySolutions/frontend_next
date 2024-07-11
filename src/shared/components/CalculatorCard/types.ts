import { ICamera, IRegister, IHDD, IFACP, ISensor, IPACSProduct } from '@/widgets/Calculator/types'

type TCondition = {
  leftPart: keyof (ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct)
  operator?: string
  rightPart?: string
}

export type { TCondition }
