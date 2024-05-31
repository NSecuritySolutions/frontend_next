import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Card = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding: 20px;
  min-height: 188px;

  @media (max-width: 880px) {
    max-width: 380px;
    width: 100%;
    min-height: 288px;
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
`

export { Card, TitleContainer, CardTitle, List, ListItem, ListItemText }
