import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'

import { OurWorksBanner } from '@/shared/components/VideoSurvBanner'

import styles from './page.module.css'
import { getVideoPageData } from '../api'

export default async function VideoPage() {
  const { solutionData, questionsData, productData } = await getVideoPageData()

  return (
    <main className={styles.main}>
      <OurWorksBanner />
      <ReadySolutionSection />
      <ProductCards data={productData} />
      <Questions />
      <ContactForm />
    </main>
  )
}
