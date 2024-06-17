import { FormEvent } from 'react'

type TBtnProps = {
  width: string
  height: string
  color: string
  text: string
  disabled: boolean
  onClick?: (e: FormEvent<Element>) => void
  type?: string
}

type TStyledBtnProps = {
  width: string
  height: string
  color: string
  onClick?: (e: FormEvent<Element>) => void
  type?: string
}

export type { TBtnProps, TStyledBtnProps }
