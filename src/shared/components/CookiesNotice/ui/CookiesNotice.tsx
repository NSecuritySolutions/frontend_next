'use client'
import { useState } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { CookiesContainer, CookiesTitle, CookiesPragraph } from './styled.ts'
import { StyledBtnLink } from '../../BtnLink/ui/styles.ts'

const CookiesNotice: React.FC = () => {
  const [isCookiesVisible, setCookiesVisible] = useState<boolean>(true)

  const handleBtnClick = () => {
    setCookiesVisible(false)
    console.log('11111')
  }
  return (
    <>
      {isCookiesVisible ? (
        <CookiesContainer id="cookie-notice">
          <CookiesTitle>На сайте используются файлы cookie</CookiesTitle>
          <CookiesPragraph>
            Мы используем файлы cookie для обеспечения наилучшего взаимодействия с сайтом.
          </CookiesPragraph>

          <Link className="link" href="/home#privacy-policy">
            Политика конфиденциальности
          </Link>

          <StyledBtnLink
            width="149px"
            height="44px"
            color="accent"
            size="15px"
            onClick={handleBtnClick}
          >
            Подтвердить
          </StyledBtnLink>
        </CookiesContainer>
      ) : (
        ''
      )}
    </>
  )
}

export default CookiesNotice
