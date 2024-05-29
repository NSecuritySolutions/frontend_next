import { TQuestionType } from '@/shared/constants/texts/types'
import { CardContainer, QuestionText, AnswerText, Img, CardWrapper } from './styled'

const AnswerCard = (item: TQuestionType) => {
  return (
    <CardWrapper>
      <CardContainer>
        <QuestionText>{item.question}</QuestionText>
        <AnswerText>{item.answer}</AnswerText>
      </CardContainer>
      <Img src="/images/questions/png/goPro.png" alt="GoPro" width={260} height={261} />
    </CardWrapper>
  )
}

export default AnswerCard
