'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { useState } from 'react'

import { SliderWrapper } from './styled.ts'
import { IArrowProps, TSliderProps } from './types.ts'

import ImageModal from '../../ImageModal/ui/ImageModal.tsx'
import TImageModalProps from '../../ImageModal/types/types.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'

function SampleNextArrow(props: IArrowProps) {
  const { className = '', style = {}, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

function SamplePrevArrow(props: IArrowProps) {
  const { className = '', style = {}, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  )
}

const ImgSlider: React.FC<TSliderProps> = ({ modalItem }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<TImageModalProps['image']>()

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          {modalItem && (
            <Image
              key={i}
              src={modalItem.images[i].image}
              alt={`Миниатюра фото - ${modalItem.title}`}
              fill
              placeholder="blur"
              blurDataURL={rgbDataURL(225, 231, 244)}
            />
          )}
        </a>
      )
    },
    arrows: true,
    dots: true,
    className: 'slider-container',
    dotsClass: 'slick-dots slick-thumb',
    focusOnSelect: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      {showModal && modalItem && selectedImage && (
        <ImageModal
          image={selectedImage}
          closeModal={() => setShowModal(false)}
          images={modalItem?.images}
        />
      )}
      <SliderWrapper>
        <Slider {...settings}>
          {modalItem?.images.map((item: any, i: number) => (
            <div key={i} className="image-container">
              <Image
                placeholder="blur"
                blurDataURL={rgbDataURL(225, 231, 244)}
                src={item.image}
                alt={modalItem.title}
                width={1100}
                height={600}
                onClick={() => {
                  setShowModal(true)
                  setSelectedImage(item)
                }}
              />
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </>
  )
}

export default ImgSlider
