import { FC } from 'react'

import Image from 'next/image'
import Slider from 'react-slick'

import NotFound from '@/app/not-found.tsx'

import { ImgSlider } from '@/shared/components/ImgSlider/index.ts'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs/index.ts'

import { TWorkExamples } from '@/shared/constants/texts/types.ts'

import {
  ModalContent,
  TitleWrapper,
  Title,
  DateWrapper,
  Quantity,
  Paragraph,
  ContentWrapper,
  NumbersColumn,
  NumbersRow,
  EquipmentList,
  EquipmentListItem,
  SubTitle,
  TextParagraph,
  TextWrapper,
  ImageColumn,
  InfoColumn,
  SectionWrapper,
  ImageWpapper,
} from './styles.ts'
import { Example as ExampleType } from '@/widgets/ExamplesSlider/types.ts'

interface ExampleProps {
  data: ExampleType
}

const Example: FC<ExampleProps> = ({ data }) => {
  const measures = [
    { data: `${data.time} дн.`, description: 'Рабочих дней', color: '#f7f2e4' },
    { data: `${data.budget} \u20BD`, description: 'Бюджет', color: '#def6f7' },
    { data: `${data.area} м\u00B2`, description: 'Оборудовано', color: '#e1e7f4' },
  ]

  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },

      {
        breakpoint: 620,
        settings: {
          infinite: false,
          rows: 1,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  const createMarkup = (text: string) => ({ __html: text })

  if (!data) return NotFound()

  return (
    <SectionWrapper>
      <Breadcrumbs title={data.title} />
      <ModalContent>
        <ContentWrapper>
          <TitleWrapper>
            <Title>{data.title}</Title>
            <DateWrapper>{new Date(data.add_date).toLocaleDateString('ru-RU')}</DateWrapper>
            <NumbersRow>
              <Slider {...settings}>
                {measures.map((item, i: number) => (
                  <NumbersColumn key={i} $color={item.color}>
                    <ImageColumn>
                      <Image
                        src={`/icons/ourworks/ourworks-${i + 1}.svg`}
                        alt="Иконка"
                        width={35}
                        height={35}
                      />
                    </ImageColumn>
                    <InfoColumn>
                      <Quantity>{item.data}</Quantity>
                      <Paragraph>{item.description}</Paragraph>
                    </InfoColumn>
                  </NumbersColumn>
                ))}
              </Slider>
            </NumbersRow>

            {data.images.length > 0 && (
              <ImageWpapper>
                <ImgSlider modalItem={data} />
              </ImageWpapper>
            )}
            <SubTitle>Используемое оборудование</SubTitle>

            <EquipmentList>
              {data.products.map((item, i: number) => (
                <EquipmentListItem key={i}>{item.text}</EquipmentListItem>
              ))}
            </EquipmentList>

            <TextWrapper>
              <SubTitle>Описание</SubTitle>
              {data.description.map((paragraph, i) => (
                <TextParagraph key={i} dangerouslySetInnerHTML={createMarkup(paragraph)} />
              ))}
            </TextWrapper>
          </TitleWrapper>
        </ContentWrapper>
      </ModalContent>
    </SectionWrapper>
  )
}
export default Example
