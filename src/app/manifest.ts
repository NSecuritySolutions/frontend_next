import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ОПТИКОНТРОЛЬ - безопастность для дачи и офиса',
    short_name: 'ОПТИКОНТРОЛЬ',
    description:
      'Интернет-магазин комплексных решений по охране офисов,  помещений, складов, дач и частных домов с использованием видеонаблюдения, СКУД, домофонов, датчиков охранно-пожарной сигнализации.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'ru',
    icons: [
      {
        src: '/favicons/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
