import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
  padding: 20px;

  @media (max-width: 1300px) {
    padding: 0;
  }
`

const SectionWrapper = styled.div`
  .regular.slider {
    margin-top: 30px;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1180px) {
      margin: 0 auto;
      padding: 0;
      max-width: 880px;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 1180px) {
    max-width: 880px;
    width: 100%;
    gap: 20px;
  }

  @media (max-width: 880px) {
    max-width: 880px;
    padding-left: clamp(150px, 1%, 16px);
  }

  @media (max-width: 620px) {
    max-width: 580px;
    padding-left: clamp(16px, 20%, 150px);
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  max-width: 1180px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 1180 px) {
    max-width: 880px;
    width: 100%;
    align-self: center;
  }
  @media (max-width: 940px) {
    max-width: 880px;
    width: 100%;
    align-self: center;
    padding-left: clamp(16px, 5%, 100px);
  }

  @media (max-width: 620px) {
    padding-left: clamp(16px, 5%, 100px);
  }
`
const ColumnWrapper = styled.div`
  // margin-top: 30px;
  // width: 100%;
  // padding: 20px 0;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // gap: 20px;

  // @media (max-width: 1180px) {
  //   margin: 0 auto;
  //   padding: 0;
  //   max-width: 880px;
  //   width: 100%;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  // }
`

const SliderWrapper = styled.div`
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
    height: 201px;

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
    margin: 0 20px 0 0;

    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  .slick-slide.slick-active {
    max-width: 280px;
    width: 100%;
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

const Column = styled.div`
  display: flex !important;
  flex-direction: column;
  line-height: normal;
  max-width: 280px;
  width: 100%;
  gap: 12px;

  @media (max-width: 1180px) {
    max-width: 430px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 280px;
    width: 100%;
  }
`

const StageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 940px) {
    white-space: initial;
  }
`
const StageNumber = styled.div`
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: ${colors.backgroundPrimary};
  padding: 10px;
  border-radius: 500px;
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 940px) {
  }
`

const StageLine = styled.div`
  border-color: rgba(16, 16, 16, 1);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.darkPrimary};
  width: 175px;
  height: 0;
  margin: auto 0;

  @media (max-width: 1180px) {
    width: 430px;
  }
  @media (max-width: 940px) {
    width: 215px;
  }
  @media (max-width: 620px) {
    width: 177px;
  }
`
const TextWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 620px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`

const StageTitle = styled.h3`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  margin-top: 16px;
  font-size: 16px;
  display: flex;

  @media (max-width: 620px) {
    margin-top: 0;
  }
`

const StageParagraph = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
  display: flex;
`
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  SectionTitle,
  TextWrapper,
  StageTitle,
  StageParagraph,
  SliderWrapper,
}
