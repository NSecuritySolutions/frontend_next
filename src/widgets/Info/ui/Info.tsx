import { FC, useRef } from 'react'

import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Slider from 'react-slick'

import bannerImg from '@/assets/images/banner/png/banner-img.png'

import { cardInfoWithLogoData } from '@/shared/constants/texts/card-with-logo-text'
import { BtnLink } from '@/shared/components/BtnLink'
import { CardInfoWithIcon } from '@/shared/components/CardInfoWithIcon'

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
  StyledCanvas,
} from './styled'
import colors from '@/shared/constants/colors'
import { CameraBannerObj } from '@/shared/components/CameraBanner'

const Info: FC = () => {
  const router = useRouter()
  const bannerRef = useRef<HTMLDivElement>(null)

  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick', arrows: false },
      {
        breakpoint: 940,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Section id="banner">
      <MainCard
        ref={bannerRef}
        // onClick={() => {
        //   router.push('/#contact-form')
        // }}
      >
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
          <Image
            priority
            src={bannerImg}
            alt="Баннер"
            fill
            sizes="(max-width: 940px) 283px, (max-width: 1300px) 540px, 702px"
          />
          <StyledCanvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 5], fov: 50 }}>
            <spotLight
              intensity={5000}
              position={[20, 10, 30]}
              penumbra={1}
              shadow-mapSize={[1024, 1024]}
              castShadow
            />
            <CameraBannerObj
              sceneProps={{
                rotation: [0, Math.PI, 0],
                position: [0, 0.5, 0],
                scale: 0.35,
              }}
              area={bannerRef}
            />
          </StyledCanvas>
        </BannerWrapper>
      </MainCard>
      <CardWrapper>
        <Slider {...settings}>
          {cardInfoWithLogoData.map((cardData, i) => (
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
