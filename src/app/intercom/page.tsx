import { ContactForm } from '@/widgets/ContactForm'
import styles from './page.module.css'

export default function DomofonPage() {
  return (
    <main className={styles.main}>
      <section style={{ margin: '164px 0' }} id="intercom">
        <h1>Домофония, страница в разработке</h1>
      </section>
      <ContactForm />
    </main>
  )
}
