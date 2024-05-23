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

const TitleWrapper = styled.div<{ $width?: number }>`
  width: ${(props) => props.$width || 880}px;
  margin-top: 40px;
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  z-index: 2;
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
  position: absolute;
  top: 30px;
  left: 0px;
  width: max-content;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
  background-color: ${colors.backgroundPrimary};
  z-index: 99;
`

const Option = styled.div`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${colors.backgroundBase3};
  }
`

const GridContainer = styled.div`
  margin-top: 58px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
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
  TitleWrapper,
  GridContainer,
}
