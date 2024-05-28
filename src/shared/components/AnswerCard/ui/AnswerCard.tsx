import { TQuestionType } from '@/shared/constants/texts/types'
import {
  CardContainer,
  QuestionText,
  AnswerText,
  ImgWrapper,
  CropWrapper,
  CardWrapper,
} from './styled'
import Image from 'next/image'

const AnswerCard = (item: TQuestionType) => {
  return (
    <CardWrapper>
      <CardContainer>
        <QuestionText>{item.question}</QuestionText>
        <AnswerText>{item.answer}</AnswerText>
      </CardContainer>
      <CropWrapper>
        <ImgWrapper>
          <Image src="/images/questions/png/goPro.png" alt="GoPro" fill />
        </ImgWrapper>
      </CropWrapper>
    </CardWrapper>
  )
}

export default AnswerCard
