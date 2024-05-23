import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect } from 'react'

import TImageModalProps from '../types/types.ts'

import containerVariants from './animation.tsx'

import { ModalContainer, ModalContent, CloseButton, RevertButton, Button } from './styles.ts'

const ImageModal: React.FC<TImageModalProps> = ({ image, closeModal, images }) => {
  const router = useRouter()

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isClicked, setisClicked] = useState<boolean>(false)

  const nextSlide = () => {
    setisClicked(true)
    if (images) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length)
    }
  }

  const prevSlide = () => {
    setisClicked(true)
    if (images) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
    }
  }

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
        <CloseButton onClick={closeModal}></CloseButton>
        <RevertButton
          onClick={() => {
            prevSlide()
          }}
        >
          <Image src={'/icons/ic-next-button.svg'} alt="Кнопка назад" width={64} height={64} />
        </RevertButton>
        {isClicked && images && images[selectedImageIndex] ? (
          <Image src={images[selectedImageIndex]} alt={`Пример готового проекта`} fill />
        ) : (
          <Image src={image?.src} alt={`Пример готового проекта`} fill />
        )}

        <Button
          onClick={() => {
            nextSlide()
          }}
        >
          <Image src={'/icons/ic-next-button.svg'} alt="Кнопка назад" width={64} height={64} />
        </Button>
      </ModalContent>
    </ModalContainer>
  )
}

export default ImageModal
