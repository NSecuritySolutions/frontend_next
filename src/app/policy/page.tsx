import styles from './page.module.css'
import { Policy } from '@/shared/components/Policy'

export default function PolicyPage() {
  return (
    <main className={styles.main} id="policy">
      <Policy />
    </main>
  )
}
