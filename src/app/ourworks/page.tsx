import { ContactForm } from '@/widgets/ContactForm'

import ExampleCard from '@/shared/components/ExampleCard/ui/ExampleCard'

import styles from './page.module.css'

export default function OurworksPage() {
  return (
    <main className={styles.main} id="ourworks">
      <ExampleCard />
      <ContactForm />
    </main>
  )
}
