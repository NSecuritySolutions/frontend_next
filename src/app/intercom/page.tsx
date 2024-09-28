import { ContactForm } from '@/widgets/ContactForm'
import { Questions } from '@/widgets/Questions'
import { Calculator } from '@/widgets/Calculator'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { PageBanner } from '@/shared/components/PageBanner'
import { ISolution } from '@/widgets/ReadySolutionSection/types'

import { getDomofonPageData } from '../api'

import styles from './page.module.css'

export default async function DomofonPage() {
  const { solutionData, solutionTags, questionsData, productData } = await getDomofonPageData()

  const filteredSolutions = solutionData.filter((solution: ISolution) =>
    solution.tags.some((tag) => tag.title === 'Домофония / СКУД'),
  )

  return (
    <main className={styles.main}>
      <PageBanner
        id="intercom-banner"
        title="Контроль доступа и обеспечение безопасности
        с домофонией и СКУД"
        text="Удобные в управлении домофоны и системы контроля доступа (СКУД) выского качества
        обеспечивают полную безопасность вашего дома или офиса"
        src="/images/banner/png/banner-intercom.png"
      />
      <ReadySolutionSection
        data={{ solutions: filteredSolutions, tags: solutionTags }}
        withTabs={false}
      />
      <Calculator />
      <Questions data={questionsData} />
      <ContactForm />
    </main>
  )
}
