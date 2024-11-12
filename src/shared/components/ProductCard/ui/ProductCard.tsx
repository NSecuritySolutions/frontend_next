import React, { FC, useEffect, useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { BtnLink } from '../../BtnLink'

import { truncateArr, truncateStr, truncateLine, propToStr } from '../utils'

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
import calculatorStore from '@/app/store/calculatorStore'

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
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/products/${item.id}`)
        }}
      >
        <Img src={item.image || '/blurData/blur1.png'} alt={item.model} width={260} height={261} />
        <TextWrapper>
          <ProductPrice>{formattedPrice}</ProductPrice>
          <ProductTitle>{truncateStr(item.model, screenWidth)}</ProductTitle>
          <ProductDescription>{truncateStr(item.description, screenWidth)}</ProductDescription>
          <ProductAbout>
            {item.properties
              .filter((prop) => (prop.value || prop.value === false) && prop.name !== 'Артикул')
              .slice(0, 5)
              .map((prop, index) => (
                <li key={index}>
                  <span style={{ fontWeight: 600 }}>{prop.name}: </span>
                  {propToStr(prop.value)}
                </li>
              ))}
          </ProductAbout>
          <Link href={`/products/${item.id}`}>
            <LinkChild size={16} $weight={400} color={colors.titleBlueColor}>
              Подробнее...
            </LinkChild>
          </Link>
        </TextWrapper>
        <ButtonWrapper>
          {/* <BtnLink
            text="Заказать звонок"
            width="174px"
            height="44px"
            link="#contact-form"
            size="15px"
            color={colors.darkPrimary}
            btnType="accent"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`#contact-form`)
            }}
          /> */}
          <BtnLink
            text="В калькулятор"
            width="174px"
            height="44px"
            link="#calculator"
            color={colors.darkPrimary}
            size="15px"
            btnType="transparent"
            onClick={(e) => {
              e.stopPropagation()
              calculatorStore.setProduct(item)
              const calc = document.getElementById('calculator')
              if (calc) calc.scrollIntoView({ behavior: 'smooth' })
              else router.push('/#calculator')
            }}
          />
        </ButtonWrapper>
      </CardContainer>
    </CardWrapper>
  )
}

export default React.memo(ProductCard)
