import styled from 'styled-components'
import { TStyledBtnLinkProps } from '../types/types'
import colors from '@/shared/constants/colors'

const StyledBtnLink = styled.a<TStyledBtnLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => props.color || '#101010'};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  cursor: pointer;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`

const StyledAccentBtnLink = styled.a<TStyledBtnLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => props.color || '#101010'};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  cursor: pointer;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`

const StyledTransparentBtnLink = styled.a<TStyledBtnLinkProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-color: rgba(16, 16, 16, 0.32);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.backgroundPrimary};
  white-space: nowrap;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  opacity: 1;
  font-size: ${(props) => props.size};
  font-weight: 800;
  line-height: 1.33;

  &:hover {
    background-color: ${colors.btnOutlineHover};
  }

  // @media (max-width: 620px) {
  //   font-size: ${(props) => `calc(${props.size} - 2px)`};
  //   font-weight: 700;
  // }
`

export { StyledBtnLink, StyledAccentBtnLink, StyledTransparentBtnLink }
