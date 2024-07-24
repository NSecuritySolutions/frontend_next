import { ICamera, IRegister, IHDD, IFACP, ISensor, IPACSProduct } from '@/widgets/Calculator/types'

interface ICondition {
  leftPart: keyof (ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct)
  operator?: string
  rightPart?: string
  optionValue?: string
}

interface IConditionCategory {
  initial: ICondition[]
  [key: string]: ICondition[]
}

export type { ICondition, IConditionCategory }
