'use client'

import Image from 'next/image'
import { navColumnLists, contacts } from './temporaryConsts'

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
import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'
import { NavColumn } from '@/shared/components/NavColumn'

const Footer = () => {
  return (
    <FooterWrapper>
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
          <FooterContactsContentWrapper>
            {contacts.map((contact, index) => (
              <FooterContactContainer key={index}>
                <FooterContactLogo src={contact.icon} alt={`Контакты - ${contact.text}`} />
                <FooterContactLink href={contact.link}>{contact.text}</FooterContactLink>
              </FooterContactContainer>
            ))}
          </FooterContactsContentWrapper>
          <FooterSocialIconsContainer>
            <FooterSocialIconLinkTg
              href="#"
              target="_blank"
              $default="/icons/Icons/State=Default.svg"
              $hover="/icons/Icons/State=Hover.svg"
              $focus="/icons/Icons/State=Active.svg"
              $disabled="/icons/Icons/State=Disabled.svg"
            ></FooterSocialIconLinkTg>
            <FooterSocialIconLinkWa
              href="#"
              target="_blank"
              $default="/icons/Icons/ic_WA_State=Default.svg"
              $hover="/icons/Icons/ic_WA_State=Hover.svg"
              $focus="/icons/Icons/ic_WA_State=Active.svg"
              $disabled="/icons/Icons/ic_WA_State=Disabled.svg"
            ></FooterSocialIconLinkWa>
          </FooterSocialIconsContainer>
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
