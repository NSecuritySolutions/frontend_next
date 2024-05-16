import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect } from 'react'

import ImgSlider from '../../ImgSlider/ui/ImgSlider'

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

const containerVariants = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      type: 'spring',
      damping: 25,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

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

    modal?.classList.add('modal-open2')

    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      modal?.classList.remove('modal-open2')
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
          <Image src={closeBtn} alt={'Кнопка закрытия модального окна'}></Image>
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
