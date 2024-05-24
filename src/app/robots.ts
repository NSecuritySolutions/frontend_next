//@TODO: Требует настройки
// Для запрета папки сайта следует указать следующее: disallow: /folder/ : https://www.altera-media.com/information/expert/pravilnaya-nastrojka-robots-txt/

//Пример МВидео : https://www.mvideo.ru/robots.txt

import { BASE_URL } from '@/shared/constants/url/url'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: ['/'], disallow: [] },
      {
        userAgent: ['Yandex'],
        allow: [],
        //@TODO : после диплоя на настоящий домен здесь надо будет прописать правила
        disallow: ['/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: `${BASE_URL}`,
  }
}
