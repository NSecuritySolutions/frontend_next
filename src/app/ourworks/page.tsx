import { cookies } from 'next/headers'

import { ContactForm } from '@/widgets/ContactForm'

import ExampleCard from '@/shared/components/ExampleCard/ui/ExampleCard'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

import styles from './page.module.css'

export default function OurworksPage() {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('agreedGuest')
  return (
    <main className={styles.main} id="ourworks">
      <section style={{ marginTop: '170px' }}>
        <h1>Наши работы, страница в разработке</h1>
      </section>
      <ExampleCard />
      <ContactForm />
      {!hasCookie && <CookiesNotice />}
    </main>
  )
}
