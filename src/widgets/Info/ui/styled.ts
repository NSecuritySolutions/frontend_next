import colors from '@/shared/constants/colors'
import Image, { StaticImageData } from 'next/image'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding-bottom: 40px;

  @media (max-width: 500px) {
    padding-bottom: 24px;
  }
`

const MainCard = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1180px;
  width: 100%;
  height: 526px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};
  position: relative;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    height: auto;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    padding: 20px;
    padding-bottom: 0px;
    gap: 20px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 136%;

  @media (max-width: 920px) {
    font-size: 24px;
  }

  @media (max-width: 640px) {
    font-weight: 800;
    font-size: 20px;
  }
`

const Text = styled.p`
  max-width: 600px;
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
  background-color: #ffffff80;
  overflow: hidden;

  @media (max-width: 1300px) {
    max-width: 650px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
`
const InfoBtnWrapper = styled.div`
  width: 158px;
  height: 56px;

  @media (max-width: 640px) {
    align-self: center;
    width: 122px;
    height: 44px;
  }
`

const HistoryWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 920px) {
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

const BannerWrapper = styled.div<{ $imgUrl?: StaticImageData; alt?: string }>`
  width: 702px;
  height: 368px;
  background-size: cover;
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding-bottom: 14px;
  padding-left: 55px;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 540px;
    height: 284px;
    padding-bottom: 11px;
    padding-left: 42px;
  }

  @media (max-width: 940px) {
    width: 283px;
    height: 164px;
    padding-bottom: 6px;
    padding-left: 0px;
  }

  @media (max-width: 620px) {
    position: static;
    align-self: center;
    width: 283px;
    height: 161px;
    padding: 0px;
  }
`

const Banner = styled(Image).attrs({
  priority: true,
})`
  width: 738px;
  height: 415px;

  @media (max-width: 1300px) {
    width: 568px;
    height: 320px;
  }

  @media (max-width: 920px) {
    width: 314px;
    height: 185px;
  }

  @media (max-width: 640px) {
    width: 284px;
    height: 160px;
  }
`

const CardWrapper = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 940px) {
    padding-inline: calc((100vw - 580px) / 2);
    width: 100vw;
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }

  @media (max-width: 620px) {
    padding-inline: calc((100vw - 360px) / 2);
  }
`

export {
  Section,
  MainCard,
  HeaderWrapper,
  TextBlock,
  Title,
  Text,
  InfoBtnWrapper,
  HistoryWrapper,
  HistoryItem,
  YearsText,
  AchievementsText,
  BannerWrapper,
  CardWrapper,
  Banner,
}
