import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const CookiesContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 545px;
  width: 100%;
  min-height: 241px;
  border-radius: 20px;
  padding: 40px;
  bottom: 30px;
  left: 40px;
  background-color: ${colors.backgroundPrimary};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  z-index: 10;

  a:first-of-type {
    font-size: 13px;
    color: ${colors.titleBlueColor};
  }

  @media (max-width: 620px) {
    padding: 30px;
    max-width: 380px;
    min-height: 190px;
    gap: 12px;
    left: 30px;

    a:first-of-type {
      font-size: 11px;
    }

    @media (max-width: 440px) {
      padding: 16px;
      max-width: 280px;
      min-height: 150px;
      gap: 10px;
      left: 16px;
      bottom: 16px;

      a {
      &:nth-of-type(2n){
        width: 136px;
        font-size: 13px;
      }
    }
  }
`
const CookiesTitle = styled.h3`
  display: flex;
  font:
    700 24px Manrope,
    sans-serif;
  color: black;
  color: ${colors.darkPrimary};

  @media (max-width: 620px) {
    font:
      700 18px Manrope,
      sans-serif;
  }
`

const CookiesPragraph = styled.p`
  font:
    400 16px Manrope,
    sans-serif;
  color: ${colors.darkPrimary};

  @media (max-width: 620px) {
    font:
      700 12px Manrope,
      sans-serif;
  }
`

const CloseButton = styled.button`
  background-color: ${colors.backgroundPrimary};
  object-fit: contain;
  border: none;
  position: absolute;
  top: 20px;
  left: 505px;

  width: 22px;
  height: 22px;
  opacity: 1;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }

  @media (max-width: 620px) {
    left: 345px;
    img {
      width: 15px;
      height: 15px;
    }
  }

  @media (max-width: 440px) {
    left: 245px;
  }
`

export { CookiesContainer, CookiesTitle, CookiesPragraph, CloseButton }
