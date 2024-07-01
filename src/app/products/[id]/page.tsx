import { Product } from '@/widgets/Product'
import { cardSolutionData } from '@/shared/constants/texts/cards-solution'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
import styles from './page.module.css'

export default function Page({ params }: { params: { id: string } }) {
  const data = cardSolutionData.filter((solution) => solution.id?.toString() === params.id)[0]

  return (
    <main className={styles.main} id="product">
      <Breadcrumbs title={data.title} />
      <Product data={data} />
    </main>
  )
}
