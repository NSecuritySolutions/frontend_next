'use client'
import { FC } from 'react'
import {
  TheHeader,
  HeaderWrapper,
  HeaderNav,
  HeaderList,
  HeaderNavItem,
  HeaderNavLink,
  HeaderTop,
  HeaderTopItem,
  HeaderText,
  HeaderTel,
  HeaderBtnWrapper,
  HeaderBurgerMenuWrapper,
} from './styles'
import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'
// import { Logo } from '@/shared/components/Logo'
// import ProjectLogo from '@/assets/icons/logo.svg'

type THeaderProps = {
  navLinks: { label: string; to: string }[]
}

const Header: FC<THeaderProps> = ({ navLinks }) => {
  return (
    <TheHeader>
      <HeaderWrapper>
        <HeaderTop>
          <HeaderTopItem>
            {/* <Logo imageUrl={ProjectLogo} /> */}
            <HeaderText>Безопастность вашего дома и бизнеса</HeaderText>
          </HeaderTopItem>
          <HeaderTopItem>
            <HeaderTel>+7 (913) 011-06-45</HeaderTel>
            <HeaderBtnWrapper>
              <BtnLink
                color={colors.darkPrimary}
                text="Оставить заявку"
                link="#"
                width="100%"
                height="100%"
                size="15px"
              />
            </HeaderBtnWrapper>
          </HeaderTopItem>
          <HeaderBurgerMenuWrapper>{/* <BurgerMenu /> */}</HeaderBurgerMenuWrapper>
        </HeaderTop>
        <HeaderNav>
          <HeaderList>
            {navLinks.map(({ label, to }, index) => (
              <HeaderNavItem key={index}>
                <HeaderNavLink href={to}>{label}</HeaderNavLink>
              </HeaderNavItem>
            ))}
          </HeaderList>
        </HeaderNav>
      </HeaderWrapper>
    </TheHeader>
  )
}

export default Header
