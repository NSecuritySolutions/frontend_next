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

export { Amount, ChangeAmount }
