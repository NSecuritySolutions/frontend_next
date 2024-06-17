'use client'

import Image from 'next/image'

import {
  BannerWrapper,
  TitleWrapper,
  BannerTitle,
  BannerParagraph,
  ImageWrapper,
} from './styled.ts'
import { StyledBtnLink } from '../../BtnLink/ui/styled.ts'

const VideoSurvBanner: React.FC = () => {
  return (
    <BannerWrapper id="surveillance-banner">
      <TitleWrapper>
        <BannerTitle>
          Широкий ассортимент камер и готовых решений видеонаблюдения для дома и бизнеса
        </BannerTitle>
        <BannerParagraph>
          Наши камеры имеют широкий угол обзора и обеспечивают отличное качество изображения даже во
          время ночной съемки или непогоды
        </BannerParagraph>
        <StyledBtnLink width="198px" height="56px" color="accent" size="15px" href="#">
          Оставить заявку
        </StyledBtnLink>
      </TitleWrapper>

      <ImageWrapper>
        <Image
          src="/images/banner/png/video-surveillance-banner.png"
          alt=""
          width={791}
          height={445}
          priority
        />
      </ImageWrapper>
    </BannerWrapper>
  )
}

export default VideoSurvBanner
