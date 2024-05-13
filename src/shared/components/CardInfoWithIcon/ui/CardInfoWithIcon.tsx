import { FC } from "react";

import { Card, CardTitle, CardText, TitleContainer } from "./styled";

type TCardInfoWithIconProps = {
  title: string;
  logo: string;
  text: string;
  backgroundColor: string;
};

const CardInfoWithIcon: FC<TCardInfoWithIconProps> = ({
  title,
  logo,
  text,
  backgroundColor,
}) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <TitleContainer>
        <img src={logo} alt="Logo" />
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardText>{text}</CardText>
    </Card>
  );
};

export default CardInfoWithIcon;
