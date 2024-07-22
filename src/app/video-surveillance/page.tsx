import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'
import { BASE_URL } from '@/shared/constants/url/url'

import { OurWorksBanner } from '@/shared/components/VideoSurvBanner'

import styles from './page.module.css'

async function getData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/?category=Камера`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [solutionData, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    solutionData,
    questionsData,
    productData,
  }
}

export default async function VideoPage() {
  const { solutionData, questionsData, productData } = await getData()

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
