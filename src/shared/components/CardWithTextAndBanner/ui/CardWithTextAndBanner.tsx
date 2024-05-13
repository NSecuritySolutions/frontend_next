import { FC } from "react";

import { BtnLink } from "../../BtnLink";

import {
  Card,
  CardText,
  CardTitle,
  CardImg,
  ImgWrapper,
  TextWrapper,
} from "./styled";
import colors from "../../../constants/colors";

type TCardProps = {
  title: string;
  img: string;
  text: string;
  btnName: string;
  link: string;
  backgroundColor: string;
};

const CardWithTextAndBanner: FC<TCardProps> = ({
  title,
  img,
  text,
  link,
  btnName,
  backgroundColor,
}) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <ImgWrapper>
        <CardImg src={img} alt={title} />
      </ImgWrapper>
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <BtnLink
          btnType="transparent"
          text={btnName}
          width="212px"
          height="44px"
          link={link}
          color={colors.darkPrimary}
          size="15px"
        ></BtnLink>
      </TextWrapper>
    </Card>
  );
};

export default CardWithTextAndBanner;
