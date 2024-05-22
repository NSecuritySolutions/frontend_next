import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect } from 'react'

import TImageModalProps from '../types/types.ts'

import containerVariants from './animation.tsx'

import { ModalContainer, ModalContent, CloseButton, ContentWrapper } from './styles.ts'

const ImageModal: React.FC<TImageModalProps> = ({ image, closeModal }) => {
  console.log(image?.src, 'image - 2')
  const router = useRouter()

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

  return (
    <ModalContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={handleBackdrop}
      id="modal"
    >
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <Image
            src="/icons/closeBtn.svg"
            alt={'Кнопка закрытия модального окна'}
            height={40}
            width={40}
          ></Image>
        </CloseButton>
        <ContentWrapper>
          <Image
            src={image?.src}
            alt={`Пример готового проекта`}
            width={image.width}
            height={image.height}
          />
        </ContentWrapper>
      </ModalContent>
    </ModalContainer>
  )
}

export default ImageModal
