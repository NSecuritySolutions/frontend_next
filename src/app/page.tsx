'use client'

import React, { useEffect, useState } from 'react'
import Loader from '@/shared/components/Loader/Loader'

import styles from './page.module.css'

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
import { CookiesContainer } from '@/shared/components/CookiesNotice/ui/styled'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

export default function Home() {
  //@TODO : если вдруг понадобится в последствии - лоудер работает до тех пор пока не загрузит картинки...

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 0)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
          <CookiesNotice /> :
        </>
      )}
    </>
  )
}
