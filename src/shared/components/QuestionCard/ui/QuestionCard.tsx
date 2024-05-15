import { TAnswerProps } from '@/shared/constants/texts/types.ts'

import { CardContainer, QuestionNumber, CardText } from './styled.ts'

const QuestionCard = ({ id, question, answer, onClick, chosen }: TAnswerProps) => {
  function handleClick() {
    onClick({ id: id, question: question, answer: answer })
  }

  return (
    <>
      <CardContainer
        onClick={handleClick}
        $chosen={chosen !== null && chosen.question === question}
      >
        <QuestionNumber $chosen={chosen !== null && chosen.question === question}>
          {id}
        </QuestionNumber>
        <CardText>{question}</CardText>
      </CardContainer>
    </>
  )
}

export default QuestionCard
