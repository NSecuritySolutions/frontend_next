import React, { useEffect } from 'react'

import {
  Section,
  SectionWrapper,
  SectionTitle,
  TopicsColumn,
  QuestionsColumn,
  ColumnWrapper,
} from './styled'
import { QuestionTopic } from '@/shared/components/QuestionTopic'
import { TQuestionType, TTabs } from '@/shared/constants/texts/types'
import { tabs } from '@/shared/constants/texts/questions'
import { QuestionCard } from '@/shared/components/QuestionCard'
import { AnswerCard } from '@/shared/components/AnswerCard'

const Questions = () => {
  const [currentTab, setCurrentTab] = React.useState<TTabs | null>(null)
  const [currentQuestion, setCurrentQuestion] = React.useState<TQuestionType | null>(null)

  useEffect(() => {
    if (tabs[0] !== null && tabs[0].items) {
      setCurrentTab(tabs[0])
      setCurrentQuestion(tabs[0].items[0])
    }
  }, [])

  function onTopickClick(item: TTabs) {
    setCurrentTab(item)
    setCurrentQuestion(item.items[0])
  }

  function onQuestionClick(item: TQuestionType) {
    setCurrentQuestion(item)
  }

  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <ColumnWrapper>
          <TopicsColumn>
            {tabs.map((item, index) => (
              <QuestionTopic
                text={item.text}
                icon={item.icon}
                items={item.items}
                key={index}
                onClick={onTopickClick}
                chosen={currentTab}
              />
            ))}
          </TopicsColumn>
          <QuestionsColumn>
            {currentTab !== null &&
              currentTab.items &&
              currentTab.items.map((item, index) => (
                <QuestionCard
                  question={item.question}
                  answer={item.answer}
                  id={item.id}
                  key={index}
                  onClick={onQuestionClick}
                  chosen={currentQuestion}
                />
              ))}
          </QuestionsColumn>
          {currentQuestion && currentQuestion.answer && (
            <AnswerCard
              id={currentQuestion.id}
              question={currentQuestion.question}
              answer={currentQuestion.answer}
            />
          )}
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default Questions
