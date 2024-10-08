'use client'
import { useState, useEffect, FC } from 'react'

import blankImg from '@/assets/icons/examples/no-image.svg'

import Image from 'next/image'

import { BtnLink } from '../../BtnLink/index.ts'
import { StyledTransparentBtnLink } from '../../BtnLink/ui/styled.ts'

import { OurWorksBanner } from '../../OurWorksBanner/index.ts'

import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
import { TITLE_LIMIT } from '@/shared/constants/texts/examples.ts'

import colors from '@/shared/constants/colors'

import {
  SliderContainer,
  CardWrapper,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  IconWrapper,
  ExamplesLink,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
  StyledTitle,
} from './styled.ts'
import { Example } from '@/widgets/ExamplesSlider/types.ts'

const ExampleCard: FC<{ data: Example[] }> = ({ data }) => {
  const [visibleCards, setVisibleCards] = useState(4)

  const totalCards = data.length

  const sortedData = data.sort(
    (newDate, olderDate) =>
      new Date(olderDate.add_date as string).getTime() -
      new Date(newDate.add_date as string).getTime(),
  )

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4)
  }

  useEffect(() => {
    const handleResize = () => {}

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const bannerItem = sortedData[0]

  // @TODO: дописать обрезку заголовков в зависимости от ширины
  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...'
    } else {
      return str
    }
  }

  return (
    <>
      <OurWorksBanner item={bannerItem} />
      <StyledTitle>Примеры работ</StyledTitle>
      <SliderContainer id="examples">
        {sortedData.slice(0, visibleCards).map((item, i) => (
          <CardWrapper key={item.id}>
            {item.images.length ? (
              <ExamplesLink href={`/ourworks/${item.id}`}>
                <ExamplesImgWrapper>
                  <Image
                    blurDataURL={rgbDataURL(225, 231, 244)}
                    src={item.images.find((image) => image.is_main)!.image}
                    alt={item.title}
                    fill
                  />
                </ExamplesImgWrapper>
              </ExamplesLink>
            ) : (
              <ExamplesImgWrapper>
                <Image
                  src={blankImg}
                  fill
                  alt={'Пустая картинка'}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(225, 231, 244)}
                ></Image>
              </ExamplesImgWrapper>
            )}
            <ExamplesContainer className="slick-slide" key={i}>
              <ExamplesTitle>{truncate(item.title, TITLE_LIMIT)}</ExamplesTitle>

              <InfoIconWrapper>
                <InfoIcon>{item.time} дн.</InfoIcon>
                <InfoIcon>
                  {item.budget.toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    maximumFractionDigits: 0,
                  })}
                </InfoIcon>
                <InfoIcon>{item.area + ' м\u00B2'}</InfoIcon>
              </InfoIconWrapper>

              <ButtonWrapper>
                <BtnLink
                  btnType="transparent"
                  text={'Подробнее'}
                  width="134px"
                  height="44px"
                  color={colors.darkPrimary}
                  size="15px"
                  link={`/ourworks/${item.id}`}
                ></BtnLink>

                <IconWrapper>
                  {item.add_date ? new Date(item.add_date).toLocaleDateString('ru-RU') : '----'}
                </IconWrapper>
              </ButtonWrapper>
            </ExamplesContainer>
          </CardWrapper>
        ))}

        {visibleCards < totalCards && (
          <StyledTransparentBtnLink
            size="15px"
            width="176px"
            height="56px"
            color={colors.darkPrimary}
            onClick={showMoreCards}
          >
            Показать еще
          </StyledTransparentBtnLink>
        )}
      </SliderContainer>
    </>
  )
}

export default ExampleCard
