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
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.darkPrimary};
  opacity: 0.8px;
`

const Typography = styled.p<{
  width: string
  $justifyContent?: 'start' | 'center' | 'end'
}>`
  display: flex;
  font-size: 24;
  font: Manrope;
  font-weight: 700;
  justify-content: ${(props) => props.$justifyContent || 'center'};
  width: ${(props) => props.width};
`

export { Amount, ChangeAmount, Typography }
