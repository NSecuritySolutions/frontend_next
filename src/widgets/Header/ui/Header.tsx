'use client'

import { FC, useState } from 'react'
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
  HeaderBtnWrapper,
  HeaderBurgerMenuWrapper,
  HeaderContacts,
  IconTextWrapper,
  SocialWrapper,
  PhoneMailWrapper,
  BurgerMenu,
  HeaderNavBurger,
  ContactsBurger,
} from './styled'
import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'
import { Logo } from '@/shared/components/Logo'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type THeaderProps = {
  navLinks: { label: string; to: string }[]
}

const names = {
  '': 'Главная',
  'video-surveillance': 'Видеонаблюдение',
  domofon: 'Домофония/СКУД',
  security: 'Охранно-пожарная сигнализация',
  ourworks: 'Наши работы',
}

const Header: FC<THeaderProps> = ({ navLinks }) => {
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const current = pathnames[pathnames.length - 1]
  const [openBurger, setOpenBurger] = useState(false)

  return (
    <>
      <TheHeader>
        <HeaderWrapper $openMenu={openBurger}>
          <HeaderTop>
            <Logo />
            <HeaderBurgerMenuWrapper
              onClick={() => {
                setOpenBurger(!openBurger)
                console.log(!openBurger)
              }}
            >
              <Image src="/icons/header/burger.svg" width={40} height={40} alt="menu" />
            </HeaderBurgerMenuWrapper>
            <HeaderTopItem>
              <HeaderContacts>
                {/* @TODO не забыть подключить ссылки */}
                <PhoneMailWrapper>
                  <IconTextWrapper>
                    <Image src="/icons/header/phone.svg" width={24} height={24} alt="phone" />
                    <HeaderText>+7 (913) 011-06-45</HeaderText>
                  </IconTextWrapper>
                  <IconTextWrapper>
                    <Image src="/icons/header/mail.svg" width={24} height={24} alt="phone" />
                    <HeaderText>info@opticontrol.ru</HeaderText>
                  </IconTextWrapper>
                </PhoneMailWrapper>
                <SocialWrapper>
                  <Image src="/icons/header/telegram.svg" width={32} height={32} alt="phone" />
                  <Image src="/icons/header/whatsapp.svg" width={32} height={32} alt="phone" />
                </SocialWrapper>
              </HeaderContacts>
            </HeaderTopItem>
            <HeaderTopItem>
              <HeaderBtnWrapper>
                <BtnLink
                  color={colors.darkPrimary}
                  text="Оставить заявку"
                  link="#contact-form"
                  width="100%"
                  height="100%"
                  size="15px"
                />
              </HeaderBtnWrapper>
            </HeaderTopItem>
          </HeaderTop>
          <BurgerMenu>
            <HeaderNavBurger>
              <HeaderList>
                {navLinks.map(({ label, to }, index) => (
                  <HeaderNavItem key={index}>
                    <HeaderNavLink
                      href={to}
                      className={
                        label === names[current as keyof typeof names] ? 'active' : undefined
                      }
                    >
                      {label}
                    </HeaderNavLink>
                  </HeaderNavItem>
                ))}
              </HeaderList>
            </HeaderNavBurger>
            <ContactsBurger>
              <HeaderBtnWrapper>
                <BtnLink
                  color={colors.darkPrimary}
                  text="Оставить заявку"
                  link="#contact-form"
                  width="100%"
                  height="100%"
                  size="15px"
                />
              </HeaderBtnWrapper>
              <PhoneMailWrapper>
                <IconTextWrapper>
                  <Image src="/icons/header/phone.svg" width={24} height={24} alt="phone" />
                  <HeaderText>+7 (913) 011-06-45</HeaderText>
                </IconTextWrapper>
                <IconTextWrapper>
                  <Image src="/icons/header/mail.svg" width={24} height={24} alt="phone" />
                  <HeaderText>info@opticontrol.ru</HeaderText>
                </IconTextWrapper>
              </PhoneMailWrapper>
              <SocialWrapper>
                <Image src="/icons/header/telegram.svg" width={32} height={32} alt="phone" />
                <Image src="/icons/header/whatsapp.svg" width={32} height={32} alt="phone" />
              </SocialWrapper>
            </ContactsBurger>
          </BurgerMenu>
        </HeaderWrapper>
      </TheHeader>
      {pathname.split('/').length < 3 && (
        // Не знаю нужно ли делать так чтобы это было фиксировано, поэтому пока это не фиксировано на странице
        <HeaderNav>
          <HeaderList>
            {navLinks.map(({ label, to }, index) => (
              <HeaderNavItem key={index}>
                <HeaderNavLink
                  href={to}
                  className={label === names[current as keyof typeof names] ? 'active' : undefined}
                >
                  {label}
                </HeaderNavLink>
              </HeaderNavItem>
            ))}
          </HeaderList>
        </HeaderNav>
      )}
    </>
  )
}

export default Header
