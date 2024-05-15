import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://opticontrol.ru',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://opticontrol.ru/surveillance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://opticontrol.ru/acces-control-system',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },

    {
      url: 'https://opticontrol.ru/examples',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
