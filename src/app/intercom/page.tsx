import { ContactForm } from '@/widgets/ContactForm'
import { Questions } from '@/widgets/Questions'
import { Calculator } from '@/widgets/Calculator'

import { PageBanner } from '@/shared/components/PageBanner'

import { getDomofonPageData } from '../api'

import styles from './page.module.css'

export default async function DomofonPage() {
  const { calculatorData, questionsData, productData } = await getDomofonPageData()

  return (
    <main className={styles.main}>
      <PageBanner
        id="intercom-banner"
        title="Контроль доступа и обеспечение безопасности
        с домофонией и СКУД"
        text="Удобные в управлении домофоны и системы контроля доступа (СКУД) выского качества
        обеспечивают полную безопасность вашего дома или офиса"
        src="/images/banner/png/video-surveillance-banner.png"
      />
      <Questions questions={questionsData} />
      <Calculator products={productData} calculator={calculatorData} />
      <ContactForm />
    </main>
  )
}
