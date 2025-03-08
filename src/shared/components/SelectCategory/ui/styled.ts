import colors from '@/shared/constants/colors'
import Image from 'next/image'

import styled, { css } from 'styled-components'

const SelectContainer = styled.div`
  width: 258px;
  margin-bottom: 25px;
`

const Select = styled.div`
  position: relative;
  display: flex;
  padding-inline: 8px;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  height: 38px;
  width: 100%;
  border: 1px solid ${colors.backgroundBase3};
  background-color: ${colors.backgroundPrimary};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
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
  max-width: 220px;
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

const SelectMenu = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  border: 1px solid ${colors.backgroundBase3};
  background-color: ${colors.backgroundPrimary};

  z-index: 99;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`

const Option = styled.ol`
  width: 100%;
  height: 38px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 8px;

  &.checked {
    background-color: ${colors.btnPrimary};
  }

  &.disabled {
    background-color: ${colors.backgroundBase3};
  }
`

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`

export { SelectContainer, Select, SelectItem, Arrow, SelectMenu, Option, DropdownContainer }
