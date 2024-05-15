type TBtnLinkProps = {
  width: string
  height: string
  color: string
  text: string
  link?: string
  size: string
  btnType?: 'accent' | 'transparent'
  onClick?: () => void
}

type TStyledBtnLinkProps = {
  width: string
  height: string
  color: string
  href?: string
  size: string
}

export type { TBtnLinkProps, TStyledBtnLinkProps }
