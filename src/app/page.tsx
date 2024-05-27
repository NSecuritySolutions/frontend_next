'use client'

import React, { useEffect, useState } from 'react'

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
import Cookies from 'js-cookie'
import { ScrollButton } from '@/shared/components/ScrollButton'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 0)
  }, [])

  // Cookies.set('guest', 'first-visit', { expires: 7 })
  // Cookies.remove('')

  return (
    <>
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
    </>
  )
}
