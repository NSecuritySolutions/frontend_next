import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { headerNavLinks } from '@/shared/constants/texts/header-nav-items'
import { RootPageMetaData } from '@/shared/constants/texts/metadata'

import StyledComponentsRegistry from '@/app/styling/registry'

import styles from './page.module.css'
import { BASE_URL } from '@/shared/constants/url/url'
const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),
  category: 'services',
  manifest: `${BASE_URL}/manifest.json`,

  icons: {
    icon: [
      { url: '/favicons/icon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicons/icon1.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/icon2.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicons/icon3.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicons/icon4.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicons/icon5.png', sizes: '270x270', type: 'image/png' },
      { url: '/favicons/icon6.png', sizes: '558x270', type: 'image/png' },
      { url: '/favicons/icon7.png', sizes: '558x558', type: 'image/png' },
      { url: '/favicons/icon8.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/icon9.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-icon1.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicons/apple-icon2.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicons/apple-icon3.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicons/apple-icon4.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicons/apple-icon5.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicons/apple-icon6.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicons/apple-icon7.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicons/apple-icon8.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicons/apple-icon9.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  title: `${RootPageMetaData.title}`,
  description: `${RootPageMetaData.description}`,
  keywords: `${RootPageMetaData.keywords}`,
  openGraph: {
    url: `${BASE_URL}`,

    title: 'Купить готовые комплекты видеонаблюдения в Новосибирске',
    description:
      'Широкий ассортимент комплектов и готовых систем видеонаблюдения в наличии в Новосибирске.',
    siteName: 'Опти Контроль',
    images: [
      {
        url: '/favicons/icon6.png',
        width: 800,
        height: 600,
      },
      {
        url: '/favicons/icon7.png',
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
