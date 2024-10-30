'use client'

import { type FC, useState } from 'react'
import Cookies from 'js-cookie'
import Image from 'next/image'

import {
  CookiesContainer,
  CookiesTitle,
  CookiesPragraph,
  CloseButton,
  CookiesStyledLink,
} from './styled'
import { BtnLink } from '@/shared/components/BtnLink'

const CookiesNotice: FC = () => {
  const [isCookiesVisible, setCookiesVisible] = useState<boolean>(true)

  const handleBtnClick = () => {
    setCookiesVisible(false)
  }

  function setCookieForDay() {
    Cookies.set('firstGuest', 'expires-in-1-day', { expires: 1 })
  }

  function setCookieForMonth() {
    Cookies.set('agreedGuest', 'expires-in-30-days', { expires: 30 })
  }
  return (
    <>
      {isCookiesVisible && (
        <CookiesContainer id="cookie-notice">
          <CloseButton
            onClick={() => {
              handleBtnClick()
              setCookieForDay()
            }}
          >
            <Image
              src="/icons/closeBtn.svg"
              alt={'Кнопка закрытия модального окна'}
              width={22}
              height={22}
            ></Image>
          </CloseButton>
          <CookiesTitle>На сайте используются файлы cookie</CookiesTitle>
          <CookiesPragraph>
            Мы используем файлы cookie для обеспечения наилучшего взаимодействия с сайтом.
          </CookiesPragraph>
          <CookiesPragraph>
            Ознакомиться с{' '}
            <CookiesStyledLink
              className="link"
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              политикой конфиденциальности
            </CookiesStyledLink>
          </CookiesPragraph>

          <BtnLink
            text="Подтвердить"
            width="158px"
            height="44px"
            color="accent"
            size="15px"
            onClick={() => {
              handleBtnClick()
              setCookieForMonth()
            }}
          />
        </CookiesContainer>
      )}
    </>
  )
}

export default CookiesNotice
