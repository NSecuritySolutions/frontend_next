interface Employee {
  id: number
  image: string
  first_name: string
  last_name: string
  position: string
  phone: string
}

interface Info {
  id: number
  description: string[]
  active: boolean
  employees: Employee[]
}

export type { Info, Employee }
