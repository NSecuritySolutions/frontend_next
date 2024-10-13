import { BASE_URL } from '@/shared/constants/url/url'

// const BASE_URL = 'https://ambas-1.ddns.net'

export async function createApplicationWithFile(formData: FormData) {
  const res = await fetch(`${BASE_URL}/api/v1/simple-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res
}

export async function createApplicationWithSolution(formData: FormData) {
  const res = await fetch(`${BASE_URL}/api/v1/solution-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res
}

export async function createApplicationWithCalc(formData: FormData) {
  console.log(BASE_URL)
  const res = await fetch(`${BASE_URL}/api/v1/calc-applications/`, {
    method: 'POST',
    body: formData,
  })
  return res
}
