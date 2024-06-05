import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Card = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding: 20px;
  min-height: 188px;

  @media (max-width: 940px) {
    max-width: 380px;
    width: 100%;
    min-height: 288px;
  }

  @media (max-width: 620px) {
    max-width: 293px;
    min-height: 264px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 23px;
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  line-height: 136%;
  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`

const ListItemText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

export { Card, TitleContainer, CardTitle, List, ListItem, ListItemText }
