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

const ProductCard: FC<TCard> = ({ item }) => {
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

  const newArray = truncateArr(item.moreInfo, screenWidth)

  const formattedPrice = Number(item.price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })

  return (
    <CardWrapper>
      <CardContainer
        onClick={() => {
          router.push(`/product/${item.id}`)
        }}
      >
        <Img src={item.image} alt="GoPro" width={260} height={261} />
        <TextWrapper>
          <ProductPrice>{formattedPrice}</ProductPrice>
          <ProductTitle>{truncateStr(item.title, screenWidth)}</ProductTitle>
          <ProductDescription>{truncateStr(item.description, screenWidth)}</ProductDescription>
          <ProductAbout>
            {newArray.map((list: string, i: number) => (
              <li key={i}>{list}</li>
            ))}
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
            link="/#contact-form"
            size="15px"
            color={colors.darkPrimary}
            btnType="accent"
          />
          <BtnLink
            text="В калькулятор"
            width="174px"
            height="44px"
            link="/#calculator"
            color={colors.darkPrimary}
            size="15px"
            btnType="transparent"
          />
        </ButtonWrapper>
      </CardContainer>
    </CardWrapper>
  )
}

export default React.memo(ProductCard)
