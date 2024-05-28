import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const CardContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 512px;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.darkPrimary};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};
  padding: 46px 40px;
  align-items: flex-start;
  gap: 12px;
  overflow-y: scroll;

  overflow-x: hidden;
  scrollbar-color: ${colors.scrollActive} ${colors.backgroundBase2};

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${colors.backgroundBase2};
    border-radius: 30px;
    margin-left: 10px;
    padding-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollActive};
    width: 6px;
    border-radius: 30px;
  }

  @media (max-width: 1300px) {
    width: 480px;
    padding: 40px;
  }

  @media (max-width: 940px) {
    display: none;
  }
`

const CardImg = styled.div<{ $imgUrl?: string }>`
  border-radius: 500px;
  background-color: ${colors.backgroundCardBl};
  width: 180px;
  height: 180px;
  background: ${(props) => `url(${props.$imgUrl}) no-repeat center`};
  background-size: cover;
`

const QuestionText = styled.h3`
  text-wrap: wrap;
  font-size: 16px;
  font-weight: 700;
`

const AnswerText = styled.p`
  text-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  z-index: 1;
  background-color: #ffffffc0;
`

const CropWrapper = styled.div`
  position: absolute;
  height: 201px;
  right: 2px;
  bottom: 0px;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 1300px) {
    height: 109px;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 260px;
  height: 261px;

  @media (max-width: 1300px) {
    width: 139px;
    height: 140px;
  }
`

export { CardContainer, CardImg, QuestionText, AnswerText, ImgWrapper, CropWrapper }
