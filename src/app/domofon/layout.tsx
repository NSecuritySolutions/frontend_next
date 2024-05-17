import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { headerNavLinks } from '@/shared/constants/texts/header-nav-items'

import StyledComponentsRegistry from '@/app/styling/registry'

import styles from './page.module.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Купить готовые системы СКУД и домофонии в Новосибирске',
  description:
    'Широкий ассортимент системы СКУД и домофонии в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
  keywords: [
    'купить системы СКУД/Домофонии',
    'готовые системы СКУД/Домофонии',
    'интернет магазин СКУД/Домофонии',
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
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <StyledComponentsRegistry>
          <Header navLinks={headerNavLinks} />
          <main className={styles.main} id="content">
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
