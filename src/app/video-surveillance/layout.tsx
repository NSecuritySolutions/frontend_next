import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import VideoPage from './page'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Купить готовые комплекты видеолнаблюдения в Новосибирске',
  description:
    'Широкий ассортимент систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
  keywords: [
    'купить системы видеонаблюдения',
    'купить готовые комплекты видеонаблюдения',
    'Опти Контроль',
    'Новосибирск',
  ],
  openGraph: {
    title: 'Купить готовые комплекты видеонаблюдения в Новосибирске',
    description:
      'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске.',
    url: 'https://', //@TODO Дописать атуальный url
    siteName: 'Оптиконтроль',
    images: [
      {
        url: 'http://localhost:3000/src/app/icon7.png', //@TODO дописать путь к картинке для твиттера
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/src/app/icon6.png', //@TODO дописать путь к картинке для твиттера
        width: 1800,
        height: 1600,
        alt: 'Оптиконтроль - Безопасность вашего дома и бизнеса.',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function VideoPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <VideoPage />
}
