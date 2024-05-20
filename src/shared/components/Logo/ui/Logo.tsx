import { FC } from 'react'
import Image from 'next/image'

import {
  LogoContainer,
  LogoLink,
  LogoSubTitle,
  LogoTextWrapper,
  LogoTitle,
  LogoTitleSpan,
} from './styled'

const Logo: FC = () => {
  return (
    <LogoContainer>
      <LogoLink href="/">
        <Image src="/icons/logo.svg" alt="Логотип" width={40} height={40} />
        <LogoTextWrapper>
          <LogoTitle>
            <LogoTitleSpan>ОПТИ</LogoTitleSpan> КОНТРОЛЬ
          </LogoTitle>
          <LogoSubTitle>Безопасность вашего дома и бизнеса</LogoSubTitle>
        </LogoTextWrapper>
      </LogoLink>
    </LogoContainer>
  )
}

export default Logo
