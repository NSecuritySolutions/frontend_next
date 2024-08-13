import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { AnimatePresence, useAnimate } from 'framer-motion'

import { CardContainer, CardText, CardAnswer, TitleContainer, ArrowWrapper } from './styled.ts'
import { TQuestionType } from '@/shared/constants/texts/types.ts'

type TAnswerProps = {
  id: number
  question: string
  answer: string[]
  onClick: (item: TQuestionType) => void
  chosen: TQuestionType | null
  isMobile: boolean
}

const QuestionCard: FC<TAnswerProps> = ({ id, question, answer, onClick, chosen, isMobile }) => {
  const [open, setOpen] = useState(false)
  const [initialHeight, setInitialHeight] = useState(0)
  const [ref, animate] = useAnimate()
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) {
      animate(ref.current, { height: initialHeight })
    } else {
      animate(ref.current, { height: '90px' })
    }
  }, [isMobile, initialHeight, animate, ref])

  useEffect(() => {
    const handleResize = () => {
      if (titleRef.current && isMobile) {
        setInitialHeight(titleRef.current.offsetHeight + 40)
        setOpen(false)
        animate(ref.current, { height: initialHeight })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [titleRef, isMobile, initialHeight])

  function handleClick() {
    if (isMobile) {
      setOpen(!open)
      if (open) {
        animate(ref.current, { height: initialHeight }, { duration: 0.3 })
      } else {
        animate(ref.current, { height: ref.current!.scrollHeight }, { duration: 0.3 })
      }
    }
    onClick({ id: id, question: question, answer: answer })
  }

  return (
    <CardContainer
      onClick={handleClick}
      $chosen={chosen !== null && chosen.question === question}
      ref={ref}
    >
      {/* <QuestionNumber $chosen={chosen !== null && chosen.question === question}>
        {id}
      </QuestionNumber> */}
      <TitleContainer ref={titleRef}>
        <CardText>{question}</CardText>
        <AnimatePresence initial={false} mode="popLayout">
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
