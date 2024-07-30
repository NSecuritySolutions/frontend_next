import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled from 'styled-components'

const Option = styled(motion.div).attrs({
  layout: 'position',
  initial: { opacity: 0, x: -400 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -400, transition: { duration: 1 } },
  transition: { duration: 0.8 },
})`
  height: 36px;
  display: flex;
  align-items: center;
  gap: 20px;

  // @media (max-width: 620px) {
  //   height: 26px;
  // }
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

const InputNumber = styled.input.attrs({ type: 'number', min: 1 })`
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

export { Option, OptionHeader, CheckBox, InputNumber }
