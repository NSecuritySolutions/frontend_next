import styled from "styled-components";
import { TStyledBtnLinkProps } from "../types/types";
import colors from "../../../constants/colors";

const StyledBtnLink = styled.a<TStyledBtnLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => props.color || "#101010"};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`;

const StyledAccentBtnLink = styled.a<TStyledBtnLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => props.color || "#101010"};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};

  &:hover {
    background-color: ${colors.btnPrimaryHover};
  }
`;

const StyledTransparentBtnLink = styled.a<TStyledBtnLinkProps>`
  cursor: pointer;
  justify-content: center;
  border-radius: 12px;
  border-color: rgba(16, 16, 16, 0.32);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.backgroundPrimary};
  white-space: nowrap;
  padding: 12px 20px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  text-align: center;
  opacity: 1;
  font-size: ${(props) => props.size};

  font: 800 15px/133% Manrope, sans-serif;

  &:hover {
    background-color: ${colors.btnOutlineHover};
  }
`;

export { StyledBtnLink, StyledAccentBtnLink, StyledTransparentBtnLink };
