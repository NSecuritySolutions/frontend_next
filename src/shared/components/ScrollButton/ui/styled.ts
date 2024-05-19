import { motion } from 'framer-motion'
import styled from 'styled-components'

const FloatDiv = styled(motion.div).attrs({
  layout: 'position',
})<{ position: string; bottom: number; right: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => props.position || 'static'};
  bottom: ${(props) => props.bottom || 0}px;
  right: ${(props) => props.right || 0}px;
`
export { FloatDiv }
