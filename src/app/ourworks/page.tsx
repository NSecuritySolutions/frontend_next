'use client'
import { headerNavLinks } from '@/shared/constants/texts/header-nav-items'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import styles from './page.module.css'

export default function OurworksPage() {
  return (
    <>
      <Header navLinks={headerNavLinks} />
      <main className={styles.main}>
        <h1>Наши работы, страница в разработке</h1>
      </main>
      <Footer />
    </>
  )
}
