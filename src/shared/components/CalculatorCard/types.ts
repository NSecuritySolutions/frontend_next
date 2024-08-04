import { TProduct } from '@/widgets/Calculator/types'

interface ICondition {
  leftPart: keyof TProduct
  operator?: string
  rightPart?: string
  optionValue?: string
}

interface IConditionCategory {
  initial: ICondition[]
  [key: string]: ICondition[]
}

export type { ICondition, IConditionCategory }
