import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

const CardContainer = styled.article<{
  $chosen?: boolean
  $open?: boolean
  $height?: number
  $heightInitial: number
}>`
  background: ${(props) => (props.$chosen ? `${colors.backgroundCardBl}` : '#FFFFFF')};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  padding: 5px 20px;
  border-radius: 20px;
  color: ${colors.darkPrimary};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  font-weight: 400;
  font-size: 15px;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.7s;
  }

  @media (max-width: 940px) {
    background: #ffffff;
    flex-direction: column;
    padding: 20px;
    height: ${(props) =>
      props.$open && props.$height ? `${props.$height}px` : `${props.$heightInitial}px`};
    overflow: hidden;
    transition: height 1s;
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
