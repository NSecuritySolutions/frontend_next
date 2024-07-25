import { ContactForm } from '@/widgets/ContactForm'
import { Questions } from '@/widgets/Questions'
import { Calculator } from '@/widgets/Calculator'

import { getVideoPageData, getMainPageData } from '../api'

import styles from './page.module.css'

export default async function DomofonPage() {
  const { productData } = await getVideoPageData()
  const { calculatorData, questionsData } = await getMainPageData()

  return (
    <main className={styles.main}>
      <section style={{ margin: '164px 0' }} id="intercom">
        <h1>Домофония, страница в разработке</h1>
      </section>
      <Questions questions={questionsData} />
      <Calculator products={productData} calculator={calculatorData} />
      <ContactForm />
    </main>
  )
}
