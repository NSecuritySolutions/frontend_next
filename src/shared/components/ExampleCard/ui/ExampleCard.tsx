'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'

import { TWorkExamples } from '@/shared/constants/texts/types.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
import colors from '@/shared/constants/colors'

import { TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

import {
  SliderContainer,
  CardWrapper,
  ColumnTitle,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  IconWrapper,
  ExamplesLink,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
} from './styled.ts'
import Modal from '@/shared/components/Modal/ui/Modal'
import { OurWorksBanner } from '../../OurWorksBanner/index.ts'

const ExampleCard: React.FC = () => {
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

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...'
    } else {
      return str
    }
  }

  const bannerItem = workExamples.sort(
    (newDate: TWorkExamples, olderDate: TWorkExamples) =>
      new Date(olderDate.date as string).getTime() - new Date(newDate.date as string).getTime(),
  )[0]

  console.log(bannerItem, 'item')

  return (
    <>
      <OurWorksBanner item={bannerItem} />

      <SliderContainer className="slider-container" id="examples">
        {workExamples
          .sort(
            (newDate: TWorkExamples, olderDate: TWorkExamples) =>
              new Date(olderDate.date as string).getTime() -
              new Date(newDate.date as string).getTime(),
          )
          .map((item: TWorkExamples, i) => (
            <CardWrapper key={item.id}>
              {item.cardImage ? (
                <ExamplesLink href={`/examples/${item.id}`}>
                  <ExamplesImgWrapper>
                    <Image
                      blurDataURL={rgbDataURL(225, 231, 244)}
                      src={item?.cardImage}
                      alt={item.cardTitle}
                      width={200}
                      height={200}
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </ExamplesImgWrapper>
                </ExamplesLink>
              ) : (
                <ExamplesImgWrapper>
                  <Image
                    src={(item.cardImage = blankImg)}
                    width={200}
                    height={200}
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
                    link={`/examples/${item.id}`}
                  ></BtnLink>

                  <IconWrapper>{item.date ? item.date : '----'}</IconWrapper>
                </ButtonWrapper>
              </ExamplesContainer>
            </CardWrapper>
          ))}
      </SliderContainer>

      {isOpen ? <Modal modalItem={modalItem} isOpen={isOpen} closeModal={closeModal} /> : ''}
    </>
  )
}

export default ExampleCard
