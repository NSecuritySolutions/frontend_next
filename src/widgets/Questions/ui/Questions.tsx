import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { AnimatePresence, useAnimate } from 'framer-motion'

import { QuestionTopic } from '@/shared/components/QuestionTopic'
import { TQuestionType } from '@/shared/constants/texts/types'
import { QuestionCard } from '@/shared/components/QuestionCard'
import { AnswerCard } from '@/shared/components/AnswerCard'
import { IQuestion, IQuestionCategory, QuestionsProps } from '../types'
import {
  Section,
  SectionWrapper,
  SectionTitle,
  TopicsColumn,
  QuestionsColumn,
  ColumnWrapper,
} from './styled'

const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const [currentTab, setCurrentTab] = React.useState<IQuestionCategory | null>(null)

  const [safe, setSafe] = useState(true)

  const [currentQuestion, setCurrentQuestion] = React.useState<TQuestionType | null>(null)

  const [scope, animate] = useAnimate()
  const [width, setWidth] = useState(0)

  const sortFaqQuestions = (array: IQuestionCategory[]) => {
    const result = array.sort((a, b) => (a.id > b.id ? 1 : -1))

    return result
  }
  const sortedQuestions = sortFaqQuestions(questions)

  let timer: NodeJS.Timeout

  const settings = {
    className: 'questions-slider',
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 4.25,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
    ],
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (sortedQuestions[0] !== null && sortedQuestions[0].questions) {
      setCurrentTab(sortedQuestions[0])
      setCurrentQuestion(sortedQuestions[0].questions[0])
    }
  }, [])

  function onTopickClick(item: IQuestionCategory) {
    if (width <= 940) {
      if (item.name != currentTab?.name && safe) {
        clearTimeout(timer)
        setSafe(false)
        timer = setTimeout(() => {
          setSafe(true)
        }, 600)
        animate(scope.current, { height: '0px' }, { duration: 0.3 })
        setTimeout(() => {
          animate(scope.current, { height: 'auto' }, { duration: 0.5 })
        }, 600)
        setCurrentTab(item)
        setCurrentQuestion(item.questions[0])
      }
    } else {
      setCurrentTab(item)
      setCurrentQuestion(item.questions[0])
    }
  }

  function onQuestionClick(item: TQuestionType) {
    setCurrentQuestion(item)
  }

  return (
    <Section id="faq">
      <SectionWrapper>
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <ColumnWrapper>
          <TopicsColumn>
            <Slider {...settings}>
              {sortedQuestions.map((item: IQuestionCategory, index: number) => (
                <QuestionTopic
                  id={item.id}
                  name={item.name}
                  icon={item.icon}
                  questions={item.questions}
                  key={index}
                  onClick={onTopickClick}
                  chosen={currentTab}
                />
              ))}
            </Slider>
          </TopicsColumn>
          <AnimatePresence mode="wait">
            <QuestionsColumn
              key={currentTab?.name}
              ref={scope}
              initial={width <= 940 ? { height: 0 } : undefined}
              exit={width <= 940 ? { height: '0px' } : undefined}
              transition={{ duration: 0.3 }}
            >
              {currentTab !== null &&
                currentTab.questions &&
                currentTab.questions.map((item) => (
                  <QuestionCard
                    question={item.question}
                    answer={item.answer}
                    id={item.id}
                    key={item.question}
                    onClick={onQuestionClick}
                    chosen={currentQuestion}
                    width={width}
                  />
                ))}
            </QuestionsColumn>
          </AnimatePresence>
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
