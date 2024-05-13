import { useState } from "react";
import colors from "../../../shared/constants/colors";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blankImg from "src/assets/icons/examples/ic-no-img.png";

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
} from "./styled";
import { workExamples } from "../../../shared/constants/texts/examples";
import {
  TEXT_LIMIT,
  TITLE_LIMIT,
} from "../../../shared/constants/texts/services";
import { TWorkExamples } from "../../../shared/constants/texts/types";

const ExamplesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<TWorkExamples | undefined>();

  const openModal = (item: TWorkExamples) => {
    setIsOpen(true);
    setModalItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const settings = {
    className: "reviews-slider",
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
      let activePage = 0;
      if (window.innerWidth >= 1280) {
        activePage = Math.ceil(currentSlide / 2);
      }

      return <CustomDot $active={i === activePage} />;
    },
  };

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + "...";
    } else {
      return str;
    }
  }

  return (
    <>
      <SliderContainer className="slider-container">
        <ColumnTitle>Примеры наших работ</ColumnTitle>
        <Slider {...settings} afterChange={handleAfterChange}>
          {workExamples
            .sort(
              (newDate: TWorkExamples, olderDate: TWorkExamples) =>
                new Date(olderDate.date as string).getTime() -
                new Date(newDate.date as string).getTime()
            )
            .map((item: TWorkExamples, i) => (
              <CardWrapper key={item.id}>
                {item.cardImage ? (
                  <ExamplesLink onClick={() => openModal(item)}>
                    <ExamplesImg
                      src={item?.img[0]}
                      // src={item?.cardImage}
                      alt={item.cardTitle}
                    ></ExamplesImg>
                  </ExamplesLink>
                ) : (
                  // <ExamplesImg src={(item.cardImage = blankImg)}></ExamplesImg>
                )}
                <ExamplesContainer className="slick-slide" key={i}>
                  <ExamplesTitle>
                    {truncate(item.cardTitle, TITLE_LIMIT)}
                  </ExamplesTitle>

                  <ExamplesText>
                    {truncate(item.cardText, TEXT_LIMIT)}
                  </ExamplesText>

                  <ButtonWrapper>
                    <BtnLink
                      btnType="transparent"
                      text={"Подробнее"}
                      width="134px"
                      height="44px"
                      color={colors.darkPrimary}
                      size="15px"
                      onClick={() => openModal(item)}
                    ></BtnLink>

                    <IconWrapper>
                      {/* {item.cardIcons?.map((item, i) => (
                        <img
                          key={i}
                          src={item.link}
                          alt={item.alt}
                          aria-label={item.alt}
                          title={item.alt}
                        ></img>
                      ))} */}
                    </IconWrapper>
                  </ButtonWrapper>
                </ExamplesContainer>
              </CardWrapper>
            ))}
        </Slider>
        <SecondButtonWrapper>
          <BtnLink
            size="15px"
            width="100%"
            height="44px"
            color={colors.darkPrimary}
            text="Смотреть все примеры работ"
            link="#"
          />
        </SecondButtonWrapper>
      </SliderContainer>
      {/* {isOpen ? (
        <Modal modalItem={modalItem} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        ""
      )} */}
    </>
  );
};

export default ExamplesSlider;
