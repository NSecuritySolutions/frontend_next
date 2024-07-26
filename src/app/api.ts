import { BASE_URL } from '@/shared/constants/url/url'

export async function getMainPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/our-team/`),
    fetch(`${BASE_URL}/api/v1/our-works/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/`),
    fetch(`${BASE_URL}/api/v1/calculator/?active=true`),
    fetch(`${BASE_URL}/api/v1/our-services/`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [
    solutionData,
    teamData,
    examplesData,
    questionsData,
    productData,
    calculatorData,
    servicesData,
  ] = await Promise.all(responses.map((response) => response.json()))

  return {
    solutionData,
    teamData,
    examplesData,
    questionsData,
    productData,
    calculatorData,
    servicesData,
  }
}

export async function getVideoPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/ready-solutions/`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/?category=Камера`),
    fetch(`${BASE_URL}/api/v1/calculator/?active=true`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [solutionData, questionsData, productData, calculatorData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    solutionData,
    questionsData,
    productData,
    calculatorData,
  }
}

export async function getDomofonPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/calculator/?active=true`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [calculatorData, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    calculatorData,
    questionsData,
    productData,
  }
}

export async function getSecurityPageData() {
  const responses = await Promise.all([
    fetch(`${BASE_URL}/api/v1/calculator/?active=true`),
    fetch(`${BASE_URL}/api/v1/questions/`),
    fetch(`${BASE_URL}/api/v1/products/`),
  ])

  if (responses.some((response) => !response.ok)) {
    throw new Error('Failed to fetch data')
  }

  const [calculatorData, questionsData, productData] = await Promise.all(
    responses.map((response) => response.json()),
  )

  return {
    calculatorData,
    questionsData,
    productData,
  }
}
