import { IQuestion, IQuestionCategory } from '@/widgets/Questions/types'
import { StaticImageData } from 'next/image'

export type TProjectMilestones = {
  id: number
  title: string
  text: string
}

export type TTeamContacts = {
  id: number
  name: string
  position: string
  tel: string
  image: StaticImageData
}

export type TError505 = {
  id: number
  errorCode: string
  errorMessage: string
  errorText: string
  errorImg: StaticImageData
}

export type TError404 = {
  id: number
  errorCode: string
  errorText: string
  errorImg: StaticImageData
  errorMessage: string
}

export type TWorkExamples = {
  id: number
  date?: string
  cardTitle: string
  cardText: string
  cardLink?: string
  cardImage?: StaticImageData | undefined
  cardSectionButton?: string | undefined
  cardSectionLink?: string | undefined
  cardIcons?: {
    link: StaticImageData
    alt: string
  }[]
  title: string
  quantities: { number: number; measure: string; description: string; color?: string }[]
  img: StaticImageData[]
  equipment: string[]
  text: string
}

export type TQuestionType = {
  id: number
  question: string
  answer: string[]
}

export type TTabs = {
  icon: string
  name: string
  questions: IQuestion[]
}

export type TAnswer = {
  answer?: string
}

export type TTopicProps = {
  id: number
  icon: string
  name: string
  questions: IQuestion[]
  onClick: (item: IQuestionCategory) => void
  chosen: IQuestionCategory | null
}

export type TProjectReviews = {
  id: number
  name: string
  product: string
  review: string
  img: string | StaticImageData
  link?: string | undefined
}

export type TOurServices = {
  id: number
  title: string
  text: string[]
  img: string
  btnName: string
  link: string
}

export type TFormTypes = {
  name: string
  phone: string
  email: string
  text: string
}

export type TCookieText = {
  id: number
  title: string
  text: string
  button: string
}
