'use client'
import { useState, useEffect } from 'react'

import blankImg from '@/assets/icons/examples/no-image.svg'

import Image from 'next/image'

import Slider from 'react-slick'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'
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
  SStyledBtnLink,
} from './styled.ts'

const ExampleCard: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(4)
  const [isMobileView, setIsMobileView] = useState(false)

  const totalCards = workExamples.length

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 940)
    }

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

  // console.log(bannerItem, 'item')
  const settings = {
    className: 'reviews-slider',
    dots: false,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,

    appendDots: (dots: boolean) => <ul>{dots}</ul>,

    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick', arrows: false },

      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  }

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
      <SliderContainer className="slider-container" id="examples">
        <Slider {...settings} className="slider-example-card">
          {workExamples
            .sort(
              (newDate: TWorkExamples, olderDate: TWorkExamples) =>
                new Date(olderDate.date as string).getTime() -
                new Date(newDate.date as string).getTime(),
            )
            .slice(0, isMobileView ? totalCards : visibleCards)
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
                        {item.number}
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
        </Slider>

        {!isMobileView && visibleCards < totalCards && (
          <SStyledBtnLink
            size="15px"
            width="277px"
            height="44px"
            color={colors.darkPrimary}
            onClick={showMoreCards}
          >
            Смотреть все примеры работ
          </SStyledBtnLink>
        )}
      </SliderContainer>
    </>
  )
}

export default ExampleCard
