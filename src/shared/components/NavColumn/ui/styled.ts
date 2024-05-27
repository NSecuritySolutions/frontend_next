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
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accentInfo};
  }
`

export { Container, Title, List, ListItem, NavLinkStyled }
