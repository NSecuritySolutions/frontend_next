import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
import styles from './page.module.css'
import { getSolutionById } from '@/app/api'
import { Solution } from '@/widgets/Solution'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getSolutionById(params.id)

  return (
    <main className={styles.main} id="product">
      <Breadcrumbs title={data.title} />
      <Solution data={data} />
    </main>
  )
}
