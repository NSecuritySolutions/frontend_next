import React from 'react';
import { TBtnLinkProps } from '../types/types';
import {
  StyledBtnLink,
  StyledAccentBtnLink,
  StyledTransparentBtnLink
} from './styles';

const BtnLink: React.FC<TBtnLinkProps> = ({
  width,
  height,
  color,
  text,
  link,
  size,
  btnType,
  onClick
}) => {
  const renderButton = () => {
    switch (btnType) {
      case 'accent':
        return (
          <StyledAccentBtnLink
            size={size}
            color={color}
            width={width}
            height={height}
            href={link}
            onClick={onClick}>
            {text}
          </StyledAccentBtnLink>
        );
      case 'transparent':
        return (
          <StyledTransparentBtnLink
            size={size}
            color={color}
            width={width}
            height={height}
            href={link}
            onClick={onClick}>
            {text}
          </StyledTransparentBtnLink>
        );
      default:
        return (
          <StyledBtnLink
            size={size}
            color={color}
            width={width}
            height={height}
            href={link}>
            {text}
          </StyledBtnLink>
        );
    }
  };

  return renderButton();
};

export default BtnLink;
