import colors from '@/shared/constants/colors'

import styled from 'styled-components'
import { StyledBtnLink } from '../../BtnLink/ui/styled'

const SStyledBtnLink = styled(StyledBtnLink)`
  margin: 40px auto;
`

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  display: none;

  @media (max-width: 1300px) {
    width: 880px;
    display: flex;
    margin: 40px auto 20px auto;
  }

  @media (max-width: 940px) {
    width: 580px;
    margin: 40px auto 20px auto;
  }

  @media (max-width: 620px) {
    width: 328px;
    font-weight: 800;
    font-size: 20px;
  }
`

const SliderContainer = styled.section`
    margin: 40px auto;
    background-color: ${colors.backgroundBase2};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1180px;
    width: 100%;
    gap: 20px;
    justify-content: space-between;

    @media (max-width: 1300px) {
      margin: 0 auto 40px auto;

      max-width: 880px;
      width: 100%;
    }

    @media (max-width: 940px) {
      max-width: 580px;
      width: 100%;
    }

     @media (max-width: 620px) {
      max-width: 328px;
      width: 100%;
    }
  }

  
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 20px;
  margin-top: 0px;
  max-width: 580px;
  width: 100%;
  cursor: pointer;

  @media (max-width: 1300px) {
    flex-direction: column;

    width: 430px;
    height: 406px;
  }

  @media (max-width: 940px) {
    width: 280px;
    height: 406px;
  }

  @media (max-width: 620px) {
    width: 328px;
    height: 329px;
  }
`

const ExamplesLink = styled.a`
  text-decoration: none;
`

const ExamplesImgWrapper = styled.div`
  border-radius: 12px;
  background-color: ${colors.backgroundPrimary};
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 12px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    scale: 1;
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1300px) {
    width: 390px;
    height: 180px;
  }

  @media (max-width: 940px) {
    width: 240px;
    height: 180px;
  }

  @media (max-width: 620px) {
    width: 288px;
    height: 111px;
  }
`
const ExamplesContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
  max-width: 320px;
  width: 100%;
  min-height: 202px;
  background-color: ${colors.backgroundPrimary};
  justify-content: space-between;

  @media (max-width: 1300px) {
    max-width: 430px;
    min-height: 162px;
  }

  @media (max-width: 940px) {
    gap: 0 !important;
    min-height: 162px;
  }

  @media (max-width: 620px) {
    gap: 0 !important;
    min-height: 158px;
  }
`
const ExamplesTitle = styled.h3`
  max-width: 320px;
  width: 100%;
  font-weight: 800;
  font-size: 18px;
  text-align: start;

  @media (max-width: 940px) {
    max-width: 390px;
  }
  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`

const InfoIconWrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex !important;
  flex-direction: row;

  color: ${colors.darkPrimary};
  gap: 12px !important;
  justify-content: flex-start;
  align-content: center;

  @media (max-width: 1300px) {
    margin: 0;
    justify-content: flex-start !important;
  }

  @media (max-width: 940px) {
    margin: 0 !important;
  }
`

const IconWrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  column-gap: 12px !important;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.darkPrimary};

  @media (max-width: 940px) {
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 76px;
    height: 76px;
    margin: 0 !important;
  }
`
const InfoIcon = styled.div`
  font-weight: 800;
  font-size: 15px;
  line-height: 133%;

  border-radius: 8px;
  padding: 8px 12px;
  height: 36px;
  background-color: ${colors.backgroundBase4};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 940px) {
    margin: 0 !important;
  }

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 13px;
    line-height: 185%;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 0;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  white-space: nowrap;

  @media (max-width: 1300px) {
    margin: 0;
  }

  @media (max-width: 940px) {
    margin: 0;
  }
`
export {
  ExamplesContainer,
  CardWrapper,
  ExamplesTitle,
  SliderContainer,
  ButtonWrapper,
  IconWrapper,
  ExamplesLink,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
  StyledTitle,
  SStyledBtnLink,
}
