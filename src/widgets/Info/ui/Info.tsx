import { FC, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Slider from 'react-slick'

import { cardInfoWithLogoData } from '@/shared/constants/texts/card-with-logo-text'
import { BtnLink } from '@/shared/components/BtnLink'
import { CardInfoWithIcon } from '@/shared/components/CardInfoWithIcon'

import dynamic from 'next/dynamic'

const CameraBannerObj = dynamic(
  () => import('@/shared/components/CameraBanner').then((module) => module.CameraBannerObj),
  {
    ssr: false,
  },
)

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

const Info: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [cameraReady, setCameraReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let hasTouchScreen = false
    if ('maxTouchPoints' in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0
    } else {
      const mQ = window.matchMedia! && matchMedia('(pointer:coarse)')
      if (mQ && mQ.media === '(pointer:coarse)') {
        hasTouchScreen = !!mQ.matches
      } else if ('orientation' in window) {
        hasTouchScreen = true // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = (navigator as Navigator).userAgent
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      }
    }
    if (hasTouchScreen) {
      setIsMobile(true)
    }
  }, [])

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
            src={
              cameraReady
                ? '/images/banner/png/banner-image3-cameraless.png'
                : '/images/banner/png/banner-image3.png'
            }
            alt="Баннер"
            fill
            sizes="(@media max-width: 940px) 50wv, (@media max-width: 1300px) 77wv, 100vw"
          />
          {!isMobile && (
            <StyledCanvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 5], fov: 50 }}>
              <spotLight
                intensity={9000}
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
                setReady={setCameraReady}
                area={bannerRef}
              />
            </StyledCanvas>
          )}
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
