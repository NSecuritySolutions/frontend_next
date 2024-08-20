import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div<{ $backgroundColor: string }>`
  position: relative;
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  min-height: 260px;
  grid-area: bigCard;
  overflow: hidden;
  justify-content: space-between;

  @media (max-width: 940px) {
    width: 380px;
    height: 288px;
    width: 100%;
  }

  @media (max-width: 620px) {
    height: 188px;
    width: 293px;
    padding: 12px;
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
      margin-top: 30px;
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
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  line-height: 136%;

  @media (max-width: 940px) {
    width: 293px;
  }

  @media (max-width: 620px) {
    width: 221px;
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
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  gap: 20px;

  @media (max-width: 1300px) {
    max-width: 575px;
  }
  @media (max-width: 940px) {
    margin: 0;
  }
`

export { Card, TitleContainer, CardTitle, List, ListItem, ListItemText, ContentContainer, CardImg }
