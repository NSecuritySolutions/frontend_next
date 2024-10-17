import Image from 'next/image'

import { IBannerProps } from './types.ts'

import { StyledBtnLink } from '@/shared/components/BtnLink/ui/styled.ts'

import {
  BannerWrapper,
  TitleWrapper,
  BannerTitle,
  BannerParagraph,
  ImageWrapper,
} from './styled.ts'

const PageBanner: React.FC<IBannerProps> = ({ id, text, title, src }) => {
  return (
    <BannerWrapper id={id}>
      <TitleWrapper>
        <BannerTitle>{title}</BannerTitle>
        <BannerParagraph>{text}</BannerParagraph>
        <StyledBtnLink width="198px" height="56px" color="accent" size="15px" href="#">
          Оставить заявку
        </StyledBtnLink>
      </TitleWrapper>

      <ImageWrapper>
        <Image src={src} alt="" width={791} height={445} priority />
      </ImageWrapper>
    </BannerWrapper>
  )
}

export default PageBanner
