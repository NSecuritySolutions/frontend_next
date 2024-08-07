import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const ToogleBorder = styled.div`
  display: flex;
  border: 1px solid;
  border-color: ${colors.textSecondary};
  border-radius: 20px;
  min-width: 40px;
  height: 24px;
  align-items: center;
  padding-inline: 4px;
  cursor: pointer;

  &.checked {
    background-color: ${colors.btnPrimary};
  }
`

const Toogler = styled.div`
  background-color: ${colors.textSecondary};
  border-radius: 20px;
  width: 16px;
  height: 16px;
  transition: transform 0.5s;

  ${ToogleBorder}.checked & {
    transform: translateX(15px);
  }
`

export { ToogleBorder, Toogler }
