'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderWrapper } from '../ui/styled.ts';
import { IArrowProps, TSliderProps } from './types.ts';

function SampleNextArrow(props: IArrowProps) {
  const { className = '', style = {}, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: IArrowProps) {
  const { className = '', style = {}, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

const ImgSlider: React.FC<TSliderProps> = ({ modalItem }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img key={i} src={modalItem?.img[i]} />
        </a>
      );
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
    prevArrow: <SamplePrevArrow />
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {modalItem?.img.map((item: any, i: number) => (
          <div key={i} className="image-container">
            <img src={item} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImgSlider;
