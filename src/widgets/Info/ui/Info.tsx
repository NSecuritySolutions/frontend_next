import { FC } from 'react'
import Image from 'next/image'

import {
  ContentWrapper,
  InfoBtnWrapper,
  Section,
  SectionWrapper,
  Title,
  Text,
  HistoryWrapper,
  HistoryItem,
  YearsText,
  AchievementsText,
  BannerWrapper,
  CardWrapper,
} from './styled'

import bannerImg from '@/assets/images/banner/png/banner-image.png'

import { cardInfoWithLogoData } from '@/shared/constants/texts/card-with-logo-text'
import { BtnLink } from '@/shared/components/BtnLink'
import { CardInfoWithIcon } from '@/shared/components/CardInfoWithIcon'

import colors from '@/shared/constants/colors'

const Info: FC = () => {
  return (
    <Section>
      <SectionWrapper>
        <ContentWrapper>
          <Title>
            Установка систем безопасности в Новосибирске и Новосибирской области для дома и Вашего
            бизнеса
          </Title>
          <Text>
            Наша компания предоставляет специалистов высокой квалификации, которые быстро и
            качественно установят все необходимое оборудование.{' '}
          </Text>
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
        </ContentWrapper>
        <BannerWrapper>
          <Image src={bannerImg} alt="Баннер" width={702} height={368} />
        </BannerWrapper>
      </SectionWrapper>
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
