import { FC } from 'react'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

import {
  Card,
  CardTitle,
  CharacteristicsList,
  ListTitle,
  ListItem,
  LinkChild,
  PriceWrapper,
  PriceText,
  PriceAd,
  ImageWrapper,
  Img,
  DescriptionWrapper,
} from './styled'
import colors from '@/shared/constants/colors'
import Link from 'next/link'
import { ProductButtonGroup } from '@/shared/components/ProductButtonGroup'
import { SolutionCardTooltip } from '@/shared/components/SolutionCardTooltip'

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
  const router = useRouter()

  const formattedPrice = Number(data.price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })

  // const handleCardClick = (e: React.MouseEvent) => {
  //   e.stopPropagation()
  //   router.push(`/products/${data.id}`)
  // }

  return (
    <Card
    // onClick={handleCardClick}
    >
      <SolutionCardTooltip title={data.title} text={data.toolTipText} key={data.title} />
      {/* <InfoBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showTooltip && (
          <TooltipContainer>
            <CardTitle>{data.title}</CardTitle>
            {data.toolTipText.map((paragraph, index) => (
              <ToolTipParagraph key={index}>{paragraph}</ToolTipParagraph>
            ))}
          </TooltipContainer>
        )}
      </InfoBtn> */}
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
          <LinkChild size={16} $weight={400} color={colors.titleBlueColor}>
            Подробнее...
          </LinkChild>
        </Link>
      </DescriptionWrapper>
      <PriceWrapper>
        <PriceAd>Выезд инженера - Бесплатно!</PriceAd>
        <PriceText>{formattedPrice}</PriceText>
      </PriceWrapper>
      <ProductButtonGroup link="" />
    </Card>
  )
}

export default CardSolution
