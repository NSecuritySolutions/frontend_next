import efficiencyLogo from '@/assets/icons/Icons/new_releases.svg'
import safetyLogo from '@/assets/icons/Icons/encrypted.svg'
import reliabilityLogo from '@/assets/icons/Icons/charger.svg'
import thumbsLogo from '@/assets/icons/Icons/thumb_up.svg'

import banner from '@/assets/images/mobile/png/mobile-app.png'
import colors from '../colors'

export const cardAdvantagesData = [
  {
    id: 1,
    title: 'Надежность',
    logo: efficiencyLogo,
    backgroundColor: `${colors.backgroundPrimary}`,
    listItem: [
      'Применение проверенных технологий',
      'Гарантированная работоспособность системы',
      'Резервное копирование данных',
    ],
  },
  {
    id: 2,
    title: 'Безопасность',
    logo: safetyLogo,
    backgroundColor: `${colors.backgroundBase3}`,
    listItem: [
      'Шифрование передаваемой информации',
      'Доступ по принципу «только для авторизованных лиц»',
      'Система оповещения о несанкционированных действиях',
    ],
  },
  {
    id: 3,
    title: 'Эффективность',
    logo: reliabilityLogo,
    backgroundColor: `${colors.backgroundCardGr}`,
    listItem: [
      'Автоматизация процессов мониторинга и управления',
      'Использование аналитики для оптимизации работы системы',
      'Мгновенное реагирование на чрезвычайные ситуации',
    ],
  },
  {
    id: 4,
    title: 'Удобство',
    logo: thumbsLogo,
    backgroundColor: `${colors.backgroundCardYe}`,
    listItem: [
      'Интуитивно понятный интерфейс',
      'Возможность интеграции с другими системами безопасности',
      'Техническая поддержка и консультации для пользователя',
    ],
  },
]

export const cardAdvantagesWithBannerData = [
  {
    id: 1,
    title: 'Быстрый доступ в мобильном приложении',
    banner: '/images/banner/png/ic-advantages-banner.png',
    logo: '/icons/speed.svg',
    backgroundColor: `${colors.backgroundCardBl}`,
    listItem: [
      'Удаленный доступ к прямому эфиру и архиву в личном кабинете из любой точки мира 24/7',
      'Гибкость настройки параметров системы',
      'Поддержка различных типов устройств: macOS, Windows, iOS, Android',
    ],
  },
]
