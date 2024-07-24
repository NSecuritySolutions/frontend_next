import { FC } from 'react'
import { Typography } from '@/shared/components/Typography'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'
import { ProductButtonGroup } from '@/shared/components/ProductButtonGroup'
import Loader from '@/shared/components/Loader/Loader'

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
} from './styled'

interface ProductProps {
  data: TCardSolutionProps | TItem
}

export type TItem = {
  id: number
  price: number
  title: string
  description: string
  moreInfo: string[]
  image: string
}

const Product: FC<ProductProps> = ({ data }) => {
  if (!data) return Loader()

  const isCardSolution = (data as TCardSolutionProps).toolTipText !== undefined

  return (
    <Card>
      <Title>{isCardSolution ? (data as TCardSolutionProps).title : (data as TItem).title}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          <ImageWrapper>
            <Img
              src={isCardSolution ? (data as TCardSolutionProps).img : (data as TItem).image}
              alt={isCardSolution ? (data as TCardSolutionProps).title : (data as TItem).title}
              width={196}
              height={96}
            />
          </ImageWrapper>
          <PriceColumnWrapper>
            <div>
              <Title>
                {isCardSolution
                  ? (data as TCardSolutionProps).price.toLocaleString('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : (data as TItem).price.toLocaleString('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
              </Title>
              {isCardSolution && <Typography size={13}>Выезд инженера - Бесплатно!</Typography>}
            </div>
            {!isCardSolution && <Text>{(data as TItem).description.slice(0, 20) + '...'}</Text>}

            <ProductButtonGroup link="" />
          </PriceColumnWrapper>
        </ImageColumnWrapper>
        <ColumnWrapper>
          <BlockWrapper>
            {isCardSolution ? (
              <SectionTitle>Комплектация</SectionTitle>
            ) : (
              <SectionTitle>Харакетристики</SectionTitle>
            )}
            <UnorderedList>
              {isCardSolution ? (
                (data as TCardSolutionProps).listItem.map((item) => (
                  <li key={item}>
                    <Text>{item}</Text>
                  </li>
                ))
              ) : (
                <>
                  <li>Тип:{data.type}</li>
                  <li>Форм-фактор:{data.form_factor}</li>
                  <li>Производитель: {data.manufacturer.title}</li>
                  <li>Размещение:{data.accomodation} </li>
                  <li>Разрешение:{data.resolution}</li>
                  <li>Фокус:{data.focus}</li>
                  <li>Угол обзора:{data.viewing_angle}</li>
                  <li>ИК-съемка в темноте: {data.dark}</li>
                  <li>Микрофон/динамик: {data.microphone ? 'да' : 'нет'}</li>
                  <li>Поддержка MicroSD: {data.micro_sd ? 'да' : 'нет'}</li>
                  <li>Питание, вольт: {data.power_supply}</li>
                  <li>Рабочая температура: {data.temperature}</li>
                </>
              )}
            </UnorderedList>
          </BlockWrapper>
          <BlockWrapper>
            {isCardSolution && <SectionTitle>Описание:</SectionTitle>}
            {isCardSolution &&
              (data as TCardSolutionProps).toolTipText.map((item) => (
                <Text key={item}>{item}</Text>
              ))}
          </BlockWrapper>
        </ColumnWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default Product
