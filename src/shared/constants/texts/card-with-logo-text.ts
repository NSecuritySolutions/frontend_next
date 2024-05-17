import mobileIcon from '@/assets/icons/cardwithlogo/phone.svg'
import shareIcon from '@/assets/icons/cardwithlogo/Ic_workspace_premium.svg'
import cloudIcon from '@/assets/icons/cardwithlogo/Ic_acute.svg'
import desktopIcon from '@/assets/icons/cardwithlogo/Ic_id_card.svg'

import colors from '@/shared/constants/colors'

export const cardInfoWithLogoData = [
  {
    id: 1,
    title: 'Онлайн- управление',
    logo: mobileIcon,
    backgroundColor: `${colors.backgroundBase4}`,
    text: 'Удаленный контроль объекта из любой точки мира, где есть интернет',
  },
  {
    id: 2,
    title: 'Гарантия качества',
    logo: shareIcon,
    backgroundColor: `${colors.backgroundCardYe}`,
    text: 'Расширенная гарантия на монтажные работы и оборудование до 5 лет',
  },
  {
    id: 3,
    title: 'Оперативный монтаж',
    logo: cloudIcon,
    backgroundColor: `${colors.backgroundCardGr}`,
    text: 'Выезд на замеры для проведения монтажа в течение 24 часов',
  },
  {
    id: 4,
    title: 'Лицензия МЧС',
    logo: desktopIcon,
    backgroundColor: `${colors.backgroundBase3}`,
    text: 'Бессрочная лицензия МЧС на все виды работ',
  },
]
