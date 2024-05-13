import { FC } from "react";

import { BtnLink } from "../../BtnLink";

import { Card, CardTitle, CardText, CardImg } from "./styled";
import colors from "../../../constants/colors";

type TCardProps = {
  title: string;
  img: string;
  text: string;
  btnName: string;
  link: string;
};

const CardWithText: FC<TCardProps> = ({ title, img, text, btnName, link }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <BtnLink
        btnType="transparent"
        text={btnName}
        width="134px"
        height="44px"
        link={link}
        color={colors.darkPrimary}
        size="15px"
      ></BtnLink>
      <CardImg src={img} alt={title} />
    </Card>
  );
};

export default CardWithText;
