import colors from '@/shared/constants/colors'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SliderContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: ${colors.backgroundBase2};

  .slick-dots {
    display: block;
  }

  @media (max-width: 1180px) {
    max-width: 580px;
  }

  @media (max-width: 880px) {
    max-width: 580px;

    .slick-dots {
      display: none;
    }
  }

  @media (max-width: 620px) {
    max-width: 328px;
  }
`
const ReviewsContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 25px;
  max-width: 280px;
  height: 289px;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  font-family: Manrope, sans-serif;

  @media (max-width: 940px) {
    margin-top: 30px;
  }

  @media (max-width: 619px) {
    margin-top: 30px;
  }
`

const ReviewsTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`

const ReviewsParagraph = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: start;
`

const ReviewsText = styled.article`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: ${(props) => (props.$active ? `${colors.btnPrimary}` : '#d7d7d7')};
`

const ReviewsLink = styled.a<{ $active?: boolean }>`
  margin-top: 12px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.titleBlueColor};
  opacity: 1;

  &:hover {
    opacity: 0.5;
    transition: opacity 1s ease-in;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot,
  ReviewsLink,
  TitleWrapper,
}
