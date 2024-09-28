import { ContactForm } from '@/widgets/ContactForm'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import { Questions } from '@/widgets/Questions'
import { ProductCards } from '@/widgets/ProductCards'
import { Calculator } from '@/widgets/Calculator'
import { PageBanner } from '@/shared/components/PageBanner'
import { ISolution } from '@/widgets/ReadySolutionSection/types'

import { getVideoPageData } from '../api'

import styles from './page.module.css'

export const revalidate = 60

export default async function VideoPage() {
  const { solutionData, solutionTags, questionsData, productData } = await getVideoPageData()

  const filteredSolutions = solutionData.filter((solution: ISolution) =>
    solution.tags.some((tag) => tag.title === 'Видеонаблюдение'),
  )

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
        src="/images/banner/png/banner-video-sourveillance.png"
      />
      <ReadySolutionSection
        data={{ solutions: filteredSolutions, tags: solutionTags }}
        withTabs={false}
      />
      <ProductCards data={productData} />
      <Calculator />
      <Questions data={questionsData} />
      <ContactForm />
    </main>
  )
}
