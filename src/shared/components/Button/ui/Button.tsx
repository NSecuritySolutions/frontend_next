import React from "react";

import { TBtnLinkProps } from "../types/types";
import { StyledBtnLink } from "./styles";

const BtnLink: React.FC<TBtnLinkProps> = ({
  width,
  height,
  color,
  text,
  disabled,
  onClick
}) => {
  return (
    <StyledBtnLink 
      color={color} 
      width={width} 
      height={height} 
      onClick={onClick}
      disabled={disabled}>
      {text}
    </StyledBtnLink>
  );
};

export default BtnLink;
