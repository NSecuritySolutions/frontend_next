'use client'

import { Example } from '@/shared/Example'
import { workExamples } from '@/shared/constants/texts/examples'
import styles from './page.module.css'

export default function ExamplesPage({ params }: { params: { id: string } }) {
  const data = workExamples.filter((item) => item.id?.toString() === params.id)[0]

  return (
    <main className={styles.main} id="example">
      <Example data={data}></Example>
    </main>
  )
}
