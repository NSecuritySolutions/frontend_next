import { FC } from "react";
import { TNavColumnProps } from "../types/types";
import { Container, List, ListItem, NavLinkStyled, Title } from "./styled";

const NavColumn: FC<TNavColumnProps> = ({ lists }) => {
  return (
    <Container>
      {lists.map((list, index) => (
        <div key={index}>
          <Title>{list.title}</Title>
          <List>
            {list.items.map((item, idx) => (
              <ListItem key={idx}>
                <NavLinkStyled to={item.navLink}>{item.text}</NavLinkStyled>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Container>
  );
};

export default NavColumn;
