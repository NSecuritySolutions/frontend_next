'use client'

import { createContext, useContext, ReactNode, FC } from 'react'
import calculatorStore, { CalculatorStore } from '@/app/store/calculatorStore'
import { ICalculatorData, TProduct } from '@/widgets/Calculator/types'

const StoreContext = createContext<CalculatorStore | null>(null)

export const StoreProvider: FC<{
  products: TProduct[]
  calculator: ICalculatorData[]
  children: ReactNode
}> = ({ products, calculator, children }) => {
  const store = calculatorStore
  if (!store.data.length) store.getData(products, calculator)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}
