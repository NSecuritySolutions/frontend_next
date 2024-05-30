import { FC } from 'react'
import { Typography } from '@/shared/components/Typography'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'
import { ProductButtonGroup } from '@/shared/components/ProductButtonGroup'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
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
  data: TCardSolutionProps
}

const Product: FC<ProductProps> = ({ data }) => {
  if (!data) return Loader()

  return (
    <Card>
      <Title>{data.title}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          <ImageWrapper>
            <Img src={data.img} alt={data.title} />
          </ImageWrapper>
          <PriceColumnWrapper>
            <div>
              <Title>
                {data.price.toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Title>
              <Typography size={13}>Выезд инженера - Бесплатно!</Typography>
            </div>
            <ProductButtonGroup link="" />
          </PriceColumnWrapper>
        </ImageColumnWrapper>
        <ColumnWrapper>
          <BlockWrapper>
            <SectionTitle>Комплектация</SectionTitle>
            <UnorderedList>
              {data.listItem.map((item) => (
                <li key={item}>
                  <Text>{item}</Text>
                </li>
              ))}
            </UnorderedList>
          </BlockWrapper>
          <BlockWrapper>
            <SectionTitle>Описание:</SectionTitle>
            {data.toolTipText.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </BlockWrapper>
        </ColumnWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default Product
