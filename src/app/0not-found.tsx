'use client'
import { headerNavLinks } from '@/shared/constants/texts/header-nav-items'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { error404 } from '@/shared/constants/texts/error-404.ts'

import styles from './page.module.css'
import Error from '../widgets/Error/ui/Error'

const NotFound = () => {
  return (
    <>
      <Header navLinks={headerNavLinks} />
      <main>
        <Error
          errorCode={error404.errorCode}
          errorText={error404.errorText}
          errorImg={error404.errorImg}
          warningImg={error404.warningImg}
          errorMessage={error404.errorMessage}
        />
      </main>
      <Footer />
    </>
  )
}

export default NotFound
