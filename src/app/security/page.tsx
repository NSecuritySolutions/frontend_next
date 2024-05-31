import { ContactForm } from '@/widgets/ContactForm'
import styles from './page.module.css'

export default function SecurityPage() {
  return (
    <main className={styles.main}>
      <section style={{ margin: '164px 0' }} id="security">
        <h1>Охранно-пожарная, страница в разработке</h1>
      </section>
      <ContactForm></ContactForm>
    </main>
  )
}
