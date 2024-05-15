import colors from '@/shared/constants/colors'
import { StaticImageData } from 'next/image'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding-bottom: 40px;

  @media (max-width: 500px) {
    padding-bottom: 24px;
  }
`

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  padding-top: 56px;
  padding-bottom: 31px;
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};
  position: relative;

  @media (max-width: 1300px) {
    max-width: 880px;
    padding-top: 46px;
    padding-bottom: 34px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 620px) {
    max-width: 340px;
  }
`

const ContentWrapper = styled.div`
  width: 83%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    max-width: 93%;
  }

  @media (max-width: 940px) {
    max-width: 86%;
  }
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 136%;
  margin-bottom: 24px;

  @media (max-width: 1300px) {
    font-size: 24px;
    max-width: 650px;
    margin-bottom: 20px;
  }

  @media (max-width: 940px) {
    max-width: 100%;
  }
`

const Text = styled.p`
  max-width: 439px;
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: -0.5px;
  margin-bottom: 36px;

  @media (max-width: 1300px) {
    margin-bottom: 20px;
    max-width: 343px;
  }
`
const InfoBtnWrapper = styled.div`
  width: 158px;
  height: 56px;
  margin-bottom: 148px;

  @media (max-width: 1300px) {
    margin-bottom: 61px;
  }

  @media (max-width: 940px) {
    margin-bottom: 40px;
  }
  @media (max-width: 620px) {
    margin-bottom: 195px;
  }
`

const HistoryWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 620px) {
    display: none;
  }
`

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const YearsText = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 136%;

  @media (max-width: 1300px) {
    font-size: 24px;
  }
`

const AchievementsText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 136%;
`

const Banner = styled.div<{ $imgUrl?: StaticImageData; alt?: string }>`
  width: 545px;
  height: 380px;
  background: ${(props) => `url(${props.$imgUrl}) no-repeat center`};
  background-size: cover;
  position: absolute;
  bottom: 0;
  right: 100px;

  @media (max-width: 1300px) {
    width: 405px;
    height: 280px;
    right: 50px;
  }

  @media (max-width: 940px) {
    width: 170px;
    height: 117px;
    right: 25px;
  }

  @media (max-width: 620px) {
    width: 304px;
    height: 207px;
    right: 40px;
  }
`

const CardWrapper = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-top: 40px;
`

export {
  Section,
  SectionWrapper,
  ContentWrapper,
  Title,
  Text,
  InfoBtnWrapper,
  HistoryWrapper,
  HistoryItem,
  YearsText,
  AchievementsText,
  Banner,
  CardWrapper,
}
