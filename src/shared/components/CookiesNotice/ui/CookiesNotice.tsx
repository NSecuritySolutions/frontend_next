'use client'

import { useState } from 'react'

import Cookies from 'js-cookie'

import Image from 'next/image'

import Link from 'next/link'

import { StyledBtnLink } from '../../BtnLink/ui/styled'

import { CookiesContainer, CookiesTitle, CookiesPragraph, CloseButton } from './styled'

const CookiesNotice: React.FC = () => {
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

          <Link className="link" href="/policy" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </Link>

          <StyledBtnLink
            width="149px"
            height="44px"
            color="accent"
            size="15px"
            onClick={() => {
              handleBtnClick()
              setCookieForMonth()
            }}
          >
            Подтвердить
          </StyledBtnLink>
        </CookiesContainer>
      )}
    </>
  )
}

export default CookiesNotice
