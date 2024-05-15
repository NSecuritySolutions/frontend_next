import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import Link from 'next/link'

const TheHeader = styled.header`
  // Приклеивает меню к верхнему краю страницы
  // position: sticky;
  // position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  background-color: ${colors.backgroundBase2};
  color: ${colors.darkPrimary};
  z-index: 5;
`

const HeaderWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;

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
  padding-bottom: 8px;
`
const HeaderTopItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const HeaderText = styled.p`
  font-size: 15px;
  line-height: 133%;
  font-weight: 800;

  @media (max-width: 940px) {
    display: none;
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

const HeaderNav = styled.div`
  align-self: flex-end;
  width: 83%;

  @media (max-width: 1300px) {
    align-self: flex-start;
    width: 100%;
  }

  @media (max-width: 940px) {
    display: none;
  }
`

const HeaderList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const HeaderNavItem = styled.li`
  font-size: 17px;
  line-height: 136%;
  font-weight: 800;

  @media (max-width: 1300px) {
    font-size: 16px;
    font-weight: 700;
    flex-grow: 1;
  }
`

const HeaderNavLink = styled(Link)`
  padding-bottom: 6px;
  color: ${colors.darkPrimaryOpacity};
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
}
