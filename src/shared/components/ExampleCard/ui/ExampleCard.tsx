'use client'
import { useState, useEffect } from 'react'

import blankImg from '@/assets/icons/examples/no-image.svg'

import Image from 'next/image'

import { BtnLink } from '../../BtnLink/index.ts'
import { StyledTransparentBtnLink } from '../../BtnLink/ui/styled.ts'

import { OurWorksBanner } from '../../OurWorksBanner/index.ts'

import { TWorkExamples } from '@/shared/constants/texts/types.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
import { TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

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

const ExampleCard: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(4)

  const totalCards = workExamples.length

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

  const bannerItem = workExamples.sort(
    (newDate: TWorkExamples, olderDate: TWorkExamples) =>
      new Date(olderDate.date as string).getTime() - new Date(newDate.date as string).getTime(),
  )[0]

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
        {workExamples
          .sort(
            (newDate: TWorkExamples, olderDate: TWorkExamples) =>
              new Date(olderDate.date as string).getTime() -
              new Date(newDate.date as string).getTime(),
          )
          .slice(0, visibleCards)
          .map((item: TWorkExamples, i) => (
            <CardWrapper key={item.id}>
              {item.cardImage ? (
                <ExamplesLink href={`/ourworks/${item.id}`}>
                  <ExamplesImgWrapper>
                    <Image
                      blurDataURL={rgbDataURL(225, 231, 244)}
                      src={item?.cardImage}
                      alt={item.cardTitle}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </ExamplesImgWrapper>
                </ExamplesLink>
              ) : (
                <ExamplesImgWrapper>
                  <Image
                    src={(item.cardImage = blankImg)}
                    fill
                    alt={'Пустая картинка'}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(225, 231, 244)}
                  ></Image>
                </ExamplesImgWrapper>
              )}
              <ExamplesContainer className="slick-slide" key={i}>
                <ExamplesTitle>{truncate(item.cardTitle, TITLE_LIMIT)}</ExamplesTitle>

                <InfoIconWrapper>
                  {item.quantities.map((item, i) => (
                    <InfoIcon key={i}>
                      {`${new Intl.NumberFormat('ru-RU').format(item.number)}`}
                      {item.measure}
                    </InfoIcon>
                  ))}
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

                  <IconWrapper>{item.date ? item.date : '----'}</IconWrapper>
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
