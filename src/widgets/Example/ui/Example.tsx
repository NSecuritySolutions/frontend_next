import { FC } from 'react'

import Image from 'next/image'

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
} from './styles.ts'

interface ExampleProps {
  data: TWorkExamples
}

const Example: FC<ExampleProps> = ({ data }) => {
  const createMarkup = (text: string) => ({ __html: text })

  if (!data) return NotFound()

  return (
    <SectionWrapper>
      <Breadcrumbs title={data.cardTitle} />
      <>
        <ModalContent>
          <ContentWrapper>
            <TitleWrapper>
              <Title>{data?.title}</Title>
              <Date>{data?.date}</Date>

              <NumbersRow>
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
                      <Quantity>{item.number}</Quantity>
                      <Paragraph>{item.description}</Paragraph>
                    </InfoColumn>
                  </NumbersColumn>
                ))}
              </NumbersRow>

              <ImgSlider modalItem={data} />

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
      </>
    </SectionWrapper>
  )
}
export default Example
