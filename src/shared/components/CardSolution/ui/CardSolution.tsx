import { FC, useState } from "react";

import { BtnLink } from "../../BtnLink";

import {
  Card,
  CardTitle,
  CardImg,
  CharacteristicsList,
  ListTitle,
  ListItem,
  PriceText,
  InfoBtn,
  CardImgWrapper,
  TooltipContainer,
  ToolTipParagraph,
} from "./styled";
import colors from "../../../constants/colors";

export type TCardSolutionProps = {
  id?: number;
  title: string;
  img: string;
  listItem: string[];
  price: string;
  toolTipText: string[];
};

const CardSolution: FC<TCardSolutionProps> = ({
  title,
  img,
  listItem,
  price,
  toolTipText,
}) => {
  const formattedPrice = Number(price).toLocaleString("ru-RU");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <Card>
      <InfoBtn
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showTooltip && (
        <TooltipContainer>
          <CardTitle>{title}</CardTitle>
          {toolTipText.map((paragraph, index) => (
            <ToolTipParagraph key={index}>{paragraph}</ToolTipParagraph>
          ))}
        </TooltipContainer>
      )}
      <CardImgWrapper>
        <CardImg src={img} alt={title} />
      </CardImgWrapper>
      <CardTitle>{title}</CardTitle>
      <ListTitle>Характеристики</ListTitle>
      <CharacteristicsList>
        {listItem.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </CharacteristicsList>
      <ListTitle>Выезд инженера - Бесплатно!</ListTitle>
      <PriceText>{`${formattedPrice} ₽`}</PriceText>
      <BtnLink
        btnType="accent"
        text="В калькулятор"
        width="235px"
        height="44px"
        link=""
        color={colors.darkPrimary}
        size="15px"
      />
      <BtnLink
        btnType="transparent"
        text="Заказать звонок"
        width="235px"
        height="44px"
        link=""
        color={colors.darkPrimary}
        size="15px"
      />
    </Card>
  );
};

export default CardSolution;
