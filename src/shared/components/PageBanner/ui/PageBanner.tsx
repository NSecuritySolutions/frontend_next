import { type FC } from 'react'
import Image from 'next/image'
import { IBannerProps } from './types.ts'
import {
  BannerWrapper,
  TitleWrapper,
  BannerTitle,
  BannerParagraph,
  ImageWrapper,
} from './styled.ts'
import { BtnLink } from '@/shared/components/BtnLink/index.ts'

const PageBanner: FC<IBannerProps> = ({ id, text, title, src }) => {
  return (
    <BannerWrapper id={id}>
      <TitleWrapper>
        <BannerTitle>{title}</BannerTitle>
        <BannerParagraph>{text}</BannerParagraph>
        <BtnLink
          text="Оставить заявку"
          width="198px"
          height="56px"
          color="accent"
          size="15px"
          link="/#contact-form"
        />
      </TitleWrapper>

      <ImageWrapper>
        <Image src={src} alt="" width={791} height={445} priority />
      </ImageWrapper>
    </BannerWrapper>
  )
}

export default PageBanner
