import { TProjectReviews } from './types';

import firstReview from '../../../assets/images/feedback/webp/feedback-image-1.webp';
import secondReview from '../../../assets/images/feedback/webp/feedback-image-2.webp';
import thirdReview from '../../../assets/images/feedback/webp/feedback-image-3.webp';

export const TEXT_LIMIT: number = 145;
export const TITLE_LIMIT: number = 23;

export const projectReviews: TProjectReviews[] = [
  {
    id: 1,
    name: 'Анна С.',
    product: 'Система видеонаблюдения',
    review:
      'Большое спасибо за установку системы видеонаблюдения. Все выполнили быстро и качественно. Нам очень понравилось, будем рекомендовать вас.',
    img: firstReview
  },
  {
    id: 2,
    name: 'Сергей Е.',
    product: 'Система видеонаблюдения',
    review:
      'Большое спасибо за установку системы видеонаблюдения. Все выполнили быстро и качественно. Нам очень понравилось, будем рекомендовать вас. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae atque illo soluta voluptas inventore cum perspiciatis laudantium esse rerum eos tenetur harum similique consectetur distinctio ducimus, necessitatibus, reprehenderit earum.',
    link: 'https://market.yandex.ru/',
    img: secondReview
  },
  {
    id: 3,
    name: 'Евгения К.',
    product: 'Система видеонаблюдения',
    review:
      'Большое спасибо за установку системы видеонаблюдения. Все выполнили быстро и качественно. Нам очень понравилось, будем рекомендо. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae atque illo soluta voluptas inventore cum perspiciatis laudantium esse rerum eos tenetur harum similique consectetur distinctio ducimus, necessitatibus, reprehenderit earum.',
    link: 'https://market.yandex.ru/',
    img: thirdReview
  },
  {
    id: 4,
    name: 'Анна С.',
    product: 'Система видеонаблюдения',
    review:
      'Большое спасибо за установку системы видеонаблюдения. Все выполнили быстро и качественно. Нам очень понравилось.',
    link: 'https://market.yandex.ru/',
    img: firstReview
  },
  {
    id: 5,
    name: 'Сергей Е.',
    product: 'Система видеонаблюдения',
    review:
      'Большое спасибо за установку системы видеонаблюдения. Все выполнили быстро и качественно. Нам очень понравилось, будем рекомендовать вас.',
    link: 'https://market.yandex.ru/',
    img: secondReview
  }
];
