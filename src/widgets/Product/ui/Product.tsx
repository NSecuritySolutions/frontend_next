import { FC } from 'react'
import { Typography } from '@/shared/components/Typography'
import Loader from '@/shared/components/Loader/Loader'
import { ProductProps } from '../types'
import { ICamera } from '@/widgets/Calculator/types'

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

const Product: FC<ProductProps> = ({ data }) => {
  if (!data) return Loader()

  return (
    <Card>
      <Title>{data.model}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          <ImageWrapper>
            <Img src={data.image} alt={data.model} width={235} height={136} />
          </ImageWrapper>
          <PriceColumnWrapper>
            <Title>
              {data.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Title>
            <Text>{data.description}</Text>

            <ButtonsWrapper>
              <Link href={'/#calculator'} passHref legacyBehavior>
                <Button onClick={() => calculatorStore.setProduct(data)}>В калькулятор</Button>
              </Link>
            </ButtonsWrapper>
          </PriceColumnWrapper>
        </ImageColumnWrapper>
        <ColumnWrapper>
          <BlockWrapper>
            <SectionTitle>Харакетристики</SectionTitle>
            <UnorderedList>
              <>
                {'viewing_angle' in data && (
                  <>
                    <li>Тип: {data.type}</li>
                    <li>Форм-фактор: {data.form_factor}</li>
                    <li>Производитель: {data.manufacturer.title}</li>
                    <li>Размещение: {data.accommodation}</li>
                    <li>Разрешение: {data.resolution}</li>
                    <li>Фокус: {data.focus}</li>
                    <li>Угол обзора: {data.viewing_angle}</li>
                    <li>ИК-съемка в темноте: {data.dark ? `да, ${data.dark}` : 'нет'}</li>
                    <li>
                      Микрофон/динамик: {data.microphone ? `да, ${data.microphone_details}` : 'нет'}
                    </li>
                    <li>
                      Поддержка MicroSD: {data.micro_sd ? `да, ${data.micro_sd_details}` : 'нет'}
                    </li>
                    <li>Питание, вольт: {data.power_supply}</li>
                    <li>Рабочая температура: {data.temperature}</li>
                  </>
                )}
              </>
            </UnorderedList>
          </BlockWrapper>
        </ColumnWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default Product
