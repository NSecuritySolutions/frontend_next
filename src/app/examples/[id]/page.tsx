'use client'
import { Example } from '@/widgets/Example'
import { workExamples } from '@/shared/constants/texts/examples'

export default function ExamplesPage({ params }: { params: { id: string } }) {
  const data = workExamples.filter((item) => item.id?.toString() === params.id)[0]

  return <Example data={data}></Example>
}
