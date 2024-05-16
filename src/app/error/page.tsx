'use client'

import { error505 } from '@/shared/constants/texts/error-505.ts'
import Error from '@/widgets/Error/ui/Error'

const ErrorPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <Error
      errorCode={error505.errorCode}
      errorText={error505.errorText}
      errorImg={error505.errorImg}
      errorMessage={error505.errorMessage}
    />
  )
}

export default ErrorPage
