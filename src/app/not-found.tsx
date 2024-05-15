'use client'

import { error404 } from '@/shared/constants/texts/error-404.ts'
import Error from '@/widgets/Error/ui/Error'

const NotFound = () => {
  return (
    <Error
      errorCode={error404.errorCode}
      errorText={error404.errorText}
      errorImg={error404.errorImg}
      warningImg={error404.warningImg}
      errorMessage={error404.errorMessage}
    />
  )
}

export default NotFound
