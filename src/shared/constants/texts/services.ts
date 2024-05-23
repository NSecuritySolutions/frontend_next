import { TOurServices } from './types'

import securityImg from '@/assets/images/services/webp/services-image-1.webp'
import fireAlarmImg from '@/assets/images/services/webp/services-image-2.webp'

import videoSurvImg from '@/assets/images/services/webp/services-image-3.webp'

import intercomImg from '@/assets/images/services/webp/services-image-4.webp'

import calculateImg from '@/assets/images/services/webp/services-image-5.webp'

export const TEXT_LIMIT: number = 145
export const TITLE_LIMIT: number = 23

export const cardServices: TOurServices[] = [
  {
    id: 1,
    title: 'Установка систем безопасности под ключ',
    text: [
      'Комплексные решения, онлайн-консультации в сети и по телефону, проектирование от сбора первичных требований и выезда на замер до установки и подключения',
    ],
    img: securityImg,
    link: '/#contact-form',
    btnName: 'Заказать',
  },
  {
    id: 2,
    title: 'Установка видеонаблюдения',
    text: [
      'Большой ассортимент IP и AHD камер, регистраторов и коммутаторов для решения любой задачи и возможностью подбора необходимых функций',
      'Просмотр в приложении на смартфоне и через веб-браузер',
    ],
    img: fireAlarmImg,
    link: '/video-surveillance',
    btnName: 'Подробнее',
  },
  {
    id: 3,
    title: 'Установка домофонии и систем контроля и учета доступа',
    text: [
      'Вызывные панели домофонов, мониторы, считыватели и прочая необходимая переферия всегда в наличии',
      'Умное электронное оборудование, объединенное в систему ограничения доступа',
      'Автономные и сетевые СКУД',
    ],
    img: videoSurvImg,
    link: '/domofon',
    btnName: 'Подробнее',
  },
  {
    id: 4,
    title: 'Установка охранно-пожарной сигнализации',
    text: [
      'Проводные и беспроводные системы охранно-пожарной сигнализации',
      'Имеем бессрочную лицензию МЧС на осуществление деятельности',
    ],
    img: intercomImg,
    link: '/security',
    btnName: 'Подробнее',
  },
]

export const cardServicesWithBannerData: TOurServices[] = [
  {
    id: 5,
    title: 'Подробный расчет проекта под ключ',
    text: [
      'Рассчитайте стоимость вашего проекта прямо на\u00A0сайте и\u00A0закажите обратную связь для дальнейшего сотрудничества',
    ],
    img: calculateImg,
    link: '#calculator',
    btnName: 'Рассчитать стоимость',
  },
]
