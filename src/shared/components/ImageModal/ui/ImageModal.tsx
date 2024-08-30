import { useState } from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { MouseEvent, useEffect } from 'react'

import containerVariants from './animation.ts'

import TImageModalProps from '../types/types.ts'

import { rgbDataURL } from '@/shared/constants/utils/utils.ts'

import { ModalContainer, ModalContent, CloseButton, RevertButton, Button } from './styles.ts'

const ImageModal: React.FC<TImageModalProps> = ({ image, closeModal, images }) => {
  const router = useRouter()

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const nextSlide = () => {
    setIsClicked(true)

    if (images) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length)
    }
  }

  const prevSlide = () => {
    setIsClicked(true)

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

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [closeModal, router])

  return (
    <ModalContainer
      variants={containerVariants}
      initial="initial"
      animate={'animate'}
      exit={'exit'}
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
          <Image src="/icons/ic-next-button.svg" alt="Кнопка назад" fill />
        </RevertButton>
        {isClicked && images && images[selectedImageIndex] ? (
          <Image
            src={images[selectedImageIndex].image}
            alt={`Пример готового проекта`}
            fill
            placeholder="blur"
            blurDataURL={rgbDataURL(225, 231, 244)}
          />
        ) : (
          <Image
            src={image}
            alt={`Пример готового проекта`}
            fill
            placeholder="blur"
            blurDataURL={rgbDataURL(225, 231, 244)}
          />
        )}

        <Button
          onClick={() => {
            nextSlide()
          }}
        >
          <Image src="/icons/ic-next-button.svg" alt="Кнопка назад" fill />
        </Button>
      </ModalContent>
    </ModalContainer>
  )
}

export default ImageModal
