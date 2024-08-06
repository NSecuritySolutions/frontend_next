import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const ColumnTitle = styled.h2`
  margin: 40px auto 0 auto;
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;
  max-width: 1180px;
  width: 100%;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    width: 100%;
  }
`
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
    gap: 20px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 620px) {
    max-width: 328px;
  }
`

const SliderContainer = styled.div`
  background-color: ${colors.backgroundBase2};
  display: flex;
  flex-direction: column;
  transform: translateX(-20px);

  .slick-track {
    display: flex;
    gap: 20px;
  }


  @media (max-width: 940px) {
    transform: none;
  }

  .slick-slider {
    width: 100%;
    overflow: visible;
  }

  .slick-slide {
    display:flex;
    flex-direction: column;
    gap: 20px;
  }

  .slick-slide > div:first-child {
      margin-top: 20px;
      max-width: 580px;
      display: flex;
      gap: 20px;

      @media (max-width: 1300px) {
        max-width: 430px;
      }

      @media (max-width: 940px) {
        max-width: 380px;
        outline: none;
      }
    }
  }
  .slick-list {
    width: 1200px;
    display: flex;
    margin-bottom: 40px;

    @media (max-width: 1300px) {
      width: 900px;
      margin-bottom: 30px;
    }

    @media (max-width: 940px) {
      width: 600px;
    }
  }

  .slick-dots {
    left: 20px;
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 5px;
      width: 10px;
      height: 10px;

      div {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;
      }

      &.slick-active div {
        background-color: ${colors.btnPrimary};
      }
    }
  }
`

const CardWrapper = styled.div`
  min-width: 580px;
  display: flex !important;
  height: 100%;
  flex-direction: row;
  gap: 20px !important;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px !important;
  padding: 20px;
  margin-top: 0px !important;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    min-width: 430px;
    min-height: 472px;
  }

  @media (max-width: 940px) {
    min-width: 380px;
    min-height: 445px;
  }

  @media (max-width: 620px) {
    min-width: 280px;
    min-height: 377px;
  }
`

const ExamplesLink = styled.a`
  text-decoration: none;
`
const ExamplesImgWrapper = styled.div`
  border-radius: 12px;
  background-color: ${colors.backgroundPrimary};
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 12px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    scale: 1;
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1300px) {
    width: 390px;
    height: 180px;
  }

  @media (max-width: 940px) {
    width: 340px;
    height: 180px;
  }
  @media (max-width: 620px) {
    width: 240px;
    height: 111px;
  }
`

const ExamplesContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
  max-width: 320px;
  width: 100%;
  min-height: 202px;
  background-color: ${colors.backgroundPrimary};
  justify-content: space-between;

  @media (max-width: 1300px) {
    max-width: 430px;
    min-height: 162px;
  }

  @media (max-width: 940px) {
    gap: 0 !important;
    min-height: 162px;
  }

  @media (max-width: 620px) {
    gap: 0 !important;
    min-height: 158px;
  }
`

const ExamplesTitle = styled.h3`
  max-width: 320px;
  width: 100%;
  font-weight: 800;
  font-size: 18px;
  text-align: start;

  @media (max-width: 940px) {
    max-width: 390px;
  }
  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`
const InfoIconWrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex !important;
  flex-direction: row;

  color: ${colors.darkPrimary};
  gap: 12px !important;
  justify-content: flex-start;
  align-content: center;

  @media (max-width: 1300px) {
    margin: 0;
    justify-content: flex-start !important;
  }

  @media (max-width: 940px) {
    margin: 0 !important;
  }
`
const IconWrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  column-gap: 12px !important;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.darkPrimary};

  @media (max-width: 940px) {
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 76px;
    height: 76px;
    margin: 0 !important;
  }
`
const InfoIcon = styled.div`
  font-weight: 800;
  font-size: 15px;
  line-height: 133%;

  border-radius: 8px;
  padding: 8px 12px;
  height: 36px;
  background-color: ${colors.backgroundBase4};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 940px) {
    margin: 0 !important;
  }

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 13px;
    line-height: 185%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex !important;
  column-gap: 0 !important;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 35px;
  gap: 20px;
  white-space: nowrap;

  @media (max-width: 1300px) {
    margin: 0;
  }
  @media (max-width: 940px) {
    margin: 0 !important;
  }
`

const SecondButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  display: flex !important;
  column-gap: 0 !important;
  justify-content: center;
`

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? `${colors.btnPrimary}` : '#d7d7d7')};
`
export {
  ExamplesContainer,
  CardWrapper,
  ExamplesTitle,
  SliderContainer,
  CustomDot,
  ColumnTitle,
  ButtonWrapper,
  IconWrapper,
  ExamplesLink,
  SecondButtonWrapper,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
  SectionWrapper,
}
