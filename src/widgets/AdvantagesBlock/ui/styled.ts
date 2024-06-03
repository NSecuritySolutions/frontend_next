import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  margin: 40px auto;
  background-color: ${colors.backgroundBase2};
`

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;

  @media (max-width: 880px) {
    padding-left: calc(100vw - 750px);
  }

  @media (max-width: 620px) {
    padding-left: calc(100vw - 480px);
  }
`
const SliderWrapper = styled.div`
  .regular.slider {
    margin: 0;
    padding: 0;
    display: grid;
    grid-area: smallCard1;
    min-width: 1180px;
    width: 100%;

    &:nth-of-type(2) {
      grid-area: smallCard2;
    }
    &:nth-of-type(3) {
      grid-area: smallCard3;
    }
    &:nth-of-type(4) {
      grid-area: smallCard4;
    }
    grid-template-areas:
      'smallCard1 smallCard2'
      'smallCard3 smallCard4'
      'bigCard bigCard';
    gap: 20px;

    @media (max-width: 1180px) {
      min-width: 0;
      max-width: 880px;
      width: 100%;
    }
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
    cursor: grab;
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

    display: flex;
    flex-direction: row;
    gap: 15px;
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

    height: 100%;
    min-height: 1px;
    max-width: 380px;

    @media (max-width: 880px) {
      max-width: 380px;
      width: 100%;
    }
    @media (max-width: 620px) {
      max-width: 293px;
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

const Title = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  max-width: 1180px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 1180 px) {
    max-width: 880px;
    width: 100%;
    align-self: center;
  }
  @media (max-width: 880px) {
    padding-left: clamp(16px, 5%, 100px);
  }

  @media (max-width: 620px) {
    padding-left: clamp(16px, 5%, 100px);
  }
`

export { Section, Title, SectionWrapper, SliderWrapper }
