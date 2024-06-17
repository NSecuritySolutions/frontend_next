import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const SliderWrapper = styled.div`
  margin: 0px auto 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  width: 100%;

  .image-container {
    margin: 0 auto;
    border-radius: 20px;
    min-width: 1100px;
    width: 100%;
    height: 600px;
    background-color: ${colors.textSecondary};
    display: flex;
    border-radius: 20px;
    cursor: zoom-in;

    @media (max-width: 1300px) {
      min-width: 816px;
      width: 100%;
      height: 445px;
    }
    @media (max-width: 940px) {
      min-width: 516px;
      width: 100%;
      height: 282px;
    }

    @media (max-width: 620px) {
      min-width: 296px;
      width: 100%;
      height: 162px;
    }

    img {
      margin: 0 auto;
      min-width: 1100px;
      width: 100%;
      height: 600px;
      object-fit: fill;
      border-radius: 20px;

      @media (max-width: 1300px) {
        min-width: 816px;
        width: 100%;
        height: 445px;
      }
      @media (max-width: 940px) {
        min-width: 516px;
        width: 100%;
        height: 282px;
      }

      @media (max-width: 620px) {
        min-width: 296px;
        width: 100%;
        height: 162px;
      }
    }
  }

  .slick-dots {
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    display: flex !important;
    width: 100%;
    flex-direction: row;
    gap: 14px;
    justify-content: center;

    @media (max-width: 1180px) {
      max-width: 816px;
      width: 100%;
      gap: 0;
    }

    @media (max-width: 940px) {
      max-width: 516px;
      width: 100%;
      gap: 0;
    }
    @media (max-width: 620px) {
      max-width: 296px;
      width: 100%;
      gap: 0;
    }

    li {
      border-radius: 20px;
      max-width: 260px;
      width: 100%;
      height: 195px;
      background-color: ${colors.textSecondary};
      object-fit: fill;

      @media (max-width: 1300px) {
        max-width: 189px;
        width: 100%;
        height: 141px;
      }

      @media (max-width: 940px) {
        max-width: 120px;
        width: 100%;
        height: 90px;
      }
      @media (max-width: 620px) {
        max-width: 65px;
        width: 100%;
        height: 49px;
        border-radius: 8px;
      }
    }

    img {
      max-width: 260px;
      width: 100%;
      height: 195px;
      border-radius: 20px;

      @media (max-width: 1300px) {
        max-width: 189px;
        width: 100%;
        height: 141px;
      }

      @media (max-width: 940px) {
        max-width: 120px;
        width: 100%;
        height: 90px;
      }

      @media (max-width: 620px) {
        max-width: 65px;
        width: 100%;
        height: 50px;
      }
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
    // display: flex;
    // gap: 10px;
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
    object-fit: cover;
    max-width: 1100px;
    width: 100%;
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
    top: 40%;
    left: 10px;
    position: absolute;
    z-index: 3;
  }

  .slick-next {
    top: 40%;
    left: 1070px;
    position: absolute;
    z-index: 3;

    @media (max-width: 1300px) {
      left: 786px;
    }

    @media (max-width: 940px) {
      left: 485px;
    }

    @media (max-width: 620px) {
      left: 266px;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${colors.btnPrimaryActive};
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`

export { SliderWrapper }
