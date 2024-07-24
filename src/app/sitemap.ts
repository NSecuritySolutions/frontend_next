import type { MetadataRoute } from 'next'

import { BASE_URL } from '@/shared/constants/url/url'

import { items } from '@/shared/constants/texts/product-cards'

import { cardSolutionData } from '@/shared/constants/texts/cards-solution'

import { cardSolutionData2 } from '@/shared/constants/texts/cards-solution'

import { cardSolutionData3 } from '@/shared/constants/texts/cards-solution'

//@TODO - подтягивать данные из стора?

type CardSolution = {
  url: string
  lastModified?: string | Date | undefined
  changeFrequency?:
    | 'daily'
    | 'yearly'
    | 'always'
    | 'hourly'
    | 'weekly'
    | 'monthly'
    | 'never'
    | undefined
  priority?: number | undefined
  alternates?: { [key: string]: string } | undefined
}

export default function sitemap(): MetadataRoute.Sitemap {
  const cameras: CardSolution[] = items.map(({ id }) => ({
    url: `${BASE_URL}/cameras/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }))

  const solutions: CardSolution[] = cardSolutionData.map(({ id }) => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }))

  const solutions2: CardSolution[] = cardSolutionData2.map(({ id }) => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }))

  const solutions3: CardSolution[] = cardSolutionData3.map(({ id }) => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }))

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/security`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/video-surveillance`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/examples`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/ourworks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/intercom`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...cameras,
    ...solutions,
    ...solutions2,
    ...solutions3,
  ]
}
