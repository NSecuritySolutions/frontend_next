import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const FloatDiv = styled(motion.div).attrs({
  layout: 'position',
  initial: { bottom: -80 },
  animate: { bottom: 30 },
  exit: { bottom: -80 },
})<{ $position: string; $bottom: number; $right: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => props.$position || 'static'};
  bottom: ${(props) => props.$bottom || 0}px;
  right: ${(props) => props.$right || 0}px;
  cursor: pointer;

  & > img {
    box-shadow: 2px 2px 25px 0px ${colors.darkPrimary}0d;
    border-radius: 50%;
    background-color: ${colors.backgroundPrimary};
    padding: 7px;
  }

  @media (max-width: 940px) {
    display: none;
  }
`
export { FloatDiv }
