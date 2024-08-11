import styled from 'styled-components'
import colors from '../../../constants/colors'
import Image from 'next/image'
import { Typography } from '../../Typography'

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
  height: 761px;

  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    width: 280px;
    height: 598px;
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 620px) {
    width: 242px;
    height: 544px;
    gap: 12px;
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

  @media (max-width: 620px) {
    font-size: 16px;
  }
`

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  width: 100%;

  @media (max-width: 1300px) {
    display: none;
  }
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

  @media (max-width: 1300px) {
    height: 140px;
  }

  @media (max-width: 620px) {
    height: 117px;
  }
`

const Img = styled(Image)`
  width: 208px;
  height: auto;
  object-fit: cover;

  @media (max-width: 1300px) {
    width: 131px;
    height: auto;
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

  @media (max-width: 620px) {
    font-size: 14px;
    height: 115px;
    -webkit-line-clamp: 6;
  }
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

    & > p {
      order: 2;
    }
  }
`

const LinkChild = styled(Typography)`
  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const PriceAd = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.33;
  width: 100%;

  @media (max-width: 1300px) {
    font-size: 13px;
    line-height: 24px;
    text-align: start;
  }
`

const PriceText = styled.span`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const InfoBtn = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  background-image: url('/icons/solutions/question.svg');
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 620px) {
    display: none;
  }
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
  width: 100%;
`

const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Button = styled.a<{ $weight?: number; $transparent?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$transparent ? `1px solid ${colors.darkPrimary}52` : 'none')};
  border-radius: 12px;
  background-color: ${(props) =>
    props.$transparent ? colors.backgroundPrimary : colors.btnPrimary};
  white-space: nowrap;
  width: 235px;
  height: 44px;
  font-size: 15px;
  font-weight: 800;
  opacity: 1;
  gap: 8px;

  &:hover {
    background-color: ${(props) =>
      props.$transparent ? colors.btnOutlineHover : colors.btnPrimaryHover};
  }

  @media (max-width: 620px) {
    font-size: 13px;
    font-weight: 700;
    width: 202px;
  }
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
  LinkChild,
  PriceWrapper,
  PriceText,
  PriceAd,
  Img,
  TooltipContainer,
  ToolTipParagraph,
  DescriptionWrapper,
  ButtonGroupWrapper,
  Button,
}
