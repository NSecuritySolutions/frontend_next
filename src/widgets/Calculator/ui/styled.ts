import colors from '@/shared/constants/colors'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.div<{ height?: number }>`
  background-color: ${colors.backgroundBase4};
  padding: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: ${(props) => (props.height ? props.height : 393)}px;
  gap: 12px;
  transition: max-height 1s;
`

const SectionTitle = styled.h3`
  margin-bottom: 30px;

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
  transition: { type: 'tween', duration: 1.5, ease: 'backOut' },
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export { Section, SectionTitle, ImgWrap, ImageButton, FooterWrapper }
