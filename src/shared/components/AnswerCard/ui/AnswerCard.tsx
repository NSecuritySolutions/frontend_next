import { TQuestionType } from '@/shared/constants/texts/types'

import { CardContainer, QuestionText, AnswerText, Img, CardWrapper } from './styled'

const AnswerCard = (item: TQuestionType) => {
  return (
    <CardWrapper>
      <CardContainer>
        <QuestionText>{item.question}</QuestionText>
        {Array.isArray(item?.answer) &&
          item.answer.length > 1 &&
          item.answer.map((string, index: number) => <p key={index}>{string}</p>)}
        {Array.isArray(item?.answer) && item.answer.length === 1 && (
          <AnswerText>{item.answer[0]}</AnswerText>
        )}
        {typeof item?.answer === 'string' && <AnswerText>{item.answer}</AnswerText>}
      </CardContainer>
      <Img src="/images/questions/png/goPro.png" alt="GoPro" width={260} height={261} />
    </CardWrapper>
  )
}

export default AnswerCard
