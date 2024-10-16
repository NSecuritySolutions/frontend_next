import { ContactForm } from '@/widgets/ContactForm'
import { Questions } from '@/widgets/Questions'
import { Calculator } from '@/widgets/Calculator'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { PageBanner } from '@/shared/components/PageBanner'
import { ProductCards } from '@/widgets/ProductCards'
import { ISolution } from '@/widgets/ReadySolutionSection/types'

import { getSecurityPageData } from '../api'

import styles from './page.module.css'

export const revalidate = 60

export default async function SecurityPage() {
  const { solutionData, solutionTags, questionsData, productData } = await getSecurityPageData()

  const filteredSolutions = solutionData.filter((solution: ISolution) =>
    solution.tags.some((tag) => tag.title === 'Охранно-пожарная сигнализация'),
  )

  return (
    <main className={styles.main}>
      <PageBanner
        id="security-banner"
        title="Комплексная защита с охранно-пожарными сигнализациями
        для вашего дома и бизнеса"
        text="Надежные охранно-пожарные сигнализации для защиты Вашего имущества от взломов и пожаров"
        src="/images/banner/png/banner-security.png"
      />
      <ReadySolutionSection
        data={{ solutions: filteredSolutions, tags: solutionTags }}
        withTabs={false}
      />
      <ProductCards data={productData} />
      <Calculator />
      <Questions data={questionsData} />
      <ContactForm />
    </main>
  )
}
