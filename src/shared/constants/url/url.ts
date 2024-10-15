export const YANDEX_URL = 'https://market.yandex.ru/'
export const BASE_URL =
  typeof window === 'undefined'
    ? process.env.BASE_URL || 'http://backend:8000'
    : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost'
