import { FC } from 'react'
import { Typography } from '@/shared/components/Typography'
import Loader from '@/shared/components/Loader/Loader'

import {
  Card,
  ImageColumnWrapper,
  // ImageWrapper,
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
import { SolutionProps } from '../types'
import { useFormStore } from '@/app/store/formModalStoreProvider'

const Solution: FC<SolutionProps> = ({ data }) => {
  const modal = useFormStore()

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
              {(parseFloat(data.equipment_price) + parseFloat(data.price)).toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Title>
            <Typography size={13}>Выезд инженера - Бесплатно!</Typography>

            <ButtonsWrapper>
              <Button $primary onClick={() => modal.openSolution(data)}>
                Заказать звонок
              </Button>
              <Link href={'/#calculator'} passHref legacyBehavior>
                <Button onClick={() => calculatorStore.setProducts(data.equipment, true)}>
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
                if (item.show)
                  return (
                    <>
                      {item.is_link && item.product ? (
                        <li key={item.text}>
                          <div>
                            <Link
                              href={`/products/${item.product.id}`}
                              style={{ display: 'inline-block' }}
                            >
                              <Text $link>{item.text}</Text>
                            </Link>
                          </div>
                        </li>
                      ) : (
                        <li key={item.text}>
                          <Text>{item.text}</Text>
                        </li>
                      )}
                    </>
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
