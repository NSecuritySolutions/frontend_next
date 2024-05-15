import { TTopicProps } from '@/shared/constants/texts/types.ts'

import { CardContainer, CardImg, CardName } from './styled.ts'

const QuestionTopic = ({ text, icon, items, onClick, chosen }: TTopicProps) => {
  function handleClick() {
    onClick({ icon: icon, text: text, items: items })
  }

  return (
    <>
      <CardContainer onClick={handleClick} $chosen={chosen !== null && chosen.text === text}>
        <CardImg
          $imgUrl={icon}
          alt="Иконка группы вопросов"
          $chosen={chosen !== null && chosen.text === text}
        />
        <CardName>{text}</CardName>
      </CardContainer>
    </>
  )
}

export default QuestionTopic
