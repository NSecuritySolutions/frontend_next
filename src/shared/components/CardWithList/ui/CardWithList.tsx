import { FC } from "react";

import listMarker from "../../../../assets/icons/list-item.svg";
import {
  Card,
  CardTitle,
  List,
  ListItem,
  ListItemText,
  TitleContainer,
} from "./styled";

type TCardProps = {
  title: string;
  logo: string;
  listItem: string[];
  backgroundColor: string;
};

const CardWithList: FC<TCardProps> = ({
  title,
  logo,
  listItem,
  backgroundColor,
}) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <TitleContainer>
        <img src={logo} alt="Logo" />
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <List>
        {listItem.map((item, index) => (
          <ListItem key={index}>
            <img src={listMarker} alt="List Marker" />
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CardWithList;
