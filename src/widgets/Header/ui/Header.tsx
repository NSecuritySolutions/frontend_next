'use client'

import { FC, useEffect, useState } from 'react'
import {
  TheHeader,
  HeaderTopWrapper,
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
  HeaderSocialIconLink,
} from './styled'
import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'
import { Logo } from '@/shared/components/Logo'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { urlNames } from '@/shared/constants/texts/url-names'
import { AnimatePresence, motion } from 'framer-motion'

type THeaderProps = {
  navLinks: { label: string; to: string }[]
}

const Header: FC<THeaderProps> = ({ navLinks }) => {
  const [safeForClick, setSafeForClick] = useState(true)
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const current = pathnames[pathnames.length - 1]
  const [openBurger, setOpenBurger] = useState(false)
  let timer: NodeJS.Timeout

  const handleBurger = () => {
    if (safeForClick) {
      setSafeForClick(false)
      setOpenBurger(!openBurger)
      timer = setTimeout(() => setSafeForClick(true), 600)
    } else {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    setOpenBurger(false)
  }, [pathname])

  return (
    <>
      <TheHeader>
        <HeaderTopWrapper $openMenu={openBurger}>
          <HeaderTop>
            <Logo />
            <HeaderBurgerMenuWrapper onClick={handleBurger}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={openBurger ? '/icons/header/close.svg' : '/icons/header/burger.svg'}
                  layout="size"
                  initial={{ rotate: -360, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 360, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '40px' }}
                >
                  <Image
                    src={openBurger ? '/icons/header/close.svg' : '/icons/header/burger.svg'}
                    width={40}
                    height={40}
                    alt="menu"
                  />
                </motion.div>
              </AnimatePresence>
            </HeaderBurgerMenuWrapper>
            <HeaderTopItem>
              <HeaderContacts>
                {/* @TODO не забыть актуализировать ссылки */}
                <PhoneMailWrapper>
                  <IconTextWrapper>
                    <Image src="/icons/header/phone.svg" width={24} height={24} alt="phone" />
                    <HeaderText href="tel:+79130110645">+7 (913) 011-06-45</HeaderText>
                  </IconTextWrapper>
                  <IconTextWrapper>
                    <Image src="/icons/header/mail.svg" width={24} height={24} alt="mail" />
                    <HeaderText href="mailto:info@opticontrol.ru">info@opticontrol.ru</HeaderText>
                  </IconTextWrapper>
                </PhoneMailWrapper>
                <SocialWrapper>
                  <HeaderSocialIconLink href="#" target="_blank">
                    <Image src="/icons/telegram.svg" width={32} height={32} alt="Telegram" />
                  </HeaderSocialIconLink>
                  <HeaderSocialIconLink href="#" target="_blank">
                    <Image src="/icons/whatsapp.svg" width={32} height={32} alt="WhatsApp" />
                  </HeaderSocialIconLink>
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
                        label === urlNames[current as keyof typeof urlNames] ? 'active' : undefined
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
                  <Image src="/icons/header/mail.svg" width={24} height={24} alt="mail" />
                  <HeaderText>info@opticontrol.ru</HeaderText>
                </IconTextWrapper>
              </PhoneMailWrapper>
              <SocialWrapper>
                <Image src="/icons/header/telegram.svg" width={32} height={32} alt="telegram" />
                <Image src="/icons/header/whatsapp.svg" width={32} height={32} alt="whatsapp" />
              </SocialWrapper>
            </ContactsBurger>
          </BurgerMenu>
        </HeaderTopWrapper>
        {pathname.split('/').length < 3 && (
          <HeaderNav>
            <HeaderList>
              {navLinks.map(({ label, to }, index) => (
                <HeaderNavItem key={index}>
                  <HeaderNavLink
                    href={to}
                    className={
                      label === urlNames[current as keyof typeof urlNames] ? 'active' : undefined
                    }
                  >
                    {label}
                  </HeaderNavLink>
                </HeaderNavItem>
              ))}
            </HeaderList>
          </HeaderNav>
        )}
      </TheHeader>
    </>
  )
}

export default Header
