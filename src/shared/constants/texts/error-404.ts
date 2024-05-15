import error404Img from '@/assets/errors/404/error404Img.png'
import warning404Img from '@/assets/errors/404/warning404Img.png'

import { TError404 } from './types'

export const error404: TError404 = {
  id: 1,
  errorCode: '404',
  errorMessage: 'Такой страницы нет...',
  errorText: `Наша компания предоставляет специалистов высокой квалификации, которые быстро и\u00A0качественно установят все необходимое оборудование.`,
  errorImg: error404Img,
  warningImg: warning404Img,
}
