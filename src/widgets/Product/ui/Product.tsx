import { FC } from 'react'
import Loader from '@/shared/components/Loader/Loader'
import { ProductProps } from '../types'

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
import Link from 'next/link'
import calculatorStore from '@/app/store/calculatorStore'
import { propToStr } from '@/shared/components/ProductCard/utils'
import { useRouter } from 'next/navigation'

const Product: FC<ProductProps> = ({ data }) => {
  const router = useRouter()

  if (!data) return Loader()

  return (
    <Card>
      <Title>{data.model}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          <ImageWrapper>
            <Img
              src={data.image || '/blurData/blur1.png'}
              alt={data.model}
              width={235}
              height={136}
            />
          </ImageWrapper>
          <PriceColumnWrapper>
            <Title>
              {parseFloat(data.price).toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Title>
            <Text>{data.description}</Text>

            <ButtonsWrapper>
              <Link href={'/#calculator'} passHref legacyBehavior>
                <Button
                  onClick={() => {
                    calculatorStore.setProduct(data)
                    const calc = document.getElementById('calculator')
                    if (calc) calc.scrollIntoView({ behavior: 'smooth' })
                    else router.push('/#calculator')
                  }}
                >
                  В калькулятор
                </Button>
              </Link>
            </ButtonsWrapper>
          </PriceColumnWrapper>
        </ImageColumnWrapper>
        <ColumnWrapper>
          <BlockWrapper>
            <SectionTitle>Харакетристики</SectionTitle>
            <UnorderedList>
              {data.properties.map((prop, index) => {
                if (prop.value || prop.value === false) {
                  return (
                    <li key={index}>
                      <span style={{ fontWeight: 600 }}>{prop.name}: </span>
                      {propToStr(prop.value)}
                    </li>
                  )
                }
              })}
            </UnorderedList>
          </BlockWrapper>
        </ColumnWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default Product
