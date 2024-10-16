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
  $overlay: boolean
  $active: boolean
}

const Card = styled(motion.div).attrs<CardProps>((props) => ({
  layout: 'position',
  initial: { scale: 0, y: -49 },
  animate: {
    scale: props.$deleted ? 0 : 1,
    y: props.$deleted ? -49 : 0,
  },
  transition: { duration: 0.5, type: 'just' },
}))<CardProps>`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  margin-block: ${(props) => (props.$deleted ? 0 : '10px')};
  padding: ${(props) => (props.$deleted ? '0px 12px' : props.$expanded ? '12px' : '23px 12px')};
  max-height: ${(props) =>
    props.$deleted ? 0 : props.$expanded ? `${89 + props.$len * 40}px` : '89px'};
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
    `}

  ${(props) =>
    props.$overlay &&
    css`
      z-index: 10;
      outline: ${props.$active ? '4px solid #17d114' : 'none'};
      cursor: pointer;

      &:hover {
        outline: 4px solid #17d114;
      }

      & * {
        pointer-events: none;
      }
    `}

  @media (max-width: 940px) {
    width: 580px;
  }

  @media (max-width: 620px) {
    width: 328px;
    padding: ${(props) => (props.$deleted ? '0px 12px' : props.$expanded ? '12px' : '12px 12px')};
    max-height: ${(props) =>
      props.$deleted ? 0 : props.$expanded ? `${85 + props.$len * 40}px` : '68px'};
    margin-block: ${(props) => (props.$deleted ? 0 : '4px')};
  }
`

const CardImgWrapper = styled(Image)`
  border-radius: 50%;
  background-color: ${colors.darkPrimary};
  width: 48px;
  height: 48px;
  padding: 5px;
  object-fit: cover;

  @media (max-width: 620px) {
    display: none;
  }
`

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 46px;
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
  width: 205px;

  @media (max-width: 620px) {
    width: 100px;
  }
`

const Title = styled.p`
  font-size: 15px;
  font-weight: 800;
  color: ${colors.darkPrimary};
  line-height: 1.33;
  max-height: 43px;
  overflow: hidden;

  @media (max-width: 620px) {
    font-size: 16px;
  }
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

const Price = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  width: 207px;
  justify-content: end;

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
    width: 100px;
  }
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
