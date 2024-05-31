import { cookies } from 'next/headers'
import { CookiesNotice } from '@/shared/components/CookiesNotice'

import styles from './page.module.css'
import { Policy } from '@/shared/components/Policy'

export default function PolicyPage() {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('agreedGuest')
  return (
    <main className={styles.main} id="policy">
      <Policy />
      {!hasCookie && <CookiesNotice />}
    </main>
  )
}
