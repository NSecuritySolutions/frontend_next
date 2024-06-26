import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  max-width: 1180px;
  width: 100%;
  margin: 163px auto;
  background-color: ${colors.backgroundBase2};
  display: flex;
  justify-content: center;
`

const ColumnConatiner = styled.div`
  position: relative;
  margin: 40px auto;
  border-radius: 20px;
  max-width: 1180px;
  height: 565px;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  background-color: ${colors.backgroundPrimary};
  display: flex;
  flex-direction: row;
  padding: 120px 84px;
  justify-content: center;

  @media (max-width: 1300px) {
    margin: 0;
    padding: 40px 60px;
    height: 381px;
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 940px) {
    padding: 32px 20px;
    max-width: 580px;
    height: 284px;
    width: 100%;
  }

  @media (max-width: 760px) {
    border-radius: 20px;
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 380px;

    flex-direction: column;
    align-items: center;
    min-height: 450px;
  }

  @media (max-width: 420px) {
    max-width: 328px;

    flex-direction: column;
    align-items: center;
    min-height: 450px;
  }
`

const ColumnWrapper = styled.div`
  max-width: 1180px;
  width: 100%;
  gap: 20px;
  display: flex;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 760px) {
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 380px;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    min-height: 403px;
    gap: 16px;
  }

  @media (max-width: 420px) {
    max-width: 320px;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    min-height: 403px;
    gap: 16px;
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
    min-width: 350px;
    width: 100%;
  }

  @media (max-width: 940px) {
    min-width: 239px;
    width: 100%;
  }

  @media (max-width: 620px) {
    align-items: center;
    text-align: center;
  }
`

const ErrorImgWrapper = styled.div`
  max-width: 556px;
  width: 100%;
  max-height: 415px;
  align-self: center;

  @media (max-width: 1300px) {
    max-width: 430px;
    width: 100%;

    img {
      min-width: 430px;
      width: 100%;
      max-height: 262px;
    }
  }

  @media (max-width: 940px) {
    max-width: 280px;
    width: 100%;

    img {
      min-width: 280px;
      width: 100%;
      max-height: 170px;
    }

    
`

const ErrorName = styled.h3`
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 1300px) {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1300px) {
    max-width: 100%;
  }

  @media (max-width: 940px) {
    font-size: 14px;
    font-weight: 400;
  }
`

const ErrorButton = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  background-color: ${colors.btnPrimary};
  color: ${colors.darkPrimary};
  max-width: 160px;
  width: 100%;
  min-height: 56px;
  padding: 18px 6px;
  font-size: 15px;
  font-weight: 800;
  line-height: 133%;

  @media (max-width: 620px) {
    max-width: 147px;
    width: 100%;
    min-height: 56px;
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
  TextColumn,
}
