import { FC, useState } from 'react'
import { StaticImageData } from 'next/image'

import {
  Card,
  CardTitle,
  CharacteristicsList,
  ListTitle,
  ListItem,
  PriceWrapper,
  PriceText,
  InfoBtn,
  ImageWrapper,
  Img,
  TooltipContainer,
  ToolTipParagraph,
  DescriptionWrapper,
} from './styled'
import colors from '@/shared/constants/colors'
import Link from 'next/link'
import { Typography } from '@/shared/components/Typography'
import { ProductButtonGroup } from '@/shared/components/ProductButtonGroup'

export type TCardSolutionProps = {
  id?: number
  title: string
  img: StaticImageData
  listItem: string[]
  price: number
  toolTipText: string[]
}

interface CardSolutionProps {
  data: TCardSolutionProps
}

const CardSolution: FC<CardSolutionProps> = ({ data }) => {
  const formattedPrice = Number(data.price).toLocaleString('ru-RU')
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowTooltip(false)
    }, 1000)
  }

  return (
    <Card>
      <InfoBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showTooltip && (
          <TooltipContainer>
            <CardTitle>{data.title}</CardTitle>
            {data.toolTipText.map((paragraph, index) => (
              <ToolTipParagraph key={index}>{paragraph}</ToolTipParagraph>
            ))}
          </TooltipContainer>
        )}
      </InfoBtn>
      <ImageWrapper>
        <Img src={data.img} quality={100} alt={data.title} />
      </ImageWrapper>
      <CardTitle>{data.title}</CardTitle>
      <DescriptionWrapper>
        <ListTitle>Состав комплекта</ListTitle>
        <CharacteristicsList>
          {data.listItem.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </CharacteristicsList>
        <Link href={`/products/${data.id}`}>
          <Typography size={16} $weight={400} color={colors.titleBlueColor}>
            Подробнее...
          </Typography>
        </Link>
      </DescriptionWrapper>
      <PriceWrapper>
        <ListTitle>Выезд инженера - Бесплатно!</ListTitle>
        <PriceText>{`${formattedPrice} ₽`}</PriceText>
      </PriceWrapper>
      <ProductButtonGroup link="" />
    </Card>
  )
}

export default CardSolution
