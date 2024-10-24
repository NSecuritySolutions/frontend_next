import styled from 'styled-components'
import { TStyledBtnProps } from '../types/types'
import colors from '@/shared/constants/colors'

const StyledBtnLink = styled.button<TStyledBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => (props.disabled ? colors.btnOpacityColor : colors.darkPrimary)};
  text-decoration: none;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 800;
  font-family: var(--mont);
  cursor: pointer;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  &:hover {
    background-color: ${(props) => (props.disabled ? colors.btnPrimary : colors.btnPrimaryHover)};
  }
`
export { StyledBtnLink }
