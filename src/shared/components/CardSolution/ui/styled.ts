import styled from 'styled-components'
import colors from '../../../constants/colors'
import Image from 'next/image'

const Card = styled.div`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 0px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 380px;

  position: relative;

  @media (max-width: 1300px) {
    width: 280px;
  }
`

const CardTitle = styled.p`
  font-weight: 800;
  max-height: 50px;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  line-height: 1.33;
  font-size: 18px;
  width: 100%;
  text-align: center;

  @media (max-width: 1300px) {
    text-align: start;
  }
`

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
`

const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  overflow: hidden;
`

const Img = styled(Image)`
  width: 208px;
  height: 156px;
  object-fit: cover;

  @media (max-width: 1300px) {
    width: 131px;
    height: 98px;
  }
`

const CharacteristicsList = styled.ol`
  list-style-type: disc;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  height: 110px;
  overflow: hidden;
  line-height: 1.36;
  font-size: 16px;
  font-weight: 400;
`

const ListItem = styled.li``

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;

  @media (max-width: 1300px) {
    align-items: start;
    gap: 0px;

    & > span {
      order: 1;
    }

    & > h4 {
      order: 2;
      font-size: 13px;
    }
  }
`

const PriceText = styled.span`
  font-size: 24px;
  font-weight: 700;
`

const InfoBtn = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  background-image: url('/icons/solutions/question.svg');
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 999;
`

const TooltipContainer = styled.div`
  max-width: 420px;
  width: max-content;
  background-color: ${colors.backgroundCardYe};
  color: ${colors.darkPrimary};
  padding: 20px 32px;
  border-radius: 20px;
  transform: translateX(calc(-100% + 12px)) translateY(24px);

  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ToolTipParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export {
  Card,
  InfoBtn,
  CardText,
  CardTitle,
  ImageWrapper,
  CharacteristicsList,
  ListTitle,
  ListItem,
  PriceWrapper,
  PriceText,
  Img,
  TooltipContainer,
  ToolTipParagraph,
  DescriptionWrapper,
}
