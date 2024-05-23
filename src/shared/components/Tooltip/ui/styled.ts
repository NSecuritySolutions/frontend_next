import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const TooltipImage = styled.div<{ alt?: string }>`
  // position: relative;
  border-radius: 50%;
  background: url('/icons/calculator/tooltip.svg') no-repeat center;
  background-color: ${colors.backgroundBase3};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`

const Tip = styled.div<{ $maxWidth: string }>`
  position: absolute;
  z-index: 9999;
  max-width: ${(props) => props.$maxWidth};
  background-color: rgba(0, 0, 0, 0.75);
  color: ${colors.backgroundPrimary};
  padding: 8px;
  border-radius: 4px;
  transform: translateY(-100%);
`

export { TooltipImage, Tip }
