import { Product } from '@/widgets/Product'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
import styles from './page.module.css'
import { getProductById } from '@/app/api'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getProductById(params.id)

  return (
    <main className={styles.main} id="product">
      <Breadcrumbs title={data.model} />
      <Product data={data} />
    </main>
  )
}
