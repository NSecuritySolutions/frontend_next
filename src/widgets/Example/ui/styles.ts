import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 0 auto;
  padding: 0;

  @media (max-width: 620px) {
    margin: 0 auto;
    max-width: 296px;
    width: 100%;
    padding: 16px;
  }
`

const ModalContent = styled.div`
  overflow-y: auto;
  background-color: ${colors.backgroundPrimary};
  margin-bottom: 32px;
  border-radius: 20px;
  position: relative;
  padding: 40px;
  max-width: 1180px;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);

  @media (max-width: 1180px) {
    max-width: 880px;
    width: 100%;
    padding: 32px;
  }

  @media (max-width: 880px) {
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    margin: 0 auto;
    max-width: 296px;
    width: 100%;
    padding: 16px;
  }
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  margin-bottom: 20px;
  width: 100%;
`
const TitleWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-weight: 800;
    font-size: 20px;
  }
`

const Date = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;

  line-height: 1.33333;
  color: ${colors.darkPrimary};
  opacity: 0.5;
`

const NumbersRow = styled.div`
  .regular.slider {
    // width: 100%;
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 80px;

    // height: 100%;
    // min-height: 1px;
    @media (max-width: 620px) {
      min-width: 153px;
      width: 100%;
    }

    div {
      @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`

const NumbersColumn = styled.div<{ $color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background-color: ${(props) => (props.$color ? props.$color : 'white')};
  max-width: 190px;
  width: 100%;
  border-radius: 8px;
  gap: 8px;

  @media (max-width: 880px) {
    flex-direction: column;
    min-width: 158px;
    width: 100%;
  }

  @media (max-width: 620px) {
    display: flex !important;
    flex-direction: row !important;
    min-width: 152px;
    width: 100%;
  }
`
const ImageColumn = styled.div`
  max-width: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 118px;
  width: 100%;

  @media (max-width: 880px) {
    max-width: 134px;
    width: 100%;
  }
  @media (max-width: 620px) {
    max-width: 89px;
    width: 100%;
  }
`

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.darkPrimary};

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 13px;
    line-height: 185%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
const ImageWpapper = styled.div`
  margin: 20px 0 0 0;
`

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`

const EquipmentList = styled.ol`
  margin-bottom: 20px;
  counter-reset: a 0;
  list-style: none;

  // display: flex;
  // flex-direction: column;
`

const EquipmentListItem = styled.li`
  margin: 0;
  padding: 0;

  font-size: 16px;
  font-weight: 400;

  &:before {
    content: counter(a) '.';
    counter-increment: a 1;
    display: inline-block;
    margin-right: 5px;
  }

  @media (max-width: 620px) {
    font-weight: 400;
    font-size: 14px;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 20px;
`

const TextParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;

  br {
    margin-top: 20px;
    display: block;
    content: '';
  }

  a {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }

  @media (max-width: 620px) {
    font-weight: 400;
    font-size: 14px;
  }
`

export {
  ModalContent,
  TitleWrapper,
  Title,
  Date,
  Quantity,
  Paragraph,
  ContentWrapper,
  NumbersRow,
  NumbersColumn,
  EquipmentList,
  EquipmentListItem,
  SubTitle,
  TextParagraph,
  TextWrapper,
  ImageColumn,
  InfoColumn,
  SectionWrapper,
  ImageWpapper,
}
