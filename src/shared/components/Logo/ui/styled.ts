import styled from 'styled-components'
import Link from 'next/link'
import colors from '@/shared/constants/colors'

const LogoContainer = styled.div`
  display: flex;
  width: 344px;
  height: 61px;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 6px;
  align-items: center;
`

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.textSecondary};
`

const LogoSubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.darkPrimary};

  @media (max-width: 360px) {
    display: none;
  }
`

const LogoTitleSpan = styled.span`
  color: ${colors.btnPrimary};
`

export { LogoContainer, LogoLink, LogoTextWrapper, LogoTitle, LogoSubTitle, LogoTitleSpan }
