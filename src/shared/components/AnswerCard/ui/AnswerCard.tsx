import { TQuestionType } from '@/shared/constants/texts/types'
import { CardContainer, QuestionText, AnswerText } from './styled'

const AnswerCard = (item: TQuestionType) => {
  return (
    <>
      <CardContainer>
        <QuestionText>{item.question}</QuestionText>
        <AnswerText>{item.answer}</AnswerText>
      </CardContainer>
    </>
  )
}

export default AnswerCard
