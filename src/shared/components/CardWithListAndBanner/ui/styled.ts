import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Card = styled.div<{ $backgroundColor: string }>`
  position: relative;
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  display: flex;
  min-height: 260px;
  grid-area: bigCard;
  @media (max-width: 880px) {
    min-width: 400px;
    min-height: 288px;
    width: 100%;
  }
`
const CardImg = styled.div`
  margin: 0;
  max-width: 403px;
  max-height: 260px;
  width: 100%;
  position: absolute;
  right: 25px;
  bottom: 0;

  @media (max-width: 1180px) {
    max-width: 341px;
    width: 100%;
    max-height: 220px;
    right: 25px;
    bottom: 40px;

    img {
      max-width: 341px;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 880px) {
    display: none;
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

const ContentContainer = styled.div`
  max-width: 1080px;
  margin: 52px 0 40px 20px;

  @media (max-width: 1180px) {
    max-width: 575px;
  }
  @media (max-width: 880px) {
    margin: 27px 20px;
  }
`

export { Card, TitleContainer, CardTitle, List, ListItem, ListItemText, ContentContainer, CardImg }
