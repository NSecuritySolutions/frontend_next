'use client'
import styles from './page.module.css'
import { Policy } from '@/shared/components/Policy'

export default function PolicyPage() {
  //@TODO -  useRef - сделать высоту контейнера c текстом универсальной.

  return (
    <main className={styles.main} id="policy">
      <Policy />
    </main>
  )
}
