import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div<{ $backgroundColor: string }>`
  position: relative;
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  display: flex;
  min-height: 260px;
  grid-area: bigCard;
  overflow: hidden;

  @media (max-width: 940px) {
    min-width: 400px;
    min-height: 288px;
    width: 100%;
  }
  @media (max-width: 940px) {
    min-height: 264px;
  }
`
const CardImg = styled.div`
  margin: 0;
  max-width: 403px;
  max-height: 260px;
  width: 100%;

  @media (max-width: 1300px) {
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

  @media (max-width: 940px) {
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

const ContentContainer = styled.div`
  max-width: 1080px;
  margin: 52px 0 40px 20px;

  @media (max-width: 1300px) {
    max-width: 575px;
  }
  @media (max-width: 940px) {
    margin: 27px 20px;
  }
`

export { Card, TitleContainer, CardTitle, List, ListItem, ListItemText, ContentContainer, CardImg }
