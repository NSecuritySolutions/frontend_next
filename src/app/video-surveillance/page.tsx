import { ContactForm } from '@/widgets/ContactForm'

import styles from './page.module.css'

export default function VideoPage() {
  return (
    <main className={styles.main}>
      <section style={{ margin: '164px 0' }} id="video-surveillance">
        <h1>Видеонаблюдение, страница в разработке</h1>
      </section>
      <ContactForm />
    </main>
  )
}
