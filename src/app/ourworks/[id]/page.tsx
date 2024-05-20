'use client'

import { Breadcrumbs } from '@/shared/components/BreadCrumbs'
import styles from './page.module.css'
import ImgSlider from '@/shared/components/ImgSlider/ui/ImgSlider'
import {
  ModalContainer,
  ModalContent,
  CloseButton,
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
} from './styles.ts'

import TOurWorksProps from './types/types.ts'
import { workExamples } from '@/shared/constants/texts/examples'

const modalItem = workExamples[0]
console.log(modalItem.cardLink)

const OurworksPage: React.FC<TOurWorksProps> = () => {
  const createMarkup = (text: string) => ({ __html: text })
  return (
    <section className={styles.main}>
      <Breadcrumbs />
      <>
        <ModalContent>
          <CloseButton></CloseButton>
          <ContentWrapper>
            <TitleWrapper>
              <Title>{modalItem?.title}</Title>
              <Date>{modalItem?.date}</Date>

              <NumbersRow>
                {modalItem?.quantities.map((item, i: number) => (
                  <NumbersColumn key={i}>
                    <Quantity>{item.number}</Quantity>
                    <Paragraph>{item.description}</Paragraph>
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
  )
}

export default OurworksPage
