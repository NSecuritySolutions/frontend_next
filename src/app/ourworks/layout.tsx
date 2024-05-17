import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import OurworksPage from './page.tsx'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title:
    'Готовые решения систем видеонаблюдения, СКУД, охранно-пожарной сигнализации в Новосибирске',
  description:
    'Широкий ассортимент готовых решений по охране домов, офисов, складов, помещений в наличии в Новосибирске. Лучшие решения на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
  keywords: [
    'готовые решения СКУД/Домофонии',
    'готовые решения видеонаблюдения',
    'готовые решения охранно-пожарной сигнализациия',
    'интернет магазин систем видеонаблюдения',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <OurworksPage />
}
