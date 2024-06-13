import Image from 'next/image'
import { ReviewsSlider } from '@/shared/components/ReviewsSlider/index.ts'
import Link from 'next/link'
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

import { YANDEX_URL } from '@/shared/constants/url/url.ts'

const ReviewsBlock = () => {
  return (
    <Section id="reviews">
      <SectionWrapper>
        <ColumnTitle>О нас говорят</ColumnTitle>

        <ColumnWrapper>
          <ContactsWrapper>
            <ReviewsSlider />
          </ContactsWrapper>

          <Column>
            <TextWrapper>
              <StyledParagraph> Еще больше отзывов о нас на Яндекс.Услуги</StyledParagraph>
              <Link href={YANDEX_URL}>
                <ColumnImageWrapper>
                  <Image
                    src="/images/yandex/yandex-link.png"
                    alt="Логотип и переход на страницу отзывов магазина в Яндекс Маркет"
                    width={280}
                    height={74}
                  />
                </ColumnImageWrapper>
              </Link>
            </TextWrapper>
          </Column>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default ReviewsBlock
