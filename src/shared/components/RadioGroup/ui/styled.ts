import colors from '@/shared/constants/colors'
import Image from 'next/image'

import styled, { css } from 'styled-components'

const Radio = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
`

const LabelText = styled.p`
  padding: 0px 8px;
  border-radius: 6px;
  user-select: none;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  background-color: ${colors.backgroundPrimary};

  ${Radio}:checked + && {
    background-color: ${colors.btnPrimary};
  }
`

const Select = styled.div`
  display: flex;
  padding-inline: 8px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 32px;
  width: 120px;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;

  &.focus {
    border-color: ${colors.btnPrimary};
  }

  @media (max-width: 620px) {
    width: auto;
    max-width: 110px;
  }
`

const SelectItem = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 84px;
`

const Arrow = styled(Image).attrs({
  height: 16,
  width: 16,
})<{ $open: boolean }>`
  transition: transform 0.3s;

  ${(props) =>
    props.$open &&
    css`
      transform: rotate(180deg);
    `}
`

const SelectMenu = styled.ul<{ $top: number; $left: number }>`
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  width: 120px;
  border: 1px solid ${colors.backgroundBase3};
  background-color: ${colors.backgroundPrimary};
  overflow: ellipsys;
  z-index: 99;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
`

const Option = styled.ol`
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 3px 8px;

  &.checked {
    background-color: ${colors.btnPrimary};
  }
`

const RadioWrapper = styled.div`
  display: flex;
  padding: 3px;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
`

const RadioContainer = styled.div.attrs({ role: 'radiogroup' })`
  display: flex;
  align-items: center;
`

export {
  RadioContainer,
  Radio,
  Label,
  LabelText,
  Select,
  SelectItem,
  Arrow,
  SelectMenu,
  Option,
  RadioWrapper,
}
