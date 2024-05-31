import { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SecurityPage from './page'
import { BASE_URL } from '@/shared/constants/url/url'
import { OpenGraphMetaData } from '@/shared/constants/texts/metadata'
import { SecurityPageMetaData } from '@/shared/constants/texts/metadata'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),

  title: `${SecurityPageMetaData.title}`,
  description: `${SecurityPageMetaData.description}`,
  keywords: `${SecurityPageMetaData.keywords}`,

  openGraph: {
    url: `${BASE_URL}`,
    title: `${OpenGraphMetaData.title}`,
    description: `${OpenGraphMetaData.description}`,
    siteName: `${OpenGraphMetaData.siteName}`,
    images: [
      {
        url: '/favicons/icon6.png',
        width: 800,
        height: 600,
        alt: `${OpenGraphMetaData.alt}`,
      },
      {
        url: '/favicons/icon7.png',
        width: 1800,
        height: 1600,
        alt: `${OpenGraphMetaData.alt}`,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function SecurityPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
