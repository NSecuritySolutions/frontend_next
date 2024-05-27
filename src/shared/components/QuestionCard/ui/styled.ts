import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const CardContainer = styled.article<{ $chosen?: boolean }>`
  background: ${(props) => (props.$chosen ? `${colors.backgroundCardBl}` : '#FFFFFF')};
  display: flex;
  flex-direction: row;
  width: 280px;
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
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.7s;
  }

  @media (max-width: 1300px) {
    width: 267px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

const CardText = styled.h3`
  align-self: center;
  margin: 0;
  overflow-wrap: break-word;
  max-width: 190px;

  font-size: 15px;
  font-weight: 700;
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
    white-space: initial;
  }
`

export { CardContainer, CardText, QuestionNumber }
