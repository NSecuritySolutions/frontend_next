import { MouseEvent, useEffect } from 'react'

import { ImgSlider } from '../../ImgSlider'

import closeBtn from '@/assets/icons/+.svg'

import TModalProps from './type.ts'

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

const Modal: React.FC<TModalProps> = ({ modalItem, isOpen, closeModal }) => {
  const createMarkup = (text: string) => ({ __html: text })

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      document.body.classList.remove('modal-open')
    }
  }, [closeModal])

  if (!isOpen) return null

  function ChangeFormateDate(date: string) {
    return date.toString().split('-').reverse().join('.')
  }

  const newDate = modalItem?.date ? ChangeFormateDate(modalItem.date.toString()) : ''

  return (
    <ModalContainer key={modalItem?.id} onClick={handleBackdrop}>
      <ModalContent>
        <CloseButton onClick={closeModal} />
        <ContentWrapper>
          <TitleWrapper>
            <Title>{modalItem?.title}</Title>
            <Date>{newDate}</Date>

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
    </ModalContainer>
  )
}

export default Modal
