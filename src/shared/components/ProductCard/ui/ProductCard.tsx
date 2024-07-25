import React, { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { BtnLink } from '../../BtnLink'

import { truncateArr, truncateStr, truncateLine } from '../utils'

import { ProductCardProps } from '../types'

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
import calculatorStore from '@/widgets/Calculator/store'

const ProductCard: FC<ProductCardProps> = ({ item }) => {
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
          <ProductTitle>{truncateStr(item.model, screenWidth)}</ProductTitle>
          <ProductDescription>{truncateStr(item.description, screenWidth)}</ProductDescription>
          <ProductAbout>
            <li>Тип: {item.type}</li>
            <li>Форм-фактор: {truncateLine(item.form_factor, screenWidth)}</li>
            <li>Производитель: {item.manufacturer.title}</li>
            <li>Размещение: {item.accommodation} </li>
            <li>Разрешение: {truncateLine(item.resolution, screenWidth)}</li>
            <li>Фокус: {item.focus}</li>
            <li>Угол обзора: {item.viewing_angle}</li>
            <li>ИК-съемка в темноте: {truncateLine(item.dark, screenWidth)}</li>
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
            link="/video-surveillance#contact-form"
            size="15px"
            color={colors.darkPrimary}
            btnType="accent"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/video-surveillance#contact-form`)
            }}
          />
          <BtnLink
            text="В калькулятор"
            width="174px"
            height="44px"
            link="/video-surveillance#calculator"
            color={colors.darkPrimary}
            size="15px"
            btnType="transparent"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/video-surveillance#calculator`)
              calculatorStore.setProduct(item)
            }}
          />
        </ButtonWrapper>
      </CardContainer>
    </CardWrapper>
  )
}

export default React.memo(ProductCard)
