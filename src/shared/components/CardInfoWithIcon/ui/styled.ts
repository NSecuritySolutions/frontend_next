import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Card = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding: 20px;
  min-height: 182px;
`

const TitleContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 12px;
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
`

export { Card, TitleContainer, CardTitle, CardText }
