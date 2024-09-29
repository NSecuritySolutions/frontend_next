import { FC, useState } from 'react'

import { ProductCard } from '@/shared/components/ProductCard'
import { items } from '@/shared/constants/texts/product-cards.ts'

import { Section, SectionWrapper, SectionTitle } from './styled'
import { BtnLink } from '@/shared/components/BtnLink'
import { ICamera } from '@/widgets/Calculator/types'

interface ProductCardsProps {
  data: ICamera[]
}

const ProductCards: FC<ProductCardsProps> = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(6)

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 6)
  }

  return (
    <Section id="product-cards">
      <SectionTitle>Наш ассортимент товаров</SectionTitle>
      <SectionWrapper>
        {/* {items.slice(0, visibleItems).map((item: any, i: number) => (
          <ProductCard key={i} item={item} />
        ))} */}

        {data &&
          data
            .slice(0, visibleItems)
            .map((item: ICamera, i: number) => <ProductCard key={i} item={item as ICamera} />)}
      </SectionWrapper>
      {visibleItems < data.length && (
        <BtnLink
          btnType="transparent"
          text="Показать еще"
          width="176px"
          height="56px"
          color="black"
          size="15px"
          onClick={showMoreItems}
        />
      )}
    </Section>
  )
}

export default ProductCards
