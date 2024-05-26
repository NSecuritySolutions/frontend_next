import styled, { css } from 'styled-components'
import colors from '@/shared/constants/colors'
import Link from 'next/link'

const TheHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  color: ${colors.darkPrimary};
  z-index: 5;
`

const HeaderWrapper = styled.div<{ $openMenu: boolean }>`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
    min-height: 101px;
    max-height: ${(props) => (props.$openMenu ? '379px' : '101px')};
    overflow: hidden;
    transition: max-height 1s;
  }

  @media (max-width: 620px) {
    width: 360px;
    height: ${(props) => (props.$openMenu ? '514px' : '71px')};
    min-height: 71px;
    max-height: none;
    padding: 0px 16px;
    transition: height 1s;
  }
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  @media (max-width: 620px) {
    min-height: 71px;
    padding: 0px 16px;
  }
`
const HeaderTopItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 940px) {
    display: none;
  }
`

const HeaderText = styled.p`
  font-size: 16px;
  line-height: 21.86px;
  font-weight: 700;
`

const HeaderContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

const PhoneMailWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 1300px) {
    gap: 8px;
    flex-direction: column;
  }

  @media (max-width: 940px) {
    gap: 12px;
    flex-direction: column;
  }
`

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const SocialWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 620px) {
    justify-content: center;
  }
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
`

const HeaderBurgerMenuWrapper = styled.div`
  display: none;
  cursor: pointer;

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

const HeaderNavBurger = styled.nav`
  display: none;

  @media (max-width: 940px) {
    display: flex;
  }
`

const HeaderList = styled.ul`
  width: 1180px;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;

  @media (max-width: 1300px) {
    width: 880px;
    justify-content: space-between;
    padding: 20px 16px;
  }

  @media (max-width: 940px) {
    width: fit-content;
    flex-direction: column;
    padding: 0px 16px;
    gap: 32px;
  }

  @media (max-width: 620px) {
    gap: 20px;
  }
`

const HeaderNavItem = styled.li`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;
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

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 16px;
  }
`

const ContactsBurger = styled.div`
  display: none;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  PhoneMailWrapper,
  BurgerMenu,
  HeaderNavBurger,
  ContactsBurger,
}