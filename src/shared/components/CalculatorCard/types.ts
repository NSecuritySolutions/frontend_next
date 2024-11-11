import { IProduct } from '@/widgets/Calculator/types'

interface ICondition {
  leftPart: keyof IProduct
  operator?: string
  rightPart?: string
  optionValue?: string
}

interface IConditionCategory {
  initial: ICondition[]
  [key: string]: ICondition[]
}

export type { ICondition, IConditionCategory }
