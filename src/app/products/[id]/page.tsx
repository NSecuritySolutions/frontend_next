import { Product } from '@/widgets/Product'
import { cardSolutionData } from '@/shared/constants/texts/cards-solution'

import styles from './page.module.css'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'

export default function Page({ params }: { params: { id: string } }) {
  const data = cardSolutionData.filter((solution) => solution.id?.toString() === params.id)[0]

  return (
    <main className={styles.main} id="content">
      <Breadcrumbs title={data.title} />
      <Product data={data} />
    </main>
  )
}
