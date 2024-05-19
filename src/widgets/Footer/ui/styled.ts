import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${colors.backgroundBase2};
  color: ${colors.darkPrimary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const FooterTop = styled.div`
  @media (max-width: 1300px) {
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  }
`

const FooterTopContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 32px;
  // justify-content: space-between;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 880px) {
    max-width: 580px;
  }

  @media (max-width: 560px) {
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
`

const FooterContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 560px) {
    align-items: center;
    gap: 40px;
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
`

const FooterContactLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 136%;
  font-weight: 700;
  max-width: 162px;
`

const FooterBtnWrapper = styled.div`
  width: 280px;
  @media (max-width: 560px) {
    width: 280px;
  }
`

const FooterBottom = styled.div`
  width: 100%;
  background-color: ${colors.backgroundBase3};

  @media (max-width: 1300px) {
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  }
`

const FooterBottomContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 0 24px 0;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 880px) {
    max-width: 580px;
  }
`

const FooterRights = styled.div`
  display: flex;
  justify-content: space-between;

  /* @media (max-width: 560px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  } */
`

const FooterDeveloperInfoBox = styled.div`
  padding-top: 16px;
`

const FooterRightsText = styled.p`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;
`

const FooterDeveloperLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accentInfo};
  }
`

const FooterTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  FooterWrapper,
  FooterTop,
  FooterTopContainer,
  FooterBottom,
  FooterBottomContainer,
  FooterRights,
  FooterRightsText,
  FooterDeveloperInfoBox,
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
  FooterTextInfoWrapper,
}
