import { FC } from 'react'
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
  const router = useRouter()

  const formattedPrice = Number(data.price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })

  return (
    <Card>
      <SolutionCardTooltip title={data.title} text={data.tooltip_text} key={data.title} />
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
        {/* <Link href={calc} shallow passHref scroll={false}> */}
        <Button
          $transparent
          onClick={() => {
            calculatorStore.setProducts(data.equipment)
            const calc = document.getElementById('calculator')
            if (calc) calc.scrollIntoView({ behavior: 'smooth' })
            else router.push('/#calculator')
          }}
        >
          В калькулятор
        </Button>
        {/* </Link> */}
      </ButtonGroupWrapper>
    </Card>
  )
}

export default CardSolution
