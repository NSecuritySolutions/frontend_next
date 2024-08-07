import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

const CardContainer = styled(motion.article).attrs({
  layout: 'size',
})<{
  $chosen?: boolean
  $open?: boolean
}>`
  background: ${(props) => (props.$chosen ? `${colors.backgroundCardBl}` : '#FFFFFF')};
  display: flex;
  flex-direction: row;
  width: 280px;
  max-height: 90px;
  min-height: 90px;
  padding: 5px 20px;
  border-radius: 20px;
  color: ${colors.darkPrimary};
  font-weight: 400;
  font-size: 15px;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 1300px) {
    width: 320px;
  }

  @media (max-width: 940px) {
    width: 100%;
    background: #ffffff;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
    min-height: 0px;
    max-height: none;
    height: 0px;

    &:hover {
      opacity: initial;
    }
  }
`

const CardText = styled.h3`
  align-self: center;
  margin: 0;
  overflow-wrap: break-word;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.5;

  @media (max-width: 940px) {
    align-self: start;
    font-size: 16px;
  }
`

const CardAnswer = styled.p`
  display: none;
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 940px) {
    display: block;
  }

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 940px) {
    align-items: start;
    align-self: start;
    justify-content: space-between;
    width: 100%;
  }
`

const ArrowWrapper = styled(motion.div).attrs({
  layout: true,
})`
  display: none;
  align-self: center;
  height: 24px;

  @media (max-width: 940px) {
    display: initial;
  }
`

const QuestionNumber = styled.div<{ $chosen?: boolean }>`
  background-color: ${(props) => (props.$chosen ? '#FFFFFF' : `${colors.backgroundCardBl}`)};
  font-family: Manrope, sans-serif;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 25px 0px rgba(16, 16, 16, 0.05);
  padding: 10px;
  border-radius: 500px;
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  flex-shrink: 0;
  text-align: center;

  @media (max-width: 940px) {
    display: none;
  }
`

export { CardContainer, CardText, QuestionNumber, CardAnswer, TitleContainer, ArrowWrapper }
