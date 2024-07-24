type TBtnLinkProps = {
  width: string
  height: string
  color: string
  text: string
  link?: string
  size: string
  btnType?: 'accent' | 'transparent'
  onClick?: (e: Event) => void
}

type TStyledBtnLinkProps = {
  width: string
  height: string
  color: string
  href?: string
  size: string
  onClick?: (e: Event) => void
}

export type { TBtnLinkProps, TStyledBtnLinkProps }
