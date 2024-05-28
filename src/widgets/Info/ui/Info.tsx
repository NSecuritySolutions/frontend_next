import { FC } from 'react'
import Image from 'next/image'

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
} from './styled'

import bannerImg from '@/assets/images/banner/png/banner-img.png'

import { cardInfoWithLogoData } from '@/shared/constants/texts/card-with-logo-text'
import { BtnLink } from '@/shared/components/BtnLink'
import { CardInfoWithIcon } from '@/shared/components/CardInfoWithIcon'

import colors from '@/shared/constants/colors'
import Slider from 'react-slick'

const Info: FC = () => {
  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          infinite: false,
          slidesToShow: 1.95,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

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
          <Image src={bannerImg} alt="Баннер" fill />
        </BannerWrapper>
      </MainCard>
      <CardWrapper>
        <Slider {...settings}>
          {cardInfoWithLogoData.map((cardData) => (
            <CardInfoWithIcon
              key={cardData.id}
              title={cardData.title}
              logo={cardData.logo}
              backgroundColor={cardData.backgroundColor}
              text={cardData.text}
            />
          ))}
        </Slider>
      </CardWrapper>
    </Section>
  )
}

export default Info
