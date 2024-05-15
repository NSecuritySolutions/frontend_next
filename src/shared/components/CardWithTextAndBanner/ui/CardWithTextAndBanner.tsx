import { FC } from 'react'

import { BtnLink } from '../../BtnLink'

import {
  Card,
  CardText,
  CardTitle,
  CardImg,
  ImgWrapper,
  TextWrapper,
  TextContainer,
} from './styled'

import colors from '@/shared/constants/colors'
import { StaticImageData } from 'next/image'

type TCardProps = {
  title: string
  img: StaticImageData | string
  text: string[]
  btnName: string
  link: string
  backgroundColor: string
}

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
      <ImgWrapper>{/* <CardImg src={img} alt={title} /> */}</ImgWrapper>
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <TextContainer>
          {text.map((item, index) => (
            <CardText key={index}>{item}</CardText>
          ))}
        </TextContainer>
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
  )
}

export default CardWithTextAndBanner
