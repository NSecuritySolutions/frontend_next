import { ContactForm } from '@/widgets/ContactForm'

import styles from './page.module.css'
import { Questions } from '@/widgets/Questions'
import { ReadySolutionSection } from '@/widgets/ReadySolutionSection'
import VideoSurvBanner from '@/shared/components/VideoSurvBanner/ui/VideoSurvBanner'

export default function VideoPage() {
  return (
    <main className={styles.main}>
      <VideoSurvBanner />
      <ReadySolutionSection />
      <Questions />
      <ContactForm />
    </main>
  )
}
