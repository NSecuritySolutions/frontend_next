import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Amount = styled.div`
  display: flex;
  height: 33px;
  gap: 4px;
  align-items: center;
`

const ChangeAmount = styled.button`
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

const Typography = styled.p<{
  width?: string
  size?: number
  $justifyContent?: 'start' | 'center' | 'end'
}>`
  display: flex;
  font-size: ${(props) => (props.size ? props.size : 24)}px;
  font: Manrope;
  font-weight: 700;
  justify-content: ${(props) => props.$justifyContent || 'center'};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export { Amount, ChangeAmount, Typography }
