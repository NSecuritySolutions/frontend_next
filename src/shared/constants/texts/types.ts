import { StaticImageData } from 'next/image';

export type TProjectMilestones = {
  id: number;
  title: string;
  text: string;
};

export type TTeamContacts = {
  id: number;
  name: string;
  position: string;
  tel: string;
  image: string;
};

export type TError505 = {
  id: number;
  errorCode: string;
  errorMessage: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
};

export type TError404 = {
  id: number;
  errorCode: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
  errorMessage: string;
};

export type TWorkExamples = {
  id: number;
  date?: string | number | Date;
  cardTitle: string;
  cardText: string;
  cardLink: string;
  cardImage?: StaticImageData | undefined;
  cardSectionButton?: string | undefined;
  cardSectionLink?: string | undefined;
  cardIcons?: {
    link: string;
    alt: string;
  }[];
  title: string;
  quantities: { number: string; description: string }[];
  img: string[];
  equipment: string[];
  text: string;
};

export type TQuestionType = {
  id: number;
  question: string;
  answer: string;
};

export type TTabs = {
  icon: string;
  text: string;
  items: Array<TQuestionType>;
};

export type TAnswer = {
  answer?: string;
};

export type TTopicProps = {
  icon: string;
  text: string;
  items: Array<TQuestionType>;
  onClick: (item: TTabs) => void;
  chosen: TTabs | null;
};

export type TAnswerProps = {
  id: number;
  question: string;
  answer: string;
  onClick: (item: TQuestionType) => void;
  chosen: TQuestionType | null;
};

export type TProjectReviews = {
  id: number;
  name: string;
  product: string;
  review: string;
  img: StaticImageData;
  link?: string | undefined;
};

export type TOurServices = {
  id: number;
  title: string;
  text: string;
  img: string;
  btnName: string;
  link: string;
};

export type TFormTypes = {
  name: string;
  phone: string;
  email: string;
  text: string;
};
