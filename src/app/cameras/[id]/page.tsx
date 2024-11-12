// 'use client'

import { useEffect } from 'react'

import { Product } from '@/widgets/Product'

import { Breadcrumbs } from '@/shared/components/Breadcrumbs'

import { items } from '@/shared/constants/texts/product-cards'

import styles from './page.module.css'

import { getVideoPageData } from '@/app/api'

import { IProduct } from '@/widgets/Calculator/types'

export default async function Page({ params }: { params: { id: string } }) {
  const { solutionData, questionsData, productData } = await getVideoPageData()

  const data = productData.filter((item: IProduct) => item.id?.toString() === params.id)[0]

  // useEffect(() => {
  //   localStorage.setItem('id', params.id)
  // }),
  //   []

  return (
    <main className={styles.main} id="product-item">
      <Breadcrumbs title={data.title} />
      <Product data={data} />
    </main>
  )
}
