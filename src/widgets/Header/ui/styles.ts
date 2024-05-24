import styled, { css } from 'styled-components'
import colors from '@/shared/constants/colors'
import Link from 'next/link'

const TheHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 101px;
  background-color: ${colors.backgroundPrimary};
  color: ${colors.darkPrimary};
  z-index: 5;
`

const HeaderWrapper = styled.div`
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 620px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderTopItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const HeaderText = styled.p`
  font-size: 16px;
  line-height: 21.86px;
  font-weight: 700;
`

const HeaderContacts = styled.div`
  display: flex;
  gap: 32px;
`

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const SocialWrapper = styled.div`
  display: flex;
  gap: 12px;
`

const HeaderTel = styled.p`
  font-size: 18px;
  line-height: 136%;
  font-weight: 800;

  @media (max-width: 1300px) {
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: 940px) {
    display: none;
  }
`

const HeaderBtnWrapper = styled.div`
  width: 198px;
  height: 56px;

  @media (max-width: 1300px) {
    width: 173px;
    height: 44px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`

const HeaderBurgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 940px) {
    display: block;
  }
`

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 101px;
  width: 100%;

  @media (max-width: 1300px) {
    align-self: flex-start;
    width: 100%;
  }

  @media (max-width: 940px) {
    display: none;
  }
`

const HeaderList = styled.ul`
  width: 1180px;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
`

const HeaderNavItem = styled.li`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;

  @media (max-width: 1300px) {
    font-size: 16px;
    font-weight: 700;
    flex-grow: 1;
  }
`

const HeaderNavLink = styled(Link)`
  color: ${colors.darkPrimaryOpacity};
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease;

  &:hover:not(.active) {
    color: ${colors.darkPrimary};
  }

  &.active {
    color: ${colors.darkPrimary};
    border-bottom: 1px solid ${colors.darkPrimary};
    cursor: default;
  }
`

export {
  TheHeader,
  HeaderWrapper,
  HeaderNav,
  HeaderList,
  HeaderNavItem,
  HeaderNavLink,
  HeaderTop,
  HeaderTopItem,
  HeaderText,
  HeaderTel,
  HeaderBtnWrapper,
  HeaderBurgerMenuWrapper,
  HeaderContacts,
  IconTextWrapper,
  SocialWrapper,
}
