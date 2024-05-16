'use client'

import { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'
import { Manrope } from 'next/font/google'

import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Footer } from '../widgets/Footer'
import { Header } from '../widgets/Header'
import { headerNavLinks } from '../shared/constants/texts/header-nav-items'

import StyledComponentsRegistry from './styling/registry'

import styles from './page.module.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

// export const metadata: Metadata = {
//   title: 'Купить готовые комплекты видеонаблюдения в Новосибирске',
//   description:
//     'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
//   keywords: [
//     'купить комплект видеонаблюдения',
//     'готовые комплекты видеонаблюдения',
//     'купить',
//     'интернет магазин',
//     'Новосибирск',
//   ],
//   openGraph: {
//     title: 'Купить готовые комплекты видеонаблюдения в Новосибирске',
//     description:
//       'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске.',
//     url: 'https://', //@TODO Дописать атуальный url
//     siteName: 'Оптиконтроль',
//     images: [
//       {
//         url: 'http://localhost:3000/src/app/icon7.png', //@TODO дописать путь к картинке для твиттера
//         width: 800,
//         height: 600,
//       },
//       {
//         url: 'http://localhost:3000/src/app/icon6.png', //@TODO дописать путь к картинке для твиттера
//         width: 1800,
//         height: 1600,
//         alt: 'Оптиконтроль - Безопасность вашего дома и бизнеса.',
//       },
//     ],
//     locale: 'ru_RU',
//     type: 'website',
//   },
// }

interface Metadata {
  title: string
  description: string
  keywords: string[]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [metadata, setMetadata] = useState<Metadata>({
    title: '',
    description: '',
    keywords: [],
  })

  useEffect(() => {
    const generateMetadata = (): Metadata => {
      switch (pathname) {
        case '/':
          return {
            title: 'Главная - Опти Контроль',
            description:
              'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
            keywords: [
              'купить комплект видеонаблюдения',
              'готовые комплекты видеонаблюдения',
              'купить',
              'интернет магазин',
              'Новосибирск',
            ],
          }
        case '/security':
          return {
            title: 'Купить охранно-пожарную сигнализацию в Новосибирске - Опти контроль',
            description:
              'Широкий ассортимент охранно-пожарных сигнализаций в наличии в Новосибирске. Лучшие решения на рынке систем пожарной безопасности с официальной гарантией и доставкой по всей России.',
            keywords: [
              'купить комплект охранно-пожарных сигнализаций',
              'охранно-пожарныя сигнализация',
              'купить',
              'интернет магазин',
              'Новосибирск',
            ],
          }
        case '/domofon':
          return {
            title:
              'Купить систему контроля и управления доступом(СКУД) в Новосибирске - Опти Контроль',
            description:
              'Широкий ассортимент систем контроля и управления доступом(СКУД) в наличии в Новосибирске. Лучшее решение на рынке систем СКУД с официальной гарантией и доставкой по всей России.',
            keywords: [
              'купить систему СКУД',
              'купить систему контроля и управления доступом',
              'купить',
              'интернет магазин',
              'Новосибирск',
            ],
          }
        case '/video-surveillance':
          return {
            title: 'Купить готовые комплекты видеонаблюдения в Новосибирске - Опти Контроль',
            description:
              'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
            keywords: [
              'купить комплект видеонаблюдения',
              'готовые комплекты видеонаблюдения',
              'купить',
              'интернет магазин',
              'Новосибирск',
            ],
          }
        default:
          return {
            title: 'Купить системы видеонаблюдения в Новосибирске',
            description:
              'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске. Лучшее решение на рынке систем видеонаблюдения с официальной гарантией и доставкой по всей России.',
            keywords: [
              'купить комплект видеонаблюдения',
              'готовые комплекты видеонаблюдения',
              'готовые системы видеонаблюдения',
              'купить',
              'интернет магазин',
              'Новосибирск',
            ],
          }
      }
    }

    const newMetadata = generateMetadata()

    setMetadata(newMetadata)
  }, [pathname])

  return (
    <html lang="ru">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.toString()} />

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
