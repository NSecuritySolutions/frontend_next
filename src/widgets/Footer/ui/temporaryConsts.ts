//TODO настроить якоря когда будут все блоки сверстаны

const navColumnLists = [
  {
    title: 'Возможности',
    items: [
      { text: 'Оставить заявку', navLink: '/#contact-form' },
      { text: 'Готовые решения', navLink: '/#solutions' },
      { text: 'Калькулятор', navLink: '/#calculator' },
      { text: 'Загрузить спецификацию', navLink: '/#contact-form' },
    ],
  },
  {
    title: 'Каталог оборудования',
    items: [
      { text: 'Видеонаблюдение', navLink: '/video-surveillance' },
      { text: 'Домофония/СКУД', navLink: '/intercom' },
      {
        text: 'Охранно-пожарная сигнализация',
        navLink: '/security',
      },
    ],
  },
  {
    title: 'Информация',
    items: [
      { text: 'Наши услуги', navLink: '/#our-services' },
      { text: 'Преимущества', navLink: '/#advantages' },
      { text: 'Этапы работы', navLink: '/#project-stages' },
      { text: 'Наша команда', navLink: '/#our-team' },
      { text: 'Часто задаваемые вопросы', navLink: '/#faq' },
      { text: 'Отзывы', navLink: '/#reviews' },
      { text: 'Примеры наших работ', navLink: '/ourworks' },
      { text: 'Политика конфиденциальности', navLink: '/policy' },
    ],
  },
]

const contacts = [
  {
    icon: '/icons/footer/phone.svg',
    text: '+7 (913) 011-06-45',
    link: 'tel:+79130110645',
  },
  // {
  //   icon: '/icons/footer/home.svg',
  //   text: 'Новосибирск, ул. Сухарная д. 96',
  //   link: '',
  // },
  {
    icon: '/icons/footer/mail.svg',
    text: 'info@opticontrol.ru',
    link: 'mailto:info@opticontrol.ru',
  },
]

export { navColumnLists, contacts }
