import { TQuestionType } from '@/shared/constants/texts/types'
import { CardContainer, QuestionText, AnswerText, ImgWrapper, CropWrapper } from './styled'
import Image from 'next/image'

const AnswerCard = (item: TQuestionType) => {
  return (
    <>
      <CardContainer>
        <QuestionText>{item.question}</QuestionText>
        <AnswerText>{item.answer}</AnswerText>
        <CropWrapper>
          <ImgWrapper>
            <Image src="/images/questions/png/goPro.png" alt="GoPro" fill />
          </ImgWrapper>
        </CropWrapper>
      </CardContainer>
    </>
  )
}

export default AnswerCard
