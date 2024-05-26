import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled, { css } from 'styled-components'

const Card = styled(motion.div).attrs({
  layout: 'position',
  initial: { scale: 0, y: -49 },
  animate: { scale: 1, y: 0 },
  exit: { scale: 0, y: -49 },
  transition: { duration: 1, type: 'spring', damping: 15 },
})<{
  $center?: boolean
  $expanded: boolean
  len: number
}>`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: ${(props) => (props.$expanded ? '12px' : '23px 12px')};
  max-height: ${(props) => (props.$expanded ? `${89 + props.len * 36}px` : '89px')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 430px;
  grid-row: span 3;
  transition:
    max-height 1s,
    padding 1s;

  ${(props) =>
    props.$center &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.$expanded &&
    css`
      grid-row: span ${3 + props.len};
    `}
`

const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${colors.darkPrimary};
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`

const CardHeader = styled.div`
  display: flex;
  width: 406px;
  height: 44px;
  justify-content: space-between;
  align-items: center;
`

const ImageTitle = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  width: 188px;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.darkPrimary};
  line-height: 21.86px;
`

const Divider = styled.div<{ $show: boolean }>`
  border: 1px solid ${colors.backgroundCardBl};
  width: 100%;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition: opacity 0.5s;
`

const Option = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  gap: 20px;
`

const OptionHeader = styled.div`
  display: flex;
  width: 198px;
  gap: 8px;
  align-items: center;
`

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid ${colors.btnPrimary};
  appearance: none;
  cursor: pointer;
  color: transparent;

  &:checked::before {
    content: '✔';
    font-size: 16px;
    position: absolute;
    right: 2px;
    top: -2px;
  }

  &:checked {
    background-color: ${colors.btnPrimary};
    color: ${colors.darkPrimary};
    transition: all 0.5s;
    position: relative;
  }
`

const InputNumber = styled.input.attrs({ type: 'number', min: 0 })`
  width: 60px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid ${colors.backgroundBase3};
  font: Manrope;
  font-weight: 500;
  -moz-appearance: textfield;

  &:focus {
    outline: thin solid ${colors.btnPrimary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export {
  Card,
  CardImgWrapper,
  CardHeader,
  ImageTitle,
  Title,
  Divider,
  Option,
  OptionHeader,
  CheckBox,
  InputNumber,
}
