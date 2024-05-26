import colors from '@/shared/constants/colors'

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
  overflow: hidden;

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

  @media (max-width: 940px) {
    font-size: 24px;
  }

  @media (max-width: 620px) {
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

  @media (max-width: 940px) {
    max-width: 450px;
  }

  @media (max-width: 620px) {
    font-size: 14px;
  }
`
const InfoBtnWrapper = styled.div`
  width: 158px;
  height: 56px;

  @media (max-width: 620px) {
    align-self: center;
    width: 122px;
    height: 44px;
  }
`

const HistoryWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 940px) {
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

const BannerWrapper = styled.div`
  width: 702px;
  height: 368px;
  background-size: cover;
  position: absolute;
  right: 0px;
  bottom: 0px;
  transform: translateY(14px) translateX(55px);

  @media (max-width: 1300px) {
    width: 540px;
    height: 284px;
    transform: translateY(11px) translateX(42px);
  }

  @media (max-width: 940px) {
    width: 283px;
    height: 164px;
    transform: translateY(6px) translateX(35px);
  }

  @media (max-width: 620px) {
    position: relative;
    width: 283px;
    height: 161px;
    transform: none;
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
}
