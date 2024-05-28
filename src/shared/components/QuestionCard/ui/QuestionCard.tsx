import { TAnswerProps } from '@/shared/constants/texts/types.ts'

import {
  CardContainer,
  QuestionNumber,
  CardText,
  CardAnswer,
  TitleContainer,
  ArrowWrapper,
} from './styled.ts'
import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'

const QuestionCard: FC<TAnswerProps> = ({ id, question, answer, onClick, chosen }) => {
  const [open, setOpen] = useState(false)
  const [initialHeight, setInitialHeight] = useState(64)
  const ref = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      setInitialHeight(titleRef.current.offsetHeight + 40)
    }
  }, [titleRef.current, chosen])

  useEffect(() => {
    const handleResize = () => {
      if (titleRef.current && window.innerWidth <= 940) {
        setInitialHeight(titleRef.current.offsetHeight + 40)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleClick() {
    setOpen(!open)
    onClick({ id: id, question: question, answer: answer })
  }

  return (
    <CardContainer
      onClick={handleClick}
      $chosen={chosen !== null && chosen.question === question}
      $open={open}
      ref={ref}
      $height={ref.current?.scrollHeight}
      $heightInitial={initialHeight}
    >
      <QuestionNumber $chosen={chosen !== null && chosen.question === question}>
        {id}
      </QuestionNumber>
      <TitleContainer ref={titleRef}>
        <CardText>{question}</CardText>
        <AnimatePresence initial={false}>
          <ArrowWrapper
            key={open ? 'toogle open' : 'toogle close'}
            initial={{ rotate: open ? -360 : -180 }}
            animate={{ rotate: open ? -180 : 0 }}
          >
            <Image
              src="/icons/questions/open-card-arrow.svg"
              alt="open toogle"
              width={24}
              height={24}
            />
          </ArrowWrapper>
        </AnimatePresence>
      </TitleContainer>
      <CardAnswer>{answer}</CardAnswer>
    </CardContainer>
  )
}

export default QuestionCard
