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

  a:first-of-type {
    font-size: 13px;
    color: ${colors.titleBlueColor};
  }
`
const CookiesTitle = styled.h3`
  display: flex;
  font:
    700 24px Manrope,
    sans-serif;
  color: black;
  color: ${colors.darkPrimary};
`

const CookiesPragraph = styled.p`
  font:
    400 16px Manrope,
    sans-serif;
  color: ${colors.darkPrimary};
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
`

export { CookiesContainer, CookiesTitle, CookiesPragraph, CloseButton }
