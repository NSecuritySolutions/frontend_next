'use client'

import { ContactForm } from '@/widgets/ContactForm'
import styles from './page.module.css'

export default function OurworksPage() {
  return (
    <main className={styles.main} id="ourworks">
      <section className={styles.main}>
        <h1>Наши работы, страница в разработке</h1>
      </section>
      {/* <ExampleCard /> */}
      <ContactForm />
    </main>
  )
}
