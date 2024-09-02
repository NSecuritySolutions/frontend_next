import { FC } from 'react'
import { usePathname } from 'next/navigation'

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
  ButtonGroupWrapper,
  Button,
} from './styled'
import colors from '@/shared/constants/colors'
import Link from 'next/link'
import { SolutionCardTooltip } from '@/shared/components/SolutionCardTooltip'
import { ISolution } from '@/widgets/ReadySolutionSection/types'
import calculatorStore from '@/app/store/calculatorStore'
import { useFormStore } from '@/app/store/formModalStoreProvider'

interface CardSolutionProps {
  data: ISolution
}

const CardSolution: FC<CardSolutionProps> = ({ data }) => {
  const modal = useFormStore()
  const pathname = usePathname()

  let calc
  let form
  if (['/', '/video-surveillance', '/intercom', '/security'].includes(pathname)) {
    calc = '#calculator'
    form = '#contact-form'
  } else {
    form = '/#contact-form'
    calc = '/#calculator'
  }

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
      <SolutionCardTooltip title={data.title} text={data.description} key={data.title} />
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
        <Img src={data.image} quality={100} alt={data.title} width={208} height={156} />
      </ImageWrapper>
      <CardTitle>{data.title}</CardTitle>
      <DescriptionWrapper>
        <ListTitle>Состав комплекта</ListTitle>
        <CharacteristicsList>
          {data.equipment.map((item, index) => (
            <ListItem key={index}>{item.text}</ListItem>
          ))}
        </CharacteristicsList>
        <Link href={`/sets/${data.id}`}>
          <LinkChild size={16} $weight={400} color={colors.titleBlueColor}>
            Подробнее...
          </LinkChild>
        </Link>
      </DescriptionWrapper>
      <PriceWrapper>
        <PriceAd>Выезд инженера - Бесплатно!</PriceAd>
        <PriceText>{formattedPrice}</PriceText>
      </PriceWrapper>
      <ButtonGroupWrapper>
        <Button onClick={() => modal.openSolution(data)}>Заказать звонок</Button>
        <Link href={calc} passHref legacyBehavior>
          <Button
            $transparent
            onClick={() => {
              calculatorStore.setProducts(data.equipment)
            }}
          >
            В калькулятор
          </Button>
        </Link>
      </ButtonGroupWrapper>
    </Card>
  )
}

export default CardSolution
