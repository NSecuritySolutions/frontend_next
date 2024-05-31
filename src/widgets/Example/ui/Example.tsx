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
  Date,
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

interface ExampleProps {
  data: TWorkExamples
}

const Example: FC<ExampleProps> = ({ data }) => {
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
      <Breadcrumbs title={data.cardTitle} />
      <ModalContent>
        <ContentWrapper>
          <TitleWrapper>
            <Title>{data?.title}</Title>
            <Date>{data?.date}</Date>
            <NumbersRow>
              <Slider {...settings}>
                {data?.quantities.map((item, i: number) => (
                  <NumbersColumn key={i} $color={item.color}>
                    <ImageColumn>
                      <Image
                        key={i}
                        src={`/icons/ourworks/ourworks-${i + 1}.svg`}
                        alt="Иконка"
                        width={35}
                        height={35}
                      />
                    </ImageColumn>
                    <InfoColumn>
                      <Quantity>
                        {`${new Intl.NumberFormat('ru-RU').format(item.number)}
                        ${item.measure}`}
                      </Quantity>
                      <Paragraph>{item.description}</Paragraph>
                    </InfoColumn>
                  </NumbersColumn>
                ))}
              </Slider>
            </NumbersRow>

            <ImageWpapper>
              <ImgSlider modalItem={data} />
            </ImageWpapper>
            <SubTitle>Используемое оборудование</SubTitle>

            <EquipmentList>
              {data?.equipment.map((item, i: number) => (
                <EquipmentListItem key={i}>{item}</EquipmentListItem>
              ))}
            </EquipmentList>

            <TextWrapper>
              <SubTitle>Описание</SubTitle>
              <TextParagraph
                dangerouslySetInnerHTML={
                  data && data.text ? createMarkup(data.text) : { __html: '' }
                }
              />
            </TextWrapper>
          </TitleWrapper>
        </ContentWrapper>
      </ModalContent>
    </SectionWrapper>
  )
}
export default Example
