'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SliderWrapper } from './styled.ts'
import { IArrowProps, TSliderProps } from './types.ts'

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
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          {modalItem && (
            <Image
              key={i}
              src={modalItem.img[i]}
              alt={`Миниатюра фото - ${modalItem.title}`}
              width={100}
              height={100}
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
    <SliderWrapper>
      <Slider {...settings}>
        {modalItem?.img.map((item: any, i: number) => (
          <div key={i} className="image-container">
            <Image src={item} alt={modalItem.title} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default ImgSlider
