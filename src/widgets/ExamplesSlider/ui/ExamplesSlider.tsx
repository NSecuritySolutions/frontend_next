'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import Slider from 'react-slick'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'

import { TWorkExamples } from '@/shared/constants/texts/types.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
import colors from '@/shared/constants/colors'

import blankImg from '@/assets/icons/examples/no-image.svg'

import { TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

import {
  SliderContainer,
  CardWrapper,
  CustomDot,
  ColumnTitle,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  IconWrapper,
  ExamplesLink,
  SecondButtonWrapper,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
  SectionWrapper,
} from './styled.ts'
import { Example } from '../types.ts'

const ExamplesSlider: React.FC<{ data: Example[] }> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const router = useRouter()

  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const settings = {
    className: 'examples-slider',
    infinite: false,
    arrows: false,
    speed: 300,
    appendDots: (dots: boolean) => <ul>{dots}</ul>,

    responsive: [
      {
        breakpoint: 999999999,
        settings: {
          infinite: false,
          dots: true,
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          dots: false,
          infinity: false,
          focusOnSelect: true,
          arrows: false,
        },
      },
    ],
    customPaging: function (i: number) {
      let activePage = 0
      if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
        activePage = Math.ceil(currentSlide / 2)
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
    <section id="examples">
      <ColumnTitle>Примеры наших работ</ColumnTitle>

      <SectionWrapper>
        <SliderContainer className="slider-container" id="examples">
          <Slider {...settings} afterChange={handleAfterChange}>
            {data
              .sort(
                (newDate, olderDate) =>
                  new Date(olderDate.add_date as string).getTime() -
                  new Date(newDate.add_date as string).getTime(),
              )
              .map((item, i) => (
                <CardWrapper
                  key={item.id}
                  // onClick={() => {
                  //   router.push(`/ourworks/${item.id}`)
                  // }}
                >
                  {item.images.length && item.images.find((image) => image.is_main) ? (
                    <ExamplesLink href={`/ourworks/${item.id}`}>
                      <ExamplesImgWrapper>
                        <Image
                          blurDataURL={rgbDataURL(225, 231, 244)}
                          src={item.images.find((image) => image.is_main)!.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 620px) 240px, (max-width: 880px) 390px, (max-width: 1180px) 390px, 200px"
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
                  <ExamplesContainer key={i}>
                    <ExamplesTitle>{truncate(item.title, TITLE_LIMIT)}</ExamplesTitle>

                    <InfoIconWrapper>
                      {/* {item.description.map((item, i) => (
                        <InfoIcon key={i}>
                          {`${new Intl.NumberFormat('ru-RU').format(item.number)} ${item.measure}`}
                        </InfoIcon>
                      ))} */}
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
                        {item.add_date
                          ? new Date(item.add_date).toLocaleDateString('ru-RU')
                          : '----'}
                      </IconWrapper>
                    </ButtonWrapper>
                  </ExamplesContainer>
                </CardWrapper>
              ))}
          </Slider>
        </SliderContainer>
      </SectionWrapper>
      <SecondButtonWrapper>
        <BtnLink
          size="15px"
          width="277px"
          height="44px"
          color={colors.darkPrimary}
          text="Смотреть все примеры работ"
          link="/ourworks"
        />
      </SecondButtonWrapper>
    </section>
  )
}

export default ExamplesSlider
