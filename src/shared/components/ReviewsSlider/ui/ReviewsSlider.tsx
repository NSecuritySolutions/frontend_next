'use client'
import { useState } from 'react'
import Image from 'next/image'

import Slider from 'react-slick'

import { rgbDataURL } from '@/shared/constants/utils/utils.ts'

import { TEXT_LIMIT, TITLE_LIMIT, projectReviews } from '@/shared/constants/texts/reviews.ts'

import {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot,
  ReviewsLink,
  TitleWrapper,
  IconWrapper,
  CustomNextArrow,
  CustomPrevArrow,
} from './styled.ts'

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const settings = {
    className: 'reviews-slider',
    dots: true,
    arrows: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    appendDots: (dots: boolean) => <ul>{dots}</ul>,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
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

    customPaging: function (i: number) {
      let activePage = 0
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1300) {
          activePage = Math.ceil(currentSlide / 3)
        } else if (window.innerWidth >= 619) {
          activePage = Math.ceil(currentSlide / 2)
        } else {
          activePage = currentSlide
        }
      }
      return <CustomDot $active={i === activePage} />
    },
  }

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...'
    } else {
      return str
    }
  }

  return (
    <SliderContainer className="slider-container">
      <Slider {...settings} afterChange={handleAfterChange}>
        {projectReviews.map((item, i) => (
          <ReviewsContainer className="slick-slide" key={i}>
            <TitleWrapper>
              <IconWrapper>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(225, 231, 244)}
                />
              </IconWrapper>
              <ReviewsTitle>{truncate(item.name, TITLE_LIMIT)} </ReviewsTitle>
            </TitleWrapper>
            <ReviewsParagraph>{truncate(item.product, TITLE_LIMIT)}</ReviewsParagraph>
            <ReviewsText>
              {truncate(item.review, TEXT_LIMIT)}
              {item.review.length >= TEXT_LIMIT && (
                <p>
                  <ReviewsLink href={item.link}>Читать далее</ReviewsLink>
                </p>
              )}
            </ReviewsText>
          </ReviewsContainer>
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default ReviewsSlider
