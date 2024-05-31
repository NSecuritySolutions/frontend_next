import { ContactForm } from '@/widgets/ContactForm'

import ExampleCard from '@/shared/components/ExampleCard/ui/ExampleCard'

import styles from './page.module.css'

export default function OurworksPage() {
  return (
    <main className={styles.main} id="ourworks">
      <section style={{ margin: '50px 0 0 0' }}>
        <h1>Наши работы, страница в разработке</h1>
      </section>
      <ExampleCard />
      <ContactForm />
    </main>
  )
}
