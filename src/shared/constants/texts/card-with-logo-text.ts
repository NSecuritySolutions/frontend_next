import mobileIcon from '@/assets/icons/cardInfo/phone.svg'
import shareIcon from '@/assets/icons/cardInfo/device.svg'
import cloudIcon from '@/assets/icons/cardInfo/filter.svg'
import desktopIcon from '@/assets/icons/cardInfo/desktop.svg'

import colors from '@/shared/constants/colors'

export const cardInfoWithLogoData = [
  {
    id: 1,
    title: 'Онлайн- управление',
    logo: mobileIcon,
    backgroundColor: `${colors.backgroundBase4}`,
    text: 'Подключение к настройкам из любого места, где есть интернет',
  },
  {
    id: 2,
    title: 'Простое масштабирование',
    logo: shareIcon,
    backgroundColor: `${colors.backgroundCardYe}`,
    text: 'Подключение неограниченного количества камер',
  },
  {
    id: 3,
    title: 'Архив записей',
    logo: cloudIcon,
    backgroundColor: `${colors.backgroundCardGr}`,
    text: 'Просмотр записей в мобильном приложении или браузере',
  },
  {
    id: 4,
    title: 'Публичные трансляции',
    logo: desktopIcon,
    backgroundColor: `${colors.backgroundBase3}`,
    text: 'Трансляция видео с камер на сайте вашей компании',
  },
]
