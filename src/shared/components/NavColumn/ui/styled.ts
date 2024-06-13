import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import Link from 'next/link'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 20px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 205px);
  }

  @media (max-width: 940px) {
    display: none;
  }
`

const Title = styled.h3`
  font-size: 18px;
  line-height: 136%;
  font-weight: 800;
  margin-bottom: 20px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 280px;
`

const ListItem = styled.li`
  cursor: pointer;
`

const NavLinkStyled = styled(Link)`
  font-size: 16px;
  line-height: 136%;
  font-weight: 400;
  position: relative;
  cursor: default;

  &.active:before {
    width: 100%;

    transition:
      width 0.4s ease,
      transform-origin 0.8s ease;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${colors.darkPrimary};
    transform-origin: left;

    transition:
      width 0.4s ease,
      transform-origin 0.8s ease;
  }

  &:hover:before {
    width: 100%;
    transform-origin: right;
  }
`

export { Container, Title, List, ListItem, NavLinkStyled }
