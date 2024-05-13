import { FC } from "react";

import listMarker from "../../../../assets/icons/list-item.svg";
import {
  Card,
  CardTitle,
  ContentContainer,
  List,
  ListItem,
  ListItemText,
  TitleContainer,
} from "./styled";

type TCardProps = {
  title: string;
  banner: string;
  listItem: string[];
  backgroundColor: string;
};

const CardWithListAndBanner: FC<TCardProps> = ({
  title,
  banner,
  listItem,
  backgroundColor,
}) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <ContentContainer>
        <TitleContainer>
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
      </ContentContainer>

      <img src={banner} alt="Banner" />
    </Card>
  );
};

export default CardWithListAndBanner;
