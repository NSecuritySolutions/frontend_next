import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  ImageWrapper,
  TextWrapper,
  ColumnWrapper,
  ContactsWrapper,
  ColumnImage,
  CardImg,
} from "./styled";

import { projectReviews } from "../../../shared/constants/texts/reviews";
import { YANDEX_URL } from "../../../shared/constants/url/url";

const ReviewsBlock = () => {
  // const imageArray = projectReviews.filter((obj) =>
  //   Object.keys(obj).some((el) => el === "img")
  // );
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>О нас говорят</ColumnTitle>
              <ImageWrapper>
                {/* {imageArray.slice(0, 3).map((item) => (
                  <CardImg key={item.id} src={item?.img} />
                ))} */}
              </ImageWrapper>
              <a href={YANDEX_URL}>
                {/* <ColumnImage
                  src={yandexLogo}
                  alt="Логотип и переход на страницу отзывов магазина в Яндекс Маркет"
                /> */}
              </a>
            </TextWrapper>
          </Column>
          <ContactsWrapper>{/* <ReviewsSlider /> */}</ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default ReviewsBlock;
