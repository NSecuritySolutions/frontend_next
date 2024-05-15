import efficiencyLogo from '@/assets/icons/Icons/new_releases.svg'
import safetyLogo from '@/assets/icons/Icons/encrypted.svg'
import reliabilityLogo from '@/assets/icons/Icons/charger.svg'
import thumbsLogo from '@/assets/icons/Icons/thumb_up.svg'
import mobileLogo from '@/assets/icons/speed.svg'

import banner from '@/assets/images/mobile/png/mobile-app.png'
import colors from '../colors'

export const cardAdvantagesData = [
  {
    id: 1,
    title: 'Надежность',
    logo: efficiencyLogo,
    backgroundColor: `${colors.backgroundBase3}`,
    listItem: [
      'Современное оборудование',
      'Система газоанализа',
      'Проводные/беспроводные извещатели',
    ],
  },
  {
    id: 2,
    title: 'Безопасность',
    logo: safetyLogo,
    backgroundColor: `${colors.backgroundBase3}`,
    listItem: [
      'Современное оборудование',
      'Система газоанализа',
      'Проводные/беспроводные извещатели',
    ],
  },
  {
    id: 3,
    title: 'Эффективность',
    logo: reliabilityLogo,
    backgroundColor: `${colors.backgroundCardGr}`,
    listItem: [
      'Удаленный доступ к прямому эфиру и архиву 24/7 с любых устройств (macOS, windows, iOS, Android)',
      'Учет рабочего времени, управление доступом на обьект, гостевые пропуска',
    ],
  },
  {
    id: 4,
    title: 'Удобство',
    logo: thumbsLogo,
    backgroundColor: `${colors.backgroundCardYe}`,
    listItem: [
      'Команда проектировщиков с огромным опытом',
      'Техники занимающиеся обслуживанием и монтажными работами оснащены профессиональным инструментом, ежегодно проходят тестирование',
    ],
  },
]

export const cardAdvantagesWithBannerData = [
  {
    id: 1,
    title: 'Быстрый доступ в мобильном приложении',
    banner: banner,
    backgroundColor: `${colors.backgroundCardBl}`,
    listItem: [
      'Смотрите видео с камер в личном кабинете через приложение на любом устройстве из любой точки мира',
      'Выводите трансляцию с камеры на сайт, чтобы клиенты могли наблюдать за приготовлением блюд или сбором заказов в прямом эфире',
      'Настраивате права доступа для разных пользователей',
    ],
  },
]
