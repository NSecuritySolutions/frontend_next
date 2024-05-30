import React from 'react'

import { cookies } from 'next/headers'

import { Info } from '@/widgets/Info'
import { OurServices } from '@/widgets/OurServices'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { AdvantagesBlock } from '@/widgets/AdvantagesBlock'
import { ProjectStage } from '@/widgets/ProjectStage'
import { OurTeam } from '@/widgets/OurTeam'
import { Questions } from '@/widgets/Questions'
import { ReviewsBlock } from '@/widgets/ReviewsBlock'
import { ExamplesSlider } from '@/widgets/ExamplesSlider'
import { OurClients } from '@/widgets/OurClients'
import { Calculator } from '@/widgets/Calculator'
import { ContactForm } from '../widgets/ContactForm'

import { ScrollButton } from '@/shared/components/ScrollButton'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

import styles from './page.module.css'

export default function Home() {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('agreedGuest')
  return (
    <main className={styles.main} id="content">
      <Info />
      <OurServices />
      <ReadySolutionSection />
      <Calculator />
      <AdvantagesBlock />
      <ProjectStage />
      <OurTeam />
      <Questions />
      <ReviewsBlock />
      <ExamplesSlider />
      <OurClients />
      <ContactForm />
      <ScrollButton />
      {!hasCookie && <CookiesNotice />}
    </main>
  )
}
