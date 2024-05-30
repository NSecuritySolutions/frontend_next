'use client'

import React from 'react'

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
      <CookiesNotice />
    </main>
  )
}
