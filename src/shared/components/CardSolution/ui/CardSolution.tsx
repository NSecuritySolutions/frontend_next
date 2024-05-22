import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import {
  Card,
  CardTitle,
  CharacteristicsList,
  ListTitle,
  ListItem,
  PriceText,
  InfoBtn,
  CardImgWrapper,
  TooltipContainer,
  ToolTipParagraph,
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
      <InfoBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {showTooltip && (
        <TooltipContainer>
          <CardTitle>{data.title}</CardTitle>
          {/* @TODO Сделать нормальный tooltip */}
          {data.toolTipText.map((paragraph, index) => (
            <ToolTipParagraph key={index}>{paragraph}</ToolTipParagraph>
          ))}
        </TooltipContainer>
      )}
      <CardImgWrapper>
        <Image src={data.img} alt={data.title} />
      </CardImgWrapper>
      <CardTitle>{data.title}</CardTitle>
      <ListTitle>Характеристики</ListTitle>
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
      <ListTitle>Выезд инженера - Бесплатно!</ListTitle>
      <PriceText>{`${formattedPrice} ₽`}</PriceText>
      <ProductButtonGroup link="" />
    </Card>
  )
}

export default CardSolution
