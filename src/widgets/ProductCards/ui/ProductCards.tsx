import { FC, useEffect, useRef, useState } from 'react'

import { ProductCard } from '@/shared/components/ProductCard'

import { Section, SectionWrapper, SectionTitle } from './styled'
import { BtnLink } from '@/shared/components/BtnLink'
import { IProduct, IProductCategory } from '@/widgets/Calculator/types'
import { SelectCategory } from '@/shared/components/SelectCategory'

interface ProductCardsProps {
  data: IProduct[]
  categories?: IProductCategory[]
}

const ProductCards: FC<ProductCardsProps> = ({ data, categories }) => {
  const [visibleItems, setVisibleItems] = useState(6)
  const [selectedCategory, setSelectedCategory] = useState(categories ? categories[0] : undefined)

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 6)
  }

  const ref = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  const filteredData = data.filter((product) =>
    selectedCategory ? product.category.id === selectedCategory.id : true,
  )

  useEffect(() => {
    if (ref.current) {
      // Обновляем maxHeight на высоту содержимого
      setMaxHeight(ref.current.scrollHeight)
    }
  }, [visibleItems, selectedCategory])

  const handleChangeCategory = (category: IProductCategory) => {
    setSelectedCategory(category)
    setVisibleItems(6)
  }

  return (
    <Section id="product-cards">
      <SectionTitle>Наш ассортимент товаров</SectionTitle>
      {categories?.length && selectedCategory && (
        <SelectCategory
          options={categories}
          selectedCategory={selectedCategory}
          selectCategory={handleChangeCategory}
        />
      )}
      <SectionWrapper ref={ref} $maxHeight={maxHeight}>
        {filteredData &&
          filteredData
            .slice(0, visibleItems)
            .map((item: IProduct) => <ProductCard key={item.id} item={item} />)}
      </SectionWrapper>
      {visibleItems < filteredData.length && (
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
