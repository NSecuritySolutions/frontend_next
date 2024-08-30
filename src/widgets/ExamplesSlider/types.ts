interface ExampleImage {
  id: number
  image: string
  is_main: boolean
}

interface Example {
  id: number
  budget: number
  area: number
  add_date: string
  title: string
  images: ExampleImage[]
  time: number
  description: string[]
  product: string[]
}

export type { Example }
