import styled from 'styled-components'
import colors from '../../../constants/colors'

const Card = styled.div`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px 20px;
  min-height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;

  position: relative;
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  width: 100%;
  text-align: center;
`

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  text-align: center;
`

const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  width: 100%;
`

const CardImgWrapper = styled.div`
  width: fit-content;
  height: 207px;
  overflow: hidden;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const CharacteristicsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 10px;
`

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
`

const PriceText = styled.span`
  font-size: 24px;
  font-weight: 700;
`

const InfoBtn = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  background-image: url('/icons/additionalInfoBtn.svg');
  width: 16px;
  height: 16px;
  cursor: pointer;
`

const TooltipContainer = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  //transform: translateX(-50%);
  width: 460px;
  background-color: ${colors.backgroundCardYe};
  color: ${colors.darkPrimary};
  padding: 60px 40px;
  border-radius: 12px;

  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ToolTipParagraph = styled.p`
  font-size: 15px;
  font-weight: 400;
`

export {
  Card,
  InfoBtn,
  CardText,
  CardTitle,
  CardImg,
  CharacteristicsList,
  ListTitle,
  ListItem,
  PriceText,
  CardImgWrapper,
  TooltipContainer,
  ToolTipParagraph,
}
