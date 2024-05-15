import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const SliderWrapper = styled.div`
  margin: 0px auto 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 702px;
  width: 100%;

  .image-container {
    margin: 0 auto;
    border-radius: 20px;
    max-width: 702px;
    height: 396px;
    background-color: black;
    display: flex;
    border-radius: 20px;

    img {
      margin: 0 auto;
      max-width: 702px;
      height: 396px;
      object-fit: fill;
    }
  }

  .slick-dots {
    position: relative;
    margin: 0 auto;
    max-width: 702px;
    display: flex !important;
    width: 100%;
    flex-direction: row;
    gap: 14px;
    justify-content: center;

    li {
      border-radius: 20px;
      max-width: 165px;
      width: 100%;
      height: 117px;
      background-color: black;
      object-fit: fill;
    }

    img {
      max-width: 165px;
      width: 100%;
      height: 117px;
      border-radius: 20px;
    }
  }

  .slick-slider {
    position: relative;
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

    overflow: hidden;

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
    height: 100%;
    min-height: 1px;
    object-fit: cover;

    div {
      display: flex;
    }
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    margin: 0 auto;
    display: block;
    object-fit: fill;
    max-width: 702px;
    min-height: 396px;
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

  .slick-prev {
    top: 42%;
    left: 10px;
    position: absolute;
    z-index: 99;
  }

  .slick-next {
    top: 42%;
    left: 670px;
    position: absolute;
    z-index: 99;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${colors.btnPrimaryActive};
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  @media (max-width: 1300px) {
    max-width: 580px;
  }
  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 619px) {
    max-width: 280px;
  }
`

export { SliderWrapper }
