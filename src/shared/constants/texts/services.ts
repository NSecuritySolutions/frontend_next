import { TOurServices } from './types'

export const TEXT_LIMIT: number = 145

export const TITLE_LIMIT: number = 23

export const cardServices: TOurServices[] = [
  {
    id: 1,
    title: 'Установка систем безопасности под ключ',
    text: [
      'Комплексные решения, онлайн-консультации в сети и по телефону, проектирование от сбора первичных требований и выезда на замер до установки и подключения',
    ],
    img: '/images/services/png/services-images-res-1.png',
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
    img: '/images/services/png/services-images-res-2.png',
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
    img: '/images/services/png/services-images-res-3.png',
    link: '/intercom',
    btnName: 'Подробнее',
  },
  {
    id: 4,
    title: 'Установка охранно-пожарной сигнализации',
    text: [
      'Проводные и беспроводные системы охранно-пожарной сигнализации',
      'Имеем бессрочную лицензию МЧС на осуществление деятельности',
    ],
    img: '/images/services/png/services-images-res-4.png',
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
    img: '/images/services/png/services-images-res-5.png',
    link: '/#calculator',
    btnName: 'Рассчитать стоимость',
  },
]
