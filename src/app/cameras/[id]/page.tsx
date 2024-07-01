import { Product } from '@/widgets/Product'
import styles from './page.module.css'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
import { items } from '@/shared/constants/texts/product-cards'

export default function Page({ params }: { params: { id: string } }) {
  const data = items.filter((item) => item.id?.toString() === params.id)[0]

  return (
    <main className={styles.main} id="product-item">
      <Breadcrumbs title={data.title} />

      <Product data={data} />
    </main>
  )
}
