'use client'

import { ContactForm } from '@/widgets/ContactForm'
import styles from './page.module.css'
import ExampleCard from '@/shared/components/ExampleCard/ui/ExampleCard'

export default function OurworksPage() {
  return (
    <main className={styles.main} id="ourworks">
      <section style={{ marginTop: '170px' }}>
        <h1>Наши работы, страница в разработке</h1>
      </section>
      <ExampleCard />
      <ContactForm />
    </main>
  )
}
