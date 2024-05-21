//@TODO: Требует настройки
// Для запрета папки сайта следует указать следующее: disallow: /folder/ : https://www.altera-media.com/information/expert/pravilnaya-nastrojka-robots-txt/

//Пример МВидео : https://www.mvideo.ru/robots.txt

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: ['/'], disallow: [] },
      {
        userAgent: ['Yandex'],
        allow: ['/'],
        disallow: [],
      },
    ],
    sitemap: 'http://localhost:3000/sitemap.xml',
    host: 'http://localhost:3000',
  }
}
