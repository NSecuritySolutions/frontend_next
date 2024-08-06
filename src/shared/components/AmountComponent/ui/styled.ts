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

const Number = styled.p<{ $small?: boolean }>`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.$small ? '15px' : '24px')};
  font-weight: ${(props) => (props.$small ? 800 : 700)};
  width: ${(props) => (props.$small ? '20px' : '30px')};

  @media (max-width: 620px) {
    font-size: ${(props) => (props.$small ? '16px' : '20px')};
    font-weight: ${(props) => (props.$small ? 700 : 800)};
  }
`

export { Amount, ChangeAmount, Number }
