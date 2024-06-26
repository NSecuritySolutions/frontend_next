import { TWorkExamples } from './types'

import noImCard from '@/assets/icons/examples/no-image.svg'

import firstWorksImg from '@/assets/images/works/works-image-1.webp'
import secondWorksImg from '@/assets/images/works/works-image-2.webp'
import thirdWorksImg from '@/assets/images/works/works-image-3.webp'
import fourthWorksImg from '@/assets/images/works/works-image-4.webp'
import fifthWorksImg from '@/assets/images/works/works-image-5.webp'
import sixthWorksImg from '@/assets/images/works/works-image-6.webp'
import seventhWorksImg from '@/assets/images/works/works-image-7.webp'
import eighthWorksImg from '@/assets/images/works/works-image-8.webp'

export const TITLE_LIMIT: number = 40
export const TEXT_LIMIT: number = 120

export const workExamples: TWorkExamples[] = [
  {
    id: 1,
    date: '07.12.2022',
    cardTitle: 'Установка видеонаблюдения в складском помещении',
    cardText:
      'Преимущества и возможности системы видеонаблюдения на примере складов в Новосибирске.',
    cardLink: '/',
    cardImage: fifthWorksImg,

    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [firstWorksImg, secondWorksImg, thirdWorksImg, fourthWorksImg],
    equipment: [
      'Извещатель домовой 20шт.',
      'Извещятель пожарный-ручной 1шт.',
      'Табло "выход" 2шт.',
      'Звуковой оповещатель 3шт.',
      'Блок питания 1шт.',
      'Приемо-контрольный прибор 1шт.',
      'Кабель 190м',
      'Гофра Д.16 70м',
      'Огнетушитель 2шт.',
      'План эвакуации 1шт.',
    ],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },
  {
    id: 2,
    date: '07.10.2021',
    cardImage: sixthWorksImg,
    cardTitle: 'Системы безопасности Новосибирск',
    cardText: 'О нашей компании.',
    cardLink: `/`,

    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [fifthWorksImg, sixthWorksImg, seventhWorksImg, eighthWorksImg],
    equipment: [
      'Извещатель домовой 20шт.',
      'Извещятель пожарный-ручной 1шт.',
      'Табло "выход" 2шт.',
      'Звуковой оповещатель 3шт.',
      'Блок питания 1шт.',
      'Приемо-контрольный прибор 1шт.',
      'Кабель 190м',
      'Гофра Д.16 70м',
      'Огнетушитель 2шт.',
      'План эвакуации 1шт.',
    ],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },

  {
    id: 3,
    date: '17.10.2022',
    cardTitle: 'Обеспечьте безопасность вашей дачи',
    cardText: 'Надежные датчики и камеры для непрерывного мониторинга.',
    cardLink: `/`,
    cardImage: seventhWorksImg,

    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [fifthWorksImg, sixthWorksImg, seventhWorksImg, eighthWorksImg],
    equipment: ['Камера 6 шт', 'Провода 900 м'],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },
  {
    id: 4,
    date: '12.10.2022',
    cardTitle: 'Заголовок',
    cardText: 'Небольшой текст.',
    cardLink: `/`,
    cardImage: eighthWorksImg,

    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [fifthWorksImg, sixthWorksImg, seventhWorksImg, eighthWorksImg],
    equipment: [
      'Извещатель домовой 20шт.',
      'Извещятель пожарный-ручной 1шт.',
      'Табло "выход" 2шт.',
      'Звуковой оповещатель 3шт.',
      'Блок питания 1шт.',
      'Приемо-контрольный прибор 1шт.',
      'Кабель 190м',
      'Гофра Д.16 70м',
      'Огнетушитель 2шт.',
      'План эвакуации 1шт.',
    ],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },
  {
    id: 5,
    //date: '2023-10-08',
    cardTitle:
      'Установка видеонаблюдения в складском помещении dfgdfbgdfghsfghsfghbsfgnf dfgsdghbfgbc dfgsfgnsf sfgndgf',
    cardText:
      'Преимущества и возможности системы видеонаблюдения на примере складов в Новосибирске. dgfgnfgndfghnsfghnsfg dgbfgbfgbd  dbadfgadfgvdfcvb dadfdfb dfdfbhsdth',
    cardLink: '/',
    cardImage: firstWorksImg,
    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [firstWorksImg, secondWorksImg, thirdWorksImg, fourthWorksImg],
    equipment: ['Камера 4 шт', 'Провода 480 м'],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },
  {
    id: 6,
    date: '07.10.2022',
    cardTitle: 'Системы безопасности Новосибирск',
    cardText: 'О нашей компании.',
    cardLink: '/',
    cardImage: noImCard,
    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [fifthWorksImg, sixthWorksImg, seventhWorksImg, eighthWorksImg],
    equipment: ['Камера 68 шт', 'Провода 1480м'],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },

  {
    id: 7,
    date: '06.10.2022',
    cardTitle: 'Обеспечьте безопасность вашей дачи',
    cardText: 'Надежные датчики и камеры для непрерывного мониторинга.',
    cardLink: '/',
    cardImage: seventhWorksImg,

    title: 'Установка камер видеонаблюдения в частном доме, Новосибирск',
    quantities: [
      { number: 10, measure: 'дн.', description: 'Рабочих дней', color: '#f7f2e4' },
      { number: 265000, measure: '\u20BD', description: 'Бюджет', color: '#def6f7' },
      { number: 265, measure: 'м\u00B2', description: 'Оборудовано', color: '#e1e7f4' },
    ],
    img: [fifthWorksImg, sixthWorksImg, seventhWorksImg, eighthWorksImg],
    equipment: ['Камера 6 шт', 'Провода 900 м'],
    text: `Видеонаблюдение становится все более популярным вариантом обеспечения безопасности в загородных домах. Оно позволяет в режиме реального времени следить за происходящим на участке и в случае необходимости принимать меры.
  <br/>
  Перед установкой видеонаблюдения необходимо подключить интернет. Для загородных домов, где нет возможности подключения проводного интернета, можно использовать 3G модемы и роутеры.
  <br/>
  Одной из лучших моделей 3G модемов является <a href='/' target='_blank'>Huawei E8372</a>. Он поддерживает высокую скорость передачи данных (до 150 Мбит/с) и имеет функцию Wi-Fi, что позволяет подключать к нему несколько устройств одновременно.
  <br/>
  Для создания беспроводной сети можно использовать роутер <a href='/' target='_blank'>TP-Link Archer MR600</a> . Он поддерживает современный стандарт Wi-Fi 802.11ac и имеет 4G LTE модем, что позволяет получать высокую скорость интернета.`,
  },
]
