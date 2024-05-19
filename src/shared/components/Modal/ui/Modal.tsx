import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect } from 'react'

import ImgSlider from '@/shared/components/ImgSlider/ui/ImgSlider'

import CloseBtn from '@/assets/icons/+.svg'

import TModalProps from '../types/types.ts'

import containerVariants from './animation'

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
  const router = useRouter()

  const createMarkup = (text: string) => ({ __html: text })

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
      router.push('/#examples')
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    const modal = document.getElementById('modal')

    document.addEventListener('keydown', handleKeyDown)

    modal?.classList.add('popup-open')
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      modal?.classList.remove('popup-open')
      document.body.classList.remove('modal-open')
    }
  }, [closeModal, router])

  if (!isOpen) return null

  function ChangeFormateDate(date: string) {
    return date.toString().split('-').reverse().join('.')
  }

  const newDate = modalItem?.date ? ChangeFormateDate(modalItem.date.toString()) : ''

  return (
    <ModalContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key={modalItem?.id}
      onClick={handleBackdrop}
      id="modal"
    >
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <Image
            src={CloseBtn}
            alt={'Кнопка закрытия модального окна'}
            width={40}
            height={40}
          ></Image>
        </CloseButton>
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
