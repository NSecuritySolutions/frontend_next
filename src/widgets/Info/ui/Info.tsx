import { FC } from 'react'

import {
  HeaderWrapper,
  InfoBtnWrapper,
  Section,
  MainCard,
  TextBlock,
  Title,
  Text,
  HistoryWrapper,
  HistoryItem,
  YearsText,
  AchievementsText,
  BannerWrapper,
  CardWrapper,
  Banner,
} from './styled'

import bannerImg from '@/assets/images/banner/png/banner-img.png'

import { cardInfoWithLogoData } from '@/shared/constants/texts/card-with-logo-text'
import { BtnLink } from '@/shared/components/BtnLink'
import { CardInfoWithIcon } from '@/shared/components/CardInfoWithIcon'

import colors from '@/shared/constants/colors'

const Info: FC = () => {
  return (
    <Section>
      <MainCard>
        <HeaderWrapper>
          <TextBlock>
            <Title>
              Установка систем безопасности в Новосибирске и Новосибирской области для дома и Вашего
              бизнеса
            </Title>
            <Text>
              Наша компания предоставляет специалистов высокой квалификации, которые быстро и
              качественно установят все необходимое оборудование.{' '}
            </Text>
          </TextBlock>
          <InfoBtnWrapper>
            <BtnLink
              btnType="transparent"
              text="Подробнее"
              width="100%"
              height="100%"
              link="#contact-form"
              color={colors.darkPrimary}
              size="15px"
            />
          </InfoBtnWrapper>
        </HeaderWrapper>
        <HistoryWrapper>
          <HistoryItem>
            <YearsText>10+</YearsText>
            <AchievementsText>лет на рынке</AchievementsText>
          </HistoryItem>
          <HistoryItem>
            <YearsText>1000+</YearsText>
            <AchievementsText>выполненых проектов</AchievementsText>
          </HistoryItem>
        </HistoryWrapper>
        <BannerWrapper>
          <Banner src={bannerImg} alt="Баннер" />
        </BannerWrapper>
      </MainCard>
      <CardWrapper>
        {cardInfoWithLogoData.map((cardData) => (
          <CardInfoWithIcon
            key={cardData.id}
            title={cardData.title}
            logo={cardData.logo}
            backgroundColor={cardData.backgroundColor}
            text={cardData.text}
          />
        ))}
      </CardWrapper>
    </Section>
  )
}

export default Info
