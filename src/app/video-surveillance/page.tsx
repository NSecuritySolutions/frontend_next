// 'use client'
import { useEffect } from 'react'
import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'
import { Calculator } from '@/widgets/Calculator'
import { OurWorksBanner } from '@/shared/components/VideoSurvBanner'

import styles from './page.module.css'
import { getVideoPageData, getMainPageData } from '../api'

export const revalidate = 60

export default async function VideoPage() {
  const { solutionData, solutionTags, questionsData, productData } = await getVideoPageData()

  const { calculatorData } = await getMainPageData()

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
      <OurWorksBanner />
      <ReadySolutionSection data={{ solutions: solutionData, tags: solutionTags }} />
      <ProductCards data={productData} />
      <Questions questions={questionsData} />
      <Calculator products={productData} calculator={calculatorData} />
      <ContactForm />
    </main>
  )
}
