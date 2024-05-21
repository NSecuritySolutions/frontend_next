import { FC } from 'react'

import Image from 'next/image'

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
} from './styles.ts'

import { ImgSlider } from '@/shared/components/ImgSlider/index.ts'
import { Breadcrumbs } from '@/shared/components/BreadCrumbs'
import { TWorkExamples } from '@/shared/constants/texts/types.ts'
import styles from './page.module.css'

interface ExampleProps {
  data: TWorkExamples
}

const Example: FC<ExampleProps> = ({ data }) => {
  const createMarkup = (text: string) => ({ __html: text })

  return (
    <section className={styles.main}>
      <Breadcrumbs title={data?.title} />
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
    </section>
  )
}
export default Example
