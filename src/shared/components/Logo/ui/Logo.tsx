import { FC } from 'react'
import { LogoContainer, LogoImage, LogoLink } from './styled'
import { TLogoProps } from '../types/types'

const Logo: FC<TLogoProps> = ({ imageUrl }) => {
  return (
    <LogoContainer>
      <LogoLink href="/">
        <LogoImage src={imageUrl} alt="Логотип" />
      </LogoLink>
    </LogoContainer>
  )
}

export default Logo
