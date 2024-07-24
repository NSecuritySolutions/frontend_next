'use client'

import { useEffect } from 'react'

import { Product } from '@/widgets/Product'

import { Breadcrumbs } from '@/shared/components/Breadcrumbs'

import { items } from '@/shared/constants/texts/product-cards'

import styles from './page.module.css'

export default function Page({ params }: { params: { id: string } }) {
  const data = items.filter((item) => item.id?.toString() === params.id)[0]

  useEffect(() => {
    localStorage.setItem('id', params.id)
  }),
    []

  return (
    <main className={styles.main} id="product-item">
      <Breadcrumbs title={data.title} />

      <Product data={data} />
    </main>
  )
}
