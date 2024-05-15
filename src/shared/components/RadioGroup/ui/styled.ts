import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Radio = styled.input.attrs({ type: 'radio' })`
  display: none;
`

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
`

const LabelText = styled.p`
  padding: 4px 8px;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
  user-select: none;
  font: 13px 'Manrope';
  font-weight: 700;
  line-height: 24px;
  background-color: ${colors.backgroundPrimary};

  ${Radio}:checked + && {
    background-color: ${colors.btnPrimary};
  }
`

export { Radio, Label, LabelText }
