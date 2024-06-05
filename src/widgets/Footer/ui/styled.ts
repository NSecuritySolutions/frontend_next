import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const FooterWrapper = styled.footer`
  width: 100%;
  padding-top: 40px;
  background-color: ${colors.backgroundBase2};
  color: ${colors.darkPrimary};
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;

  @media (max-width: 620px) {
    padding-top: 16px;
    gap: 16px;
  }
`

const FooterTop = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
  }

  @media (max-width: 620px) {
    width: 360px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`

const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FooterSocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const FooterSocialIconLink = styled.a`
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transform: opacity 2s ease-in;
  }
`

const FooterContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 940px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    & > div:nth-child(1) {
      order: 3;
    }

    & > div:nth-child(2) {
      order: 1;
    }

    & > div:nth-child(3) {
      order: 2;
    }
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > div:nth-child(2) {
      order: 2;
    }

    & > div:nth-child(3) {
      order: 1;
    }
  }
`
const FooterContactContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const FooterContactsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterContactLogo = styled.img`
  width: 24px;
  height: 24px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transform: opacity 2s ease-in;
  }
`

const FooterContactLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 136%;
  font-weight: 700;
  max-width: 162px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transform: opacity 2s ease-in;
  }
`

const FooterBtnWrapper = styled.div`
  width: 280px;

  @media (max-width: 1300px) {
    width: 205px;
  }
`

const FooterBottom = styled.div`
  width: 100%;
  background-color: ${colors.backgroundBase3};

  @media (max-width: 1300px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 620px) {
    padding-inline: 16px;
  }
`

const FooterBottomContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;

  & > p:nth-child(1) {
    max-width: 230px;
  }

  & > p:nth-child(2) {
    max-width: 422px;
  }

  & > p:nth-child(3) {
    max-width: 230px;
    line-height: 19.36px;
  }

  @media (max-width: 1300px) {
    max-width: 880px;
    padding: 16px 0 20px 0;

    & > p:nth-child(1) {
      max-width: 187px;
    }

    & > p:nth-child(3) {
      max-width: 224px;
    }
  }

  @media (max-width: 940px) {
    display: grid;
    grid-template-areas:
      'b b'
      'a c';
    gap: 20px;
    max-width: 580px;

    & > p:nth-child(1) {
      grid-area: a;
      max-width: 280px;
    }

    & > p:nth-child(2) {
      grid-area: b;
    }

    & > p:nth-child(3) {
      grid-area: c;
      max-width: 240px;
    }
  }

  @media (max-width: 620px) {
    max-width: 328px;
    grid-template-columns: repeat(2, 154px);

    & > p:nth-child(1) {
      max-width: 154px;
    }

    & > p:nth-child(2) {
      text-align: center;
    }

    & > p:nth-child(3) {
      max-width: 154px;
    }
  }
`

const FooterRightsText = styled.p`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const NoBr = styled.span`
  white-space: nowrap;
`

const FooterDeveloperLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accentInfo};
  }
`

export {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterBottomContainer,
  FooterRightsText,
  FooterDeveloperLink,
  FooterLogoContainer,
  FooterContactsContainer,
  FooterContactContainer,
  FooterSocialIconsContainer,
  FooterSocialIconLink,
  FooterContactLogo,
  FooterContactLink,
  FooterBtnWrapper,
  FooterContactsContentWrapper,
  NoBr,
}
