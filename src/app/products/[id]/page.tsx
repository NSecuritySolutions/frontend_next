import { Product } from '@/widgets/Product'
import { cardSolutionData } from '@/shared/constants/texts/cards-solution'

export default function Page({ params }: { params: { id: string } }) {
  const data = cardSolutionData.filter((solution) => solution.id?.toString() === params.id)[0]

  return <Product data={data} />
}
