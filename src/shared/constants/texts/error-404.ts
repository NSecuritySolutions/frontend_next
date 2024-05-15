import error404Img from '@/assets/errors/404/error404Img.png'

import { TError404 } from './types'

export const error404: TError404 = {
  id: 1,
  errorCode: '404',
  errorMessage: 'Данной страницы не существует',
  errorText: `Вернитесь на главную\u000Aили к каталогу наших систем безопасности`,
  errorImg: error404Img,
}
