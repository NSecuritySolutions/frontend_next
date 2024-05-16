import error505Img from '@/assets/errors/505/error505Img.png'
import warning505Img from '@/assets/errors/505/error505Warning.png'

import { TError505 } from './types'

export const error505: TError505 = {
  id: 1,
  errorCode: '505',
  errorMessage: 'Ошибка сервера',
  errorText:
    'Мы уже работаем над решением проблемы. Вы всегда можете заказать обратный звонок или связаться с нами по указанным контактам ',
  errorImg: error505Img,
}
