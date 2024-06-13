import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { TNavColumnProps } from '../types/types'
import { Container, List, ListItem, NavLinkStyled, Title } from './styled'

const NavColumn: FC<TNavColumnProps> = ({ lists }) => {
  const pathname = usePathname()
  return (
    <Container>
      {lists.map((list, index) => (
        <div key={index}>
          <Title>{list.title}</Title>
          <List>
            {list.items.map((item, idx) => (
              <ListItem key={idx}>
                <NavLinkStyled
                  href={item.navLink}
                  className={item.navLink === pathname ? 'active' : undefined}
                >
                  {item.text}
                </NavLinkStyled>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Container>
  )
}

export default NavColumn
