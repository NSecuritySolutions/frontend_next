import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const BannerWrapper = styled.div<{ $img?: string }>`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1180px;
  width: 100%;
  height: 728px;
  border-radius: 12px;
  overflow-hidden;
  cursor: pointer;

@media (max-width: 1300px) {
  max-width: 880px;
  height: 542px;
}

@media (max-width: 940px) {
  max-width: 580px;
  height: 357px;
}

@media (max-width: 620px) {
  display: none;

}
`
const ImageWrapper = styled.div`
  position: relative;
  max-width: 1180px;
  width: 100%;
  height: 728px;
  object-fit: cover;
  overflow-hidden;
  border-radius: 12px;

  @media (max-width: 1300px) {
    max-width: 880px;
    height: 542px;

  }

  @media (max-width: 940px) {
    max-width: 580px;
    height: 357px;
  }
   img {
    border-radius: 12px;
    z-index: 0;
   }
`

const InfoIconWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-weight: 800;
  font-size: 15px;
  color: ${colors.darkPrimary};
  line-height: 133%;
  gap: 12px;
  justify-content: flex-start;
  align-content: center;
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 40px;

  @media (max-width: 940px) {
    bottom: 20px;
    left: 20px;
  }
`
const InfoIcon = styled.div`
  border-radius: 8px;
  padding: 8px 12px;
  height: 36px;
  background-color: ${colors.backgroundBase4};
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 740px;
  width: 100%;
  z-index: 1;
  background-color: #ffffffc0;
  padding: 30px;
  position: absolute;
  border-radius: 12px;
  bottom: 40px;
  left: 40px;

  @media (max-width: 940px) {
    max-width: 500px;
    bottom: 20px;
    left: 20px;
  }
`
const StyledTitle = styled.h1`
  color: black;
  bottom: 70px;
  font-weight: 700;
  font-size: 36px;

  @media (max-width: 940px) {
    font-size: 24px;
  }
`

const StyledParagraph = styled.p`
  bottom: 20px;
  color: black;

  font-weight: 400;
  font-size: 16px;
  color: black;

  // @media (max-width: 1180px) {
  //   font-size: 14px;
  // }
`

export {
  BannerWrapper,
  InfoIconWrapper,
  InfoIcon,
  StyledTitle,
  StyledParagraph,
  TextWrapper,
  ImageWrapper,
}
