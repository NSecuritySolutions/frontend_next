import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};

  @media (max-width: 760px) {
    background-color: ${colors.backgroundPrimary};
  }
`

const ColumnConatiner = styled.div`
  position: relative;
  margin: 140px auto 40px;
  border-radius: 20px;
  width: 1180px;
  height: 565px;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  padding: 120px 84px;

  justify-content: center;
  @media (max-width: 1300px) {
    padding: 80px 60px 8px;
    height: 522px;
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 698px;
    width: 100%;
    height: 401px;
    padding: 60px 0 0 60px;
  }

  @media (max-width: 760px) {
    max-width: 580px;
    width: 100%;
    box-shadow: none;
    padding: 0;
  }
`

const ColumnWrapper = styled.div`
  max-width: 1180px;
  width: 100%;
  gap: 40px;
  display: flex;

  @media (max-width: 1300px) {
    max-width: 450px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 359px;
    width: 100%;
  }

  @media (max-width: 760px) {
    margin: 0 auto;
    max-width: 359px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`

const ImgColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  min-width: 572px;
  width: 100%;
  margin-left: 0px;
  position: relative;

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 760px) {
    display: none;
  }
  @media (max-width: 504px) {
    display: none;
  }
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-top: 14px;
  gap: 24px;
  min-width: 400px;
  width: 100%;

  @media (max-width: 1300px) {
    margin-top: 20px;
    width: 100%;
  }
  @media (max-width: 760px) {
    align-items: center;
  }
`

const ErrorName = styled.h3`
  font:
    700 36px Manrope,
    sans-serif;

  @media (max-width: 1300px) {
    font:
      700 24px Manrope,
      sans-serif;
  }
`

const ErrorText = styled.p`
  font:
    400 16px Manrope,
    sans-serif;

  @media (max-width: 1300px) {
    max-width: 100%;
  }

  @media (max-width: 760px) {
    text-align: center;
  }
`

const ErrorButton = styled.a`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  background-color: ${colors.btnPrimary};
  color: ${colors.darkPrimary};
  max-width: 160px;
  width: 100%;
  min-height: 56px;
  padding: 18px 6px;
  font:
    800 15px/133% Manrope,
    sans-serif;

  @media (max-width: 1300px) {
    max-width: 136px;
    line0height: 1.3;
  }

  @media (max-width: 760px) {
    max-width: 280px;
    line0height: 1.3;
  }
`

const ErrorImgWrapper = styled.div`
  max-width: 556px;
  width: 100%;
  max-height: 415px;
  align-self: center;

  @media (max-width: 1300px) {
    // top: 195px;
    // left: 450px;
    // max-width: 419px;
    // width: 100%;
    // max-height: 318px;

    display: none;
  }

  @media (max-width: 940px) {
    // top: 177px;
    // left: 388px;
    // max-width: 286px;
    // width: 100%;
    // max-height: 221px;
    display: none;
  }
  @media (max-width: 760px) {
    // position: relative;
    // left: 0;
    // top: 0;
    // display: none;

    display: none;
  }
`

const ErrorImgHiddenWrapper = styled.div`
  position: absolute;
  top: 250px;
  left: 522px;
  max-width: 556px;
  width: 100%;
  max-height: 415px;
  align-self: center;
  display: none;
  @media (max-width: 760px) {
    position: relative;
    left: 0;
    top: 0;
    display: block;
  }
`

export {
  Section,
  ColumnConatiner,
  ColumnWrapper,
  ErrorName,
  ErrorText,
  ErrorButton,
  ErrorImgWrapper,
  ImgColumn,
  TextColumn,
  ErrorImgHiddenWrapper,
}
