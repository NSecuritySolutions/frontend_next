import { FC } from 'react'

import { Card, ColumnWrapper, ContentWrapper, UnorderedList } from './styled'
import { Typography } from '@/shared/components/Typography'
import Image from 'next/image'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'
import { ProductButtonGroup } from '@/shared/components/ProductButtonGroup'
import { Breadcrumbs } from '@/shared/components/Breadcrumbs'
import Loader from '@/shared/components/Loader/Loader'

interface ProductProps {
  data: TCardSolutionProps
}

const Product: FC<ProductProps> = ({ data }) => {
  if (!data) return Loader()

  return (
    <div>
      <Breadcrumbs title={data.title} />
      <Card>
        <Typography size={24}>{data.title}</Typography>
        <ContentWrapper>
          <ColumnWrapper>
            <Image src={data.img} alt={data.title} />
            <div>
              <Typography size={24}>
                {data.price.toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
              <Typography size={13}>Выезд инженера - Бесплатно!</Typography>
            </div>
            <ProductButtonGroup link="" />
          </ColumnWrapper>
          <ColumnWrapper>
            <Typography size={18} $weight={800} style={{ marginBottom: 12 }}>
              Комплектация
            </Typography>
            <UnorderedList>
              {data.listItem.map((item, index) => (
                <li key={index}>
                  <Typography size={16} $weight={400}>
                    {item}
                  </Typography>
                </li>
              ))}
            </UnorderedList>
            <Typography size={18} $weight={800} style={{ marginBottom: 12 }}>
              Описание:
            </Typography>
            {data.toolTipText.map((item, index) => (
              <Typography size={16} $weight={400} key={index}>
                {item}
              </Typography>
            ))}
          </ColumnWrapper>
        </ContentWrapper>
      </Card>
    </div>
  )
}

export default Product
