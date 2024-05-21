'use client'

import { useState } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { StyledBtnLink } from '../../BtnLink/ui/styles.ts'

import { CookiesContainer, CookiesTitle, CookiesPragraph, CloseButton } from './styled.ts'

const CookiesNotice: React.FC = () => {
  const [isCookiesVisible, setCookiesVisible] = useState<boolean>(true)

  const handleBtnClick = () => {
    setCookiesVisible(false)
  }
  return (
    <>
      {isCookiesVisible ? (
        <CookiesContainer id="cookie-notice">
          <CloseButton onClick={handleBtnClick}>
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
