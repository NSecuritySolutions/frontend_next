'use client'

import { createContext, useContext, ReactNode, FC } from 'react'
import { FormModalStore } from '@/app/store/formModalStore'

const FormStoreContext = createContext<FormModalStore | null>(null)

export const FormStoreProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const store = new FormModalStore()
  return <FormStoreContext.Provider value={store}>{children}</FormStoreContext.Provider>
}

export const useFormStore = () => {
  const store = useContext(FormStoreContext)
  if (!store) {
    throw new Error('useFormStore must be used within a FormStoreProvider')
  }
  return store
}
