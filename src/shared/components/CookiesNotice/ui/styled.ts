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
  z-index: 99;
  bottom: 30px;
  left: 40px;
  background-color: ${colors.backgroundPrimary};
  a:first-of-type {
    font-size: 13px;
    color: ${colors.titleBlueColor};
  }
`
const CookiesTitle = styled.h4`
  display: flex;
  font:
    700 24px Monrope,
    sans-serif;
  color: black;
  z-index: 99;
  color: ${colors.darkPrimary};
`

const CookiesPragraph = styled.p`
  font:
    400 16px Monrope,
    sans-serif;
  color: ${colors.darkPrimary};
`

export { CookiesContainer, CookiesTitle, CookiesPragraph }
