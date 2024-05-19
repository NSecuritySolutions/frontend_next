//TODO настроить якоря когда будут все блоки сверстаны

const navColumnLists = [
  {
    title: 'Возможности',
    items: [
      { text: 'Оставить заявку', navLink: '/home#request' },
      { text: 'Готовые решения', navLink: '/home#solutions' },
      { text: 'Калькулятор', navLink: '/home#calculator' },
      { text: 'Загрузить спецификацию', navLink: '/home#specification' },
    ],
  },
  {
    title: 'Каталог оборудования',
    items: [
      { text: 'Видеонаблюдение', navLink: '/video-surveillance' },
      { text: 'Домофония/СКУД', navLink: '/domofon' },
      {
        text: 'Охранно-пожарная сигнализация',
        navLink: '/security',
      },
    ],
  },
  {
    title: 'Информация',
    items: [
      { text: 'О компании/ О нас', navLink: '/home#about-us' },
      { text: 'Наши услуги', navLink: '/home#our-services' },
      { text: 'Часто задаваемые вопросы', navLink: '/home#faq' },
      { text: 'Отзывы', navLink: '/home#reviews' },
      { text: 'Примеры наших работ', navLink: '/ourworks' },
      { text: 'Блог', navLink: '/home#blog' },
      { text: 'Политика конфиденциальности', navLink: '/home#privacy-policy' },
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
