'use client'
import { fetchAndSetCsrfToken } from '@/app/actions'
import { useEffect } from 'react'

export default function CsrfTokenInitializer() {
  useEffect(() => {
    fetchAndSetCsrfToken()
  }, [])

  return null
}
