// 'use client'
import { useEffect } from 'react'
import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'

import { OurWorksBanner } from '@/shared/components/VideoSurvBanner'

import styles from './page.module.css'
import { getVideoPageData } from '../api'

export default async function VideoPage() {
  const { solutionData, questionsData, productData } = await getVideoPageData()

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
      <ReadySolutionSection />
      <ProductCards data={productData} />
      <Questions />
      <ContactForm />
    </main>
  )
}
