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

  const isCardSolution = (data as TCardSolutionProps).toolTipText !== undefined

  return (
    <Card>
      <Title>{isCardSolution ? (data as TCardSolutionProps).title : (data as ICamera).model}</Title>
      <ContentWrapper>
        <ImageColumnWrapper>
          <ImageWrapper>
            <Img
              src={isCardSolution ? (data as TCardSolutionProps).img : (data as ICamera).image}
              alt={isCardSolution ? (data as TCardSolutionProps).title : (data as ICamera).model}
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
                  : (data as ICamera).price.toLocaleString('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
              </Title>
              {isCardSolution && <Typography size={13}>Выезд инженера - Бесплатно!</Typography>}
            </div>
            {!isCardSolution && <Text>{(data as ICamera).description.slice(0, 20) + '...'}</Text>}

            <ButtonsWrapper>
              <Link href={'/#contact-form'} passHref legacyBehavior>
                <Button $primary>Заказать звонок</Button>
              </Link>
              <Link href={'/#calculator'} passHref legacyBehavior>
                <Button
                // onClick={() =>
                // calculatorStore.setProduct(data)
                // }
                >
                  В калькулятор
                </Button>
              </Link>
            </ButtonsWrapper>
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
                        Микрофон/динамик:{' '}
                        {data.microphone ? `да, ${data.microphone_details}` : 'нет'}
                      </li>
                      <li>
                        Поддержка MicroSD: {data.micro_sd ? `да, ${data.micro_sd_details}` : 'нет'}
                      </li>
                      <li>Питание, вольт: {data.power_supply}</li>
                      <li>Рабочая температура: {data.temperature}</li>
                    </>
                  )}
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
