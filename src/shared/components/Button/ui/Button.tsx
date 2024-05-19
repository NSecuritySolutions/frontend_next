import React, { FC } from 'react'

import { TBtnProps } from '../types/types'
import { StyledBtnLink } from './styles'

const Btn: FC<TBtnProps> = ({ width, height, color, text, disabled, onClick }) => {
  return (
    <StyledBtnLink
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledBtnLink>
  )
}

export default Btn
