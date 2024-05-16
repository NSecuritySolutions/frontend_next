'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import colors from '@/shared/constants/colors'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'
import { TWorkExamples } from '@/shared/constants/texts/types.ts'

import blankImg from '@/assets/icons/examples/no-image.svg'

import { ChangeFormateDate } from '@/shared/constants/utils/utils.ts'

import { TEXT_LIMIT, TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

import {
  SliderContainer,
  CardWrapper,
  CustomDot,
  ColumnTitle,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  ExamplesText,
  ExamplesImg,
  IconWrapper,
  ExamplesLink,
  SecondButtonWrapper,
} from './styled.ts'
import Modal from '@/shared/components/Modal/ui/Modal'

const ExamplesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalItem, setModalItem] = useState<TWorkExamples | undefined>()

  const router = useRouter()

  const openModal = (item: TWorkExamples) => {
    setIsOpen(true)
    setModalItem(item)
  }

  const closeModal = () => {
    setIsOpen(false)
    router.push('/#examples')
  }

  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const settings = {
    className: 'reviews-slider',
    dots: true,
    infinite: false,
    speed: 200,
    arrows: false,
    rows: 2,
    slidesPerRow: 2,

    appendDots: (dots: boolean) => <div>{dots}</div>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rows: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 619,
        settings: {
          rows: 1,
          slidesPerRow: 1,
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

  const newDate = modalItem?.date ? ChangeFormateDate(modalItem.date.toString()) : ''

  return (
    <>
      <SliderContainer className="slider-container" id="examples">
        <ColumnTitle>Примеры наших работ</ColumnTitle>
        <Slider {...settings} afterChange={handleAfterChange}>
          {workExamples
            .sort(
              (newDate: TWorkExamples, olderDate: TWorkExamples) =>
                new Date(olderDate.date as string).getTime() -
                new Date(newDate.date as string).getTime(),
            )
            .map((item: TWorkExamples, i) => (
              <CardWrapper key={item.id}>
                {item.cardImage ? (
                  <ExamplesLink onClick={() => openModal(item)}>
                    <ExamplesImg>
                      <Image
                        src={item?.cardImage}
                        alt={item.cardTitle}
                        width={200}
                        height={200}
                        style={{ objectFit: 'cover', borderRadius: '12px' }}
                      />
                    </ExamplesImg>
                  </ExamplesLink>
                ) : (
                  <ExamplesImg>
                    <Image
                      src={(item.cardImage = blankImg)}
                      width={200}
                      height={200}
                      alt={'Пустая картинка'}
                    ></Image>
                  </ExamplesImg>
                )}
                <ExamplesContainer className="slick-slide" key={i}>
                  <ExamplesTitle>{truncate(item.cardTitle, TITLE_LIMIT)}</ExamplesTitle>

                  <ExamplesText>{truncate(item.cardText, TEXT_LIMIT)}</ExamplesText>

                  <ButtonWrapper>
                    <BtnLink
                      btnType="transparent"
                      text={'Подробнее'}
                      width="134px"
                      height="44px"
                      color={colors.darkPrimary}
                      size="15px"
                      onClick={() => openModal(item)}
                    ></BtnLink>

                    <IconWrapper>{newDate}</IconWrapper>
                  </ButtonWrapper>
                </ExamplesContainer>
              </CardWrapper>
            ))}
        </Slider>
        <SecondButtonWrapper>
          <BtnLink
            size="15px"
            width="277px"
            height="44px"
            color={colors.darkPrimary}
            text="Смотреть все примеры работ"
            link="#"
          />
        </SecondButtonWrapper>
      </SliderContainer>
      {isOpen ? <Modal modalItem={modalItem} isOpen={isOpen} closeModal={closeModal} /> : ''}
    </>
  )
}

export default ExamplesSlider
