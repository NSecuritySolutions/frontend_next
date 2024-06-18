'use client'

import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'

import VideoSurvBanner from '@/shared/components/VideoSurvBanner/ui/VideoSurvBanner'

import styles from './page.module.css'

export default function VideoPage() {
  return (
    <main className={styles.main}>
      <VideoSurvBanner />
      <ReadySolutionSection />
      <ProductCards />
      <Questions />
      <ContactForm />
    </main>
  )
}
