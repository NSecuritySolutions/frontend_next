import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Typography } from '@/shared/components/Typography'
import { FC } from 'react'
import { Nav } from './styled'

interface BreadcrumbsProps {
  title?: string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title }) => {
  const pathname = usePathname()
  const excludePathnames = ['products', 'examples']

  if (!pathname) return <></>

  const pathnames = pathname
    .split('/')
    .filter((path) => !excludePathnames.includes(path) && path !== '')

  const names = {
    'video-surveillance': 'Видеонаблюдение',
    domofon: 'Домофония/Скуд',
    security: 'Охранно-пожарная сигнализация',
    ourworks: 'Наши работы',
  }
  // console.log(pathname, 'name')
  // console.log(pathnames, 'names')
  return (
    <Nav>
      <Link href="/">
        <Typography $weight={800} size={18}>
          Главная
        </Typography>
      </Link>
      {pathnames.map((path, index) => {
        const to = pathname.split(path)[0] + path
        return (
          <Typography $weight={800} size={18} key={index} style={{ gap: 12 }}>
            /
            <Link href={to} key={index}>
              {names[path as keyof typeof names] || title}
            </Link>
          </Typography>
        )
      })}
    </Nav>
  )
}

export default Breadcrumbs
