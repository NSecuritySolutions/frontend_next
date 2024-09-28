import { FC } from 'react'
import { Typography } from '@/shared/components/Typography'
import Loader from '@/shared/components/Loader/Loader'
// import { ProductProps } from '../types'
import { ICamera } from '@/widgets/Calculator/types'
import { v4 as uuidv4 } from 'uuid'

import {
  Card,
  ImageColumnWrapper,
  ImageWrapper,
  PriceColumnWrapper,
  ColumnWrapper,
  ContentWrapper,
  UnorderedList,
  BlockWrapper,
  Img,
  Title,
  SectionTitle,
  Text,
  ButtonsWrapper,
  Button,
} from './styled'
import { TCardSolutionProps } from '@/shared/constants/texts/cards-solution'
import Link from 'next/link'
import calculatorStore from '@/app/store/calculatorStore'
import { SolutionProps } from '../types'

const Solution: FC<SolutionProps> = ({ data }) => {
  if (!data) return Loader()

  return (
    <Card>
      <Title>{data.title}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          {/* <ImageWrapper> */}
          <Img src={data.image} alt={data.title} width={235} height={136} />
          {/* </ImageWrapper> */}
          <PriceColumnWrapper>
            <Title>
              {data.price!.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Title>
            <Typography size={13}>Выезд инженера - Бесплатно!</Typography>

            <ButtonsWrapper>
              <Link href={'/#contact-form'} passHref legacyBehavior>
                <Button $primary>Заказать звонок</Button>
              </Link>
              <Link href={'/#calculator'} passHref legacyBehavior>
                <Button onClick={() => calculatorStore.setProducts(data.equipment)}>
                  В калькулятор
                </Button>
              </Link>
            </ButtonsWrapper>
          </PriceColumnWrapper>
        </ImageColumnWrapper>
        <ColumnWrapper>
          <BlockWrapper>
            <SectionTitle>Комплектация</SectionTitle>
            <UnorderedList>
              {data.equipment.map((item) => {
                if (item.is_link) {
                  return (
                    <li key={item.text}>
                      <Link href={`/products/${item.product.id}`}>
                        <Text $link>{item.text}</Text>
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={item.text}>
                    <Text>{item.text}</Text>
                  </li>
                )
              })}
            </UnorderedList>
          </BlockWrapper>
          <BlockWrapper>
            <SectionTitle>Описание:</SectionTitle>
            {data.description.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </BlockWrapper>
        </ColumnWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default Solution
