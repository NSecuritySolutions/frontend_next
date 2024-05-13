import { FC } from "react";

import { navColumnLists, contacts } from "./temporaryConsts";

import {
  FooterBottom,
  FooterBottomContainer,
  FooterContactContainer,
  FooterContactLink,
  FooterContactLogo,
  FooterContactsContainer,
  FooterDeveloperInfoBox,
  FooterDeveloperLink,
  FooterRights,
  FooterRightsText,
  FooterSocialContainer,
  FooterSocialIcon,
  FooterSocialIconLink,
  FooterSocialIconsContainer,
  FooterTop,
  FooterTopContainer,
  FooterWrapper,
  FooterBtnWrapper,
  FooterContactsContentWrapper,
} from "./styled";
import { BtnLink } from "../../../shared/components/BtnLink";
import colors from "../../../shared/constants/colors";
import { Logo } from "../../../shared/components/Logo";
import { NavColumn } from "../../../shared/components/NavColumn";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopContainer>
          <FooterSocialContainer>
            <Logo imageUrl={""} />
            <FooterSocialIconsContainer>
              <FooterSocialIconLink href="#" target="_blank">
                <FooterSocialIcon src={""} alt="Лого" />
              </FooterSocialIconLink>
              <FooterSocialIconLink href="#" target="_blank">
                <FooterSocialIcon src={""} alt="Лого" />
              </FooterSocialIconLink>
            </FooterSocialIconsContainer>
          </FooterSocialContainer>
          {/* <NavColumn lists={navColumnLists} /> */}
          <FooterContactsContainer>
            <FooterContactsContentWrapper>
              {contacts.map((contact, index) => (
                <FooterContactContainer key={index}>
                  <FooterContactLogo src={contact.icon} />
                  <FooterContactLink href={contact.link}>
                    {contact.text}
                  </FooterContactLink>
                </FooterContactContainer>
              ))}
            </FooterContactsContentWrapper>
            <FooterBtnWrapper>
              <BtnLink
                size="15px"
                width="100%"
                height="56px"
                color={colors.darkPrimary}
                text="Оставить заявку"
                link="#"
              />
            </FooterBtnWrapper>
          </FooterContactsContainer>
        </FooterTopContainer>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContainer>
          <FooterRights>
            <FooterRightsText>
              © 2020-2024 Интернет-компания
              <FooterDeveloperLink href="#" target="_blank">
                ХХХ
              </FooterDeveloperLink>
            </FooterRightsText>
            <FooterRightsText>
              Информация на сайте не является публичной офертой
            </FooterRightsText>
            <FooterRightsText>
              Актуальные цены уточняйте у менеджеров
            </FooterRightsText>
            <FooterDeveloperInfoBox>
              <FooterRightsText>
                Сайт разработан командой
                <FooterDeveloperLink href="#" target="_blank">
                  ХХХ Studio
                </FooterDeveloperLink>
                . 2024
              </FooterRightsText>
            </FooterDeveloperInfoBox>
          </FooterRights>
        </FooterBottomContainer>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
