import colors from '@/shared/constants/colors'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SliderContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: ${colors.backgroundBase2};

  .slick-prev {
    background-image: url('/icons/ic-next-button.svg');
    background-size: contain;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 48%;
    left: -80px;
    transform: translateY(-50%) rotate(180deg);
    z-index: 3;
  }

  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);

    cursor: pointer;

    color: black;
    border: none;
    outline: none;
    background-image: url('/icons/ic-next-button.svg');
    background-size: contain;
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  .slick-disabled {
    visibility: hidden;
  }

  @media (max-width: 1300px) {
    max-width: 580px;
  }

  @media (max-width: 1040px) {
  }

  @media (max-width: 940px) {
    max-width: 580px;

    .slick-dots {
      display: none;
    }
  }

  @media (max-width: 720px) {
    .slick-arrow {
      visibility: hidden;
    }
  }

  @media (max-width: 620px) {
    max-width: 360px;
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
  margin-top: 20px;
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
const IconWrapper = styled.div`
  widt: 40px;
  height: 40px;
`

const CustomPrevArrow = styled.div<{ $active?: boolean }>`
  background-image: url('/icons/ic-next-button.svg');
  background-size: contain;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 48%;
  left: -80px;
  transform: translateY(-50%) rotate(180deg);
  z-index: 3;

  &:before {
    display: none;
  }

  @media (max-width: 1370px) {
    left: -70px;
  }

  @media (max-width: 940px) {
    left: -80px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`

const CustomNextArrow = styled.div<{ $active?: boolean }>`
  background-image: url('/icons/ic-next-button.svg');
  background-size: contain;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 48%;
  right: -370px;
  transform: translateY(-50%);
  z-index: 3;

  &:before {
    display: none;
  }

  @media (max-width: 1370px) {
    right: -345px;
  }
  @media (max-width: 940px) {
    right: -70px;
  }
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
  IconWrapper,
  CustomNextArrow,
  CustomPrevArrow,
}
