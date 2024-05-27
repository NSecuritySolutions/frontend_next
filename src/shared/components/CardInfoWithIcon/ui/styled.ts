import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Card = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding: 20px;
  min-height: 182px;
  max-width: 280px;

  @media (max-width: 1300px) {
    max-width: 430px;
    min-height: 136px;
  }

  @media (max-width: 940px) {
    max-width: 280px;
    min-height: 168px;
  }

  @media (max-width: 620px) {
    max-width: 242px;
    min-height: 153px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  line-height: 136%;
`

const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

export { Card, TitleContainer, CardTitle, CardText }
