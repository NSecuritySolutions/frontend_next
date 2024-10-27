import { BASE_URL } from '@/shared/constants/url/url'

function getCsrfToken() {
  const value = `; ${document.cookie}`
  const parts = value.split(`; csrftoken=`)
  if (parts.length === 2) return parts?.pop()?.split(';').shift()
}

export async function createApplicationWithFile(formData: FormData) {
  const csrftoken = getCsrfToken()
  if (csrftoken) {
    const res = await fetch(`${BASE_URL}/api/v1/simple-applications/`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrftoken,
      },
    })
    return res
  }
}

export async function createApplicationWithSolution(formData: FormData) {
  const csrftoken = getCsrfToken()
  if (csrftoken) {
    const res = await fetch(`${BASE_URL}/api/v1/solution-applications/`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrftoken,
      },
    })
    return res
  }
}

export async function createApplicationWithCalc(formData: FormData) {
  const csrftoken = getCsrfToken()
  if (csrftoken) {
    const res = await fetch(`${BASE_URL}/api/v1/calc-applications/`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRFToken': csrftoken,
      },
    })
    return res
  }
}
