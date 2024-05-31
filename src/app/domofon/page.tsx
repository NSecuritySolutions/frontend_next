import { ContactForm } from '@/widgets/ContactForm'
import styles from './page.module.css'

export default function DomofonPage() {
  return (
    <main>
      <section className={styles.main} id="domofon">
        <h1>Домофония, страница в разработке</h1>
      </section>
      <ContactForm />
    </main>
  )
}
