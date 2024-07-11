import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'
import Image from 'next/image'

import styled, { css } from 'styled-components'

interface CardProps {
  $center?: boolean
  $expanded: boolean
  $deleted: boolean
  $height: number
  $len: number
}

const Card = styled(motion.div).attrs<CardProps>((props) => ({
  layout: 'position',
  initial: { scale: 0, y: -49 },
  animate: {
    scale: props.$deleted ? 0 : 1,
    y: props.$deleted ? -49 : 0,
  },
  transition: { duration: 1, type: 'spring', damping: 15 },
}))<CardProps>`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  margin-block: ${(props) => (props.$deleted ? 0 : '10px')};
  padding: ${(props) => (props.$deleted ? '0px 12px' : props.$expanded ? '12px' : '23px 12px')};
  max-height: ${(props) =>
    props.$deleted ? 0 : props.$expanded ? `${89 + props.$len * 36}px` : '89px'};
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 430px;
  grid-row: span ${(props) => (props.$deleted ? 0 : props.$expanded ? 3 + props.$len : 3)};
  transition:
    margin-block 1s,
    height 1s linear,
    max-height 1s,
    ${(props) => (props.$deleted ? `grid-row 1s,` : undefined)} padding 1s;

  ${(props) =>
    props.$center &&
    css`
      align-items: center;
    `}//   @media (max-width: 620px) {
  //   max-height: ${(props) => (props.$expanded ? `${60 + props.$len * 28}px` : '60px')};
  //   padding: ${(props) => (props.$expanded ? '8px' : '12px 8px')};
  //   width: 328px;
  //   gap: 8px;
  // }
`

const CardImgWrapper = styled(Image)`
  border-radius: 50%;
  background-color: ${colors.darkPrimary};
  width: 48px;
  height: 48px;
  padding: 5px;
  object-fit: cover;

  // @media (max-width: 620px) {
  //   width: 35px;
  //   height: 35px;
  // }
`

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  justify-content: space-between;
  align-items: center;

  // @media (max-width: 620px) {
  //   height: 35px;
  // }
`

const ImageTitle = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  width: 188px;

  @media (max-width: 620px) {
    width: 328px;
  }
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.darkPrimary};
  line-height: 1.33;

  // @media (max-width: 620px) {
  //   font-size: 14px;
  // }
`

const Divider = styled.div<{ $show: boolean }>`
  border: 1px solid ${colors.backgroundCardBl};
  width: 100%;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition: opacity 0.5s;
`

const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 11px;
`

const OptionsWrapper = styled.div`
  width: 100%;
`

const Price = styled(motion.div)`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  width: 120px;
  justify-content: end;
`

export {
  Card,
  CardImgWrapper,
  CardHeader,
  ImageTitle,
  Title,
  Divider,
  CloseButton,
  OptionsWrapper,
  Price,
}
