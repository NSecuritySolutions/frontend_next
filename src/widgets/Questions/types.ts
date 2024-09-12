export interface IQuestion {
  id: number
  question: string
  answer: string[]
}

export interface IQuestionCategory {
  id: number
  name: string
  icon: string
  questions: IQuestion[]
}

export interface QuestionsProps {
  data: IQuestionCategory[]
}
