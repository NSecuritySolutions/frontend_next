import Image from 'next/image'
import { ReviewsSlider } from '@/shared/components/ReviewsSlider/index.ts'

import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  TextWrapper,
  ColumnWrapper,
  ContactsWrapper,
  ColumnImageWrapper,
  StyledParagraph,
} from './styled.ts'

import yandexLogo from '/public/images/yandex/yandex.webp'
import { YANDEX_URL } from '@/shared/constants/url/url.ts'

const ReviewsBlock = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnTitle>О нас говорят</ColumnTitle>

        <ColumnWrapper>
          <ContactsWrapper>
            <ReviewsSlider />
          </ContactsWrapper>

          <Column>
            <TextWrapper>
              <StyledParagraph>Еще больше отзывов о нас на Яндекс.Услуги</StyledParagraph>
              <a href={YANDEX_URL}>
                <ColumnImageWrapper>
                  <Image
                    src={yandexLogo}
                    alt="Логотип и переход на страницу отзывов магазина в Яндекс Маркет"
                    fill
                  />
                </ColumnImageWrapper>
              </a>
            </TextWrapper>
          </Column>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default ReviewsBlock
