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
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  transform: translateY(-100%);
`

const Typography = styled.p<{
  width: string
  size: number
  $justifyContent?: 'start' | 'center' | 'end'
  color?: string
}>`
  display: flex;
  font-size: ${(props) => props.size}px;
  font: Manrope;
  font-weight: 500;
  justify-content: ${(props) => props.$justifyContent || 'center'};
  width: ${(props) => props.width};
  color: ${(props) => props.color || colors.backgroundPrimary}}
`

export { TooltipImage, Tip, Typography }
