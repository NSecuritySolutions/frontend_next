import { FC } from 'react'
import { CloseButton, ImgWrapper, Overlay, SmallContainer, Text, Title } from './styled'
import Image from 'next/image'

interface ResponseModalProps {
  success: boolean
  close: () => void
}

const ResponseModal: FC<ResponseModalProps> = ({ success, close }) => {
  return (
    <Overlay>
      <SmallContainer>
        <CloseButton onClick={close}>
          <ImgWrapper>
            <Image src="/icons/closeBtn.svg" width={22} height={22} alt="close" />
          </ImgWrapper>
        </CloseButton>
        <Title>
          {success ? 'Спасибо, мы приняли вашу заявку!' : 'Ошибка! Мы не получили Вашу заявку'}
        </Title>
        <Text>
          {success
            ? 'В ближайшее время с вами свяжется наш менеджер для уточнения деталей'
            : 'Заполните форму повторно или свяжитесь с нами по телефону'}
        </Text>
      </SmallContainer>
    </Overlay>
  )
}

export default ResponseModal
