'use client'

import { Example } from '@/widgets/Example'
import { workExamples } from '@/shared/constants/texts/examples'
import styles from './page.module.css'
import { getExampleById } from '@/app/api'

export default async function ExamplesPage({ params }: { params: { id: string } }) {
  const data = await getExampleById(params.id)

  return (
    <main className={styles.main} id="example">
      <Example data={data}></Example>
    </main>
  )
}
