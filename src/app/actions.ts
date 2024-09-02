'use server'

import { BASE_URL } from '@/shared/constants/url/url'

export async function createApplicationWithFile(formData: FormData) {
  const res = await fetch(`${BASE_URL}/api/v1/simple-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res.status
}

export async function createApplicationWithSolution(formData: FormData) {
  const res = await fetch(`${BASE_URL}/api/v1/solution-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res.status
}

export async function createApplicationWithCalc(formData: FormData) {
  const res = await fetch(`${BASE_URL}/api/v1/calc-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res.status
}
