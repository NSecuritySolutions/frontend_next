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
  FooterSocialIconLink,
  FooterSocialIconsContainer,
  FooterTop,
  FooterWrapper,
  FooterBtnWrapper,
  FooterContactsContentWrapper,
  FooterTextInfoWrapper,
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
            <FooterSocialIconLink href="#" target="_blank">
              <Image src="/icons/telegram.svg" width={32} height={32} alt="Telegram" />
            </FooterSocialIconLink>
            <FooterSocialIconLink href="#" target="_blank">
              <Image src="/icons/whatsapp.svg" width={32} height={32} alt="WhatsApp" />
            </FooterSocialIconLink>
          </FooterSocialIconsContainer>
        </FooterContactsContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <FooterTextInfoWrapper>
            <FooterRightsText>© 2020-2024 </FooterRightsText>
            <FooterRightsText>
              Интернет-компания{' '}
              <FooterDeveloperLink href="#" target="_blank">
                ХХХ
              </FooterDeveloperLink>
            </FooterRightsText>
          </FooterTextInfoWrapper>

          <FooterTextInfoWrapper>
            <FooterRightsText>Информация на сайте не является публичной офертой.</FooterRightsText>
            <FooterRightsText>Актуальные цены уточняйте у менеджеров</FooterRightsText>
          </FooterTextInfoWrapper>

          <FooterTextInfoWrapper>
            <FooterRightsText>
              Сайт разработан{' '}
              <FooterDeveloperLink href="#" target="_blank">
                ХХХ Studio
              </FooterDeveloperLink>
            </FooterRightsText>
            <FooterRightsText>2024</FooterRightsText>
          </FooterTextInfoWrapper>
        </FooterBottomContainer>
      </FooterBottom>
    </FooterWrapper>
  )
}

export default Footer
