import type { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Купить готовые комплекты видеонаблюдения в Новосибирске',
  description:
    'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
  keywords: [
    'купить комплект видеонаблюдения',
    'готовые комплекты видеонаблюдения',
    'купить',
    'интернет магазин',
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
  return (
    <html lang="ru">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
