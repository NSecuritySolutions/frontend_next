// 'use client'
// import { useEffect } from 'react'

import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'
import { Calculator } from '@/widgets/Calculator'
import { PageBanner } from '@/shared/components/PageBanner'

import { getVideoPageData } from '../api'

import styles from './page.module.css'

export const revalidate = 60

export default async function VideoPage() {
  const { solutionData, solutionTags, questionsData, productData, calculatorData } = await getVideoPageData()

  // useEffect(() => {
  //   const targetCardID = localStorage.getItem('id')

  //   if (targetCardID) {
  //     const element = document.getElementById(targetCardID)
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }
  //   localStorage.removeItem('id')
  // }, [])

  return (
    <main className={styles.main}>
      <PageBanner
        id="surveillance-banner"
        title="Широкий ассортимент камер и готовых решений видеонаблюдения для дома и бизнеса"
        text="Наши камеры имеют широкий угол обзора и обеспечивают отличное качество изображения даже во
          время ночной съемки или непогоды"
        src="/images/banner/png/video-surveillance-banner.png"
      />
      <ReadySolutionSection data={{ solutions: solutionData, tags: solutionTags }} />
      <ProductCards data={productData} />
      <Questions questions={questionsData} />
      <Calculator products={productData} calculator={calculatorData} />
      <ContactForm />
    </main>
  )
}
