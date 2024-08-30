import { ContactForm } from '@/widgets/ContactForm'

import ExampleCard from '@/shared/components/ExampleCard/ui/ExampleCard'

import styles from './page.module.css'
import { getOurWorksPageData } from '../api'

export default async function OurworksPage() {
  const examples = await getOurWorksPageData()

  return (
    <main className={styles.main} id="ourworks">
      <ExampleCard data={examples} />
      <ContactForm />
    </main>
  )
}
