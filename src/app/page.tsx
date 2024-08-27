import React from 'react'

import dynamic from 'next/dynamic'
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
import { ContactForm } from '../widgets/ContactForm'

import { ScrollButton } from '@/shared/components/ScrollButton'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

import { getMainPageData } from './api'

import styles from './page.module.css'

const Calculator = dynamic(
  () => import('@/widgets/Calculator').then((module) => module.Calculator),
  {
    ssr: false,
    loading: () => <></>,
  },
)

export const revalidate = 60

export default async function Page() {
  const {
    solutionData,
    solutionTags,
    teamData,
    examplesData,
    questionsData,
    productData,
    servicesData,
  } = await getMainPageData()

  const cookieStore = cookies()
  const hasCookie = cookieStore.has('agreedGuest')

  return (
    <main className={styles.main} id="content">
      <Info />
      <OurServices />
      <ReadySolutionSection data={{ solutions: solutionData, tags: solutionTags }} />
      <Calculator />
      <AdvantagesBlock />
      <ProjectStage />
      <OurTeam />
      <Questions questions={questionsData} />
      <ReviewsBlock />
      <ExamplesSlider />
      <OurClients />
      <ContactForm />
      <ScrollButton />
      {!hasCookie && <CookiesNotice />}
    </main>
  )
}
