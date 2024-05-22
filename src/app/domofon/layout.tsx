import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import DomofonPage from './page'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BASE_URL } from '@/shared/constants/url/url'
import { DomofonPageMetaData } from '@/shared/constants/texts/metadata'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),

  title: `${DomofonPageMetaData.title}`,
  description: `${DomofonPageMetaData.description}`,
  keywords: `${DomofonPageMetaData.keywords}`,
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

export default function DomofonPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DomofonPage />
}
