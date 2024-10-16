import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled, { css } from 'styled-components'

const Section = styled.section`
  margin: 40px auto;
  background-color: ${colors.backgroundBase2};
  width: 1180px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  > a:last-of-type {
    display: flex;
    align-self: center;
  }

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
  }

  @media (max-width: 620px) {
    width: 328px;
  }
`
const SectionWrapper = styled.div<{ $maxHeight?: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  // max-height: ${(props) => (props.$maxHeight ? `${props.$maxHeight}px` : 'none')};
  margin-bottom: 32px;
  transition: max-height 1s;

  ${(props) =>
    props.$maxHeight &&
    css`
      max-height: ${props.$maxHeight}px;
    `}

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 32px;
`
export { Section, SectionWrapper, SectionTitle }
