import React, { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { BtnLink } from '../../BtnLink'

import { truncateArr, truncateStr } from '../utils'

import { TCard } from '../types'

import colors from '@/shared/constants/colors'
import {
  CardContainer,
  ProductPrice,
  ProductTitle,
  ProductDescription,
  ProductAbout,
  Img,
  CardWrapper,
  LinkChild,
  ButtonWrapper,
  TextWrapper,
} from './styled'
import { ICamera } from '@/widgets/Calculator/types'

const ProductCard: FC<ICamera> = ({ item }) => {
  const router = useRouter()

  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
      window.addEventListener('resize', updateScreenWidth)

      return () => {
        window.removeEventListener('resize', updateScreenWidth)
      }
    }
  }, [])

  // const newArray = truncateArr(item.moreInfo, screenWidth)

  const formattedPrice = Number(item.price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })
  console.log(item)
  return (
    <CardWrapper>
      <CardContainer
        onClick={() => {
          router.push(`/cameras/${item.id}`)
        }}
      >
        <Img src={item.image} alt={item.model} width={260} height={261} />
        <TextWrapper>
          <ProductPrice>{formattedPrice}</ProductPrice>
          <ProductTitle>
            {truncateStr(item.model ? item.model : item.title, screenWidth)}
          </ProductTitle>
          <ProductDescription>{truncateStr(item.description, screenWidth)}</ProductDescription>
          <ProductAbout>
            {/* {newArray.map((list: string, i: number) => (
              <li key={i}>{list}</li>
            ))} */}
            <li>Тип:{item.type}</li>
            <li>Форм-фактор:{item.form_factor}</li>
            <li>Производитель: {item.manufacturer.title}</li>
            <li>Размещение:{item.accomodation} </li>
            <li>Разрешение:{item.resolution}</li>
            <li>Фокус:{item.focus}</li>
            <li>Угол обзора:{item.viewing_angle}</li>
            <li>ИК-съемка в темноте: {item.dark}</li>
            {/* <li>Микрофон/динамик: {item.microphone_details}</li>
            <li>Поддержка MicroSD: {item.micro_sd_details}</li>
            <li>Питание, вольт: {item.power_supply}</li>
            <li>Рабочая температура: {item.temperature}</li> */}
          </ProductAbout>
          <Link href={`/products/${item.id}`}>
            <LinkChild size={16} $weight={400} color={colors.titleBlueColor}>
              Подробнее...
            </LinkChild>
          </Link>
        </TextWrapper>
        <ButtonWrapper>
          <BtnLink
            text="Заказать звонок"
            width="174px"
            height="44px"
            // link="/#contact-form"
            size="15px"
            color={colors.darkPrimary}
            btnType="accent"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/#contact-form`)
            }}
          />
          <BtnLink
            text="В калькулятор"
            width="174px"
            height="44px"
            // link="/#calculator"
            color={colors.darkPrimary}
            size="15px"
            btnType="transparent"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/#calculator-start`)
            }}
          />
        </ButtonWrapper>
      </CardContainer>
    </CardWrapper>
  )
}

export default React.memo(ProductCard)
