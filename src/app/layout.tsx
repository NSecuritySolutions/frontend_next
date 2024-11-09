import { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import '@/app/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { headerNavLinks } from '@/shared/constants/texts/header-nav-items'
import { RootPageMetaData } from '@/shared/constants/texts/metadata'
import { OpenGraphMetaData } from '@/shared/constants/texts/metadata'
import { FormModal } from '@/shared/components/FormModal'
import { BASE_URL } from '@/shared/constants/url/url'

import StyledComponentsRegistry from '@/app/styling/registry'

import { StoreProvider } from './store/calculatorStoreProvider'
import { getCalculatorData, getLayoutData } from './api'
import { FormStoreProvider } from './store/formModalStoreProvider'
import CsrfTokenInitializer from '@/widgets/CsrfToken/CsrfToken'

const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { productData, calculatorData } = await getCalculatorData()
  const { companyInfoData } = await getLayoutData()

  return (
    <html lang="ru">
      <body className={manrope.className} id="content">
        <StyledComponentsRegistry>
          <FormStoreProvider>
            <Header navLinks={headerNavLinks} data={companyInfoData} />
            <StoreProvider products={productData} calculator={calculatorData}>
              <CsrfTokenInitializer />
              {children}
              <FormModal />
            </StoreProvider>
            <Footer data={companyInfoData} />
          </FormStoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
