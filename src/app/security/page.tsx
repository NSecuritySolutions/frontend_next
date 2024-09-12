import { ContactForm } from '@/widgets/ContactForm'
import { Questions } from '@/widgets/Questions'
import { Calculator } from '@/widgets/Calculator'

import { PageBanner } from '@/shared/components/PageBanner'

import { getSecurityPageData } from '../api'

import styles from './page.module.css'

export default async function SecurityPage() {
  const { questionsData, productData } = await getSecurityPageData()

  return (
    <main className={styles.main}>
      <PageBanner
        id="security-banner"
        title="Комплексная защита с охранно-пожарными 
        сигнализациями для вашего дома и бизнеса"
        text="Надежные охранно-пожарные сигнализации для защиты Вашего имущества от взломов и пожаров"
        src="/images/banner/png/video-surveillance-banner.png"
      />
      <Questions data={questionsData} />
      <Calculator />
      <ContactForm />
    </main>
  )
}
