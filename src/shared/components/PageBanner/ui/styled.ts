import styled from 'styled-components'

const BannerWrapper = styled.section`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1220px;
  width: 100%;
  height: 727px;
  border-radius: 12px;
  cursor: pointer;
  overflowy: visible;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    height: 456px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  a {
    margin-top: 12px;
  }

  @media (max-width: 620px) {
    gap: 16px;

    a {
      margin-top: 4px;
      width: 155px;
      height: 44px;
    }
  }
`
const BannerTitle = styled.h1`
  max-width: 1100px;
  width: 100%;
  font-weight: 700;
  font-size: 36px;
  text-align: center;

  @media (max-width: 620px) {
    font-weight: 800;
    font-size: 20px;
  }
`
const BannerParagraph = styled.p`
  max-width: 730px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  @media (max-width: 620px) {
    font-weight: 400;
    font-size: 14px;
  }
`
const ImageWrapper = styled.div`
  width: 791px;
  height: 445px;
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  object-fit: contain;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180.06deg, rgba(246, 246, 246, 0) 69.59%, #f6f6f6 95.33%);
    pointer-events: none;
  }

  img {
    @media (max-width: 620px) {
      width: 328px;
      height: 179px;
    }
  }
`

export { BannerWrapper, TitleWrapper, BannerTitle, BannerParagraph, ImageWrapper }
