import { TTopicProps } from '@/shared/constants/texts/types.ts'
import { CardContainer, CardImg, CardName } from './styled.ts'

const QuestionTopic = ({ id, name, icon, questions, onClick, chosen }: TTopicProps) => {
  function handleClick() {
    onClick({ id: id, icon: icon, name: name, questions: questions })
  }

  return (
    <>
      <CardContainer onClick={handleClick} $chosen={chosen !== null && chosen.name === name}>
        <CardImg
          $imgUrl={icon}
          alt="Иконка группы вопросов"
          $chosen={chosen !== null && chosen.name === name}
        />
        <CardName>{name}</CardName>
      </CardContainer>
    </>
  )
}

export default QuestionTopic
