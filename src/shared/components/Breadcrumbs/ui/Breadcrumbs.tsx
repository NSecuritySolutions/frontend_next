'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'
import { Nav, Text } from './styled'
import { urlNames } from '@/shared/constants/texts/url-names'

interface BreadcrumbsProps {
  title?: string
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title }) => {
  const pathname = usePathname()
  const excludePathnames = ['', 'products', 'examples', 'cameras', 'sets']

  if (!pathname) return <></>

  const pathnames = pathname
    .split('/')
    .filter((path) => !excludePathnames.includes(path) && path !== '')

  return (
    <Nav>
      <Link href="/">
        <Text>Главная</Text>
      </Link>
      {pathnames.map((path, index) => {
        const to = pathname.split(path)[0] + path
        return (
          <React.Fragment key={index}>
            <Text>/</Text>
            <Text>
              <Link href={to} key={index}>
                {urlNames[path as keyof typeof urlNames] || title}
              </Link>
            </Text>
          </React.Fragment>
        )
      })}
    </Nav>
  )
}

export default Breadcrumbs
