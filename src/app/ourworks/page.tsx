'use client'

import Image from 'next/image'

import { Breadcrumbs } from '@/shared/components/BreadCrumbs'

import ImgSlider from '@/shared/components/ImgSlider/ui/ImgSlider'

import styles from './styles/page.module.css'

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
} from './styles/styles.ts'

import TOurWorksProps from './types/types.ts'
import { workExamples } from '@/shared/constants/texts/examples'

const modalItem = workExamples[1]
console.log(modalItem.cardLink)

const OurworksPage: React.FC<TOurWorksProps> = () => {
  const createMarkup = (text: string) => ({ __html: text })

  return (
    <>
      <section className={styles.main}>
        <Breadcrumbs />
        <>
          <ModalContent>
            <ContentWrapper>
              <TitleWrapper>
                <Title>{modalItem?.title}</Title>
                <Date>{modalItem?.date}</Date>

                <NumbersRow>
                  {modalItem?.quantities.map((item, i: number) => (
                    <NumbersColumn key={i} $color={item.color}>
                      <ImageColumn>
                        <Image
                          key={i}
                          src={`icons/ourworks/ourworks-${i + 1}.svg`}
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

                <ImgSlider modalItem={modalItem} />

                <SubTitle>Используемое оборудование</SubTitle>

                <EquipmentList>
                  {modalItem?.equipment.map((item, i: number) => (
                    <EquipmentListItem key={i}>{item}</EquipmentListItem>
                  ))}
                </EquipmentList>

                <TextWrapper>
                  <SubTitle>Описание</SubTitle>
                  <TextParagraph
                    dangerouslySetInnerHTML={
                      modalItem && modalItem.text ? createMarkup(modalItem.text) : { __html: '' }
                    }
                  />
                </TextWrapper>
              </TitleWrapper>
            </ContentWrapper>
          </ModalContent>
        </>
      </section>
    </>
  )
}

export default OurworksPage
