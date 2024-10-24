'use client'
import type { FC } from 'react'
import { navColumnLists } from './temporaryConsts'
import { useRouter } from 'next/navigation'

import { BtnLink } from '@/shared/components/BtnLink'
import { NavColumn } from '@/shared/components/NavColumn'
import {
  FooterBottom,
  FooterBottomContainer,
  FooterContactContainer,
  FooterContactLink,
  FooterContactLogo,
  FooterContactsContainer,
  FooterDeveloperLink,
  FooterRightsText,
  FooterSocialIconLinkTg,
  FooterSocialIconLinkWa,
  FooterSocialIconsContainer,
  FooterTop,
  FooterWrapper,
  FooterBtnWrapper,
  FooterContactsContentWrapper,
  NoBr,
} from './styled'
import colors from '@/shared/constants/colors'
import { ICompanyData } from '@/shared/constants/types/dataTypes'
import { formatPhoneNumber } from '@/shared/constants/utils/utils'

type TFooterProps = {
  data: ICompanyData[]
}

const Footer: FC<TFooterProps> = ({ data }) => {
  const router = useRouter()

  const handleAnchorClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (
      target.tagName === 'A' &&
      target instanceof HTMLAnchorElement &&
      target.href.includes('#')
    ) {
      event.preventDefault()
      const hash = target.href.split('#')[1]
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/#${hash}`)
      }
    }
  }

  return (
    <FooterWrapper onClick={handleAnchorClick}>
      <FooterTop>
        <NavColumn lists={navColumnLists} />
        <FooterContactsContainer>
          <FooterBtnWrapper>
            <BtnLink
              size="15px"
              width="100%"
              height="56px"
              color={colors.darkPrimary}
              text="Обратный звонок"
              link="#contact-form"
            />
          </FooterBtnWrapper>
          {data && (
            <FooterContactsContentWrapper>
              <FooterContactContainer>
                <FooterContactLogo src="/icons/header/phone.svg" alt="Телефон" />
                <FooterContactLink href={`tel:${data[0].phone}`}>
                  {formatPhoneNumber(data[0].phone)}
                </FooterContactLink>
              </FooterContactContainer>
              <FooterContactContainer>
                <FooterContactLogo src="/icons/header/mail.svg" alt="e-mail" />
                <FooterContactLink href={`mailto:${data[0].email}`}>
                  {data[0].email}
                </FooterContactLink>
              </FooterContactContainer>
            </FooterContactsContentWrapper>
          )}
          {data && (
            <FooterSocialIconsContainer>
              <FooterSocialIconLinkTg
                href={data[0].telegram}
                target="_blank"
                $default="/icons/Icons/ic_TG_State=Default.svg"
                $hover="/icons/Icons/ic_TG_State=Hover.svg"
                $focus="/icons/Icons/ic_TG_State=Active.svg"
                $disabled="/icons/Icons/ic_TG_State=Disabled.svg"
              ></FooterSocialIconLinkTg>
              <FooterSocialIconLinkWa
                href={data[0].whatsapp}
                target="_blank"
                $default="/icons/Icons/ic_WA_State=Default.svg"
                $hover="/icons/Icons/ic_WA_State=Hover.svg"
                $focus="/icons/Icons/ic_WA_State=Active.svg"
                $disabled="/icons/Icons/ic_WA_State=Disabled.svg"
              ></FooterSocialIconLinkWa>
            </FooterSocialIconsContainer>
          )}
        </FooterContactsContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <FooterRightsText>
            © 2020-2024 <br />
            <NoBr>Интернет-компания</NoBr>{' '}
            <FooterDeveloperLink href="#" target="_blank">
              ХХХ
            </FooterDeveloperLink>
          </FooterRightsText>

          <FooterRightsText>
            Информация на сайте не является публичной офертой. Актуальные цены уточняйте у
            менеджеров
          </FooterRightsText>

          <FooterRightsText>
            Сайт разработан{' '}
            <FooterDeveloperLink href="#" target="_blank">
              ХХХ Studio{' '}
            </FooterDeveloperLink>
            2024
          </FooterRightsText>
        </FooterBottomContainer>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
