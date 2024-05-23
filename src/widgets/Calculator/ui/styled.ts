import colors from '@/shared/constants/colors'

import styled from 'styled-components'

import { motion } from 'framer-motion'

const Section = styled(motion.div).attrs({
  layout: 'size',
  transition: { type: 'linear' },
})<{
  height?: number
}>`
  background-color: ${colors.backgroundBase4};
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.h3`
  color: ${colors.darkPrimary};
  font:
    700 24px Manrope,
    sans-serif;
`

const ImgWrap = styled.div`
  padding: 9px;
  flex-shrink: 0;
`

const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`

const FooterWrapper = styled(motion.div).attrs({
  layout: 'position',
  transition: { type: 'spring', duration: 1, ease: 'backOut' },
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AddBlockButton = styled.button`
  display: flex;
  margin-top: 2px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.textSecondary};
  opacity: 0.8px;
  cursor: pointer;
`

const Select = styled.div`
  top: -3px;
  left: 25px;
  width: fit-content;
  position: absolute;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
  background-color: ${colors.backgroundPrimary};
`

const Option = styled.div`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${colors.backgroundBase3};
  }
`

export {
  Section,
  SectionTitle,
  ImgWrap,
  ImageButton,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
}
