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
import styles from './page.module.css'
import { BASE_URL } from '@/shared/constants/url/url'

const Calculator = dynamic(
  () => import('@/widgets/Calculator').then((module) => module.Calculator),
  {
    ssr: false,
    loading: () => <></>,
  },
)

export const revalidate = 60

async function getData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/our-team/`),
    fetch(`${BASE_URL}/api/v1/our-works/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/`),
    fetch(`${BASE_URL}/api/v1/calculator/`),
    fetch(`${BASE_URL}/api/v1/our-services/`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [
    solutionData,
    teamData,
    examplesData,
    questionsData,
    productData,
    calculatorData,
    servicesData,
  ] = await Promise.all(responses.map((response) => response.json()))

  return {
    solutionData,
    teamData,
    examplesData,
    questionsData,
    productData,
    calculatorData,
    servicesData,
  }
}

export default async function Page() {
  const {
    solutionData,
    teamData,
    examplesData,
    questionsData,
    productData,
    calculatorData,
    servicesData,
  } = await getData()

  const cookieStore = cookies()
  const hasCookie = cookieStore.has('agreedGuest')

  return (
    <main className={styles.main} id="content">
      <Info />
      <OurServices />
      <ReadySolutionSection />
      <Calculator products={productData} calculator={calculatorData} />
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
