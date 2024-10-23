import { BASE_URL } from '@/shared/constants/url/url'

export async function getMainPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/solutions-tags/`),
    fetch(`${BASE_URL}/api/v1/our-team/?active=true`),
    fetch(`${BASE_URL}/api/v1/our-works/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/`),
    fetch(`${BASE_URL}/api/v1/our-services/`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [
    solutionData,
    solutionTags,
    teamData,
    examplesData,
    questionsData,
    productData,
    servicesData,
  ] = await Promise.all(responses.map((response) => response.json()))

  return {
    solutionData,
    solutionTags,
    teamData,
    examplesData,
    questionsData,
    productData,
    servicesData,
  }
}

export async function getLayoutData() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/info/?active=true`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const companyInfoData = await response.json()
    return { companyInfoData }
  } catch (error) {
    throw new Error('An error occurred while fetching company info: ')
  }
}

export async function getCalculatorData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/products/`),
    fetch(`${BASE_URL}/api/v1/calculator/?active=true`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [productData, calculatorData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    productData,
    calculatorData,
  }
}

export async function getVideoPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/solutions-tags/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/?category=Камера`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [solutionData, solutionTags, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    solutionData,
    solutionTags,
    questionsData,
    productData,
  }
}

export async function getDomofonPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/solutions-tags/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/?category=Камера`),
  ])
  // TODO сделать нужную категорию

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [solutionData, solutionTags, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    solutionData,
    solutionTags,
    questionsData,
    productData,
  }
}

export async function getSecurityPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/solutions-tags/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/?category=Камера`),
    // TODO сделать нужную категорию
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [solutionData, solutionTags, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    solutionData,
    solutionTags,
    questionsData,
    productData,
  }
}

export async function getOurWorksPageData() {
  const response = await fetch(`${BASE_URL}/api/v1/our-works/`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data
}

export async function getProductById(id: string) {
  const response = await fetch(`${BASE_URL}/api/v1/products/${id}/`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data
}

export async function getSolutionById(id: string) {
  const response = await fetch(`${BASE_URL}/api/v1/ready-solutions/${id}/`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data
}

export async function getExampleById(id: string) {
  const response = await fetch(`${BASE_URL}/api/v1/our-works/${id}/`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()
  return data
}
