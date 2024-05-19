import { FC } from 'react'

import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'

interface ProductButtonGroupProps {
  link: string
}

const ProductButtonGroup: FC<ProductButtonGroupProps> = ({ link }) => {
  return (
    <>
      <BtnLink
        btnType="accent"
        text="В калькулятор"
        width="235px"
        height="44px"
        link=""
        color={colors.darkPrimary}
        size="15px"
      />
      <BtnLink
        btnType="transparent"
        text="Заказать звонок"
        width="235px"
        height="44px"
        link=""
        color={colors.darkPrimary}
        size="15px"
      />
    </>
  )
}

export default ProductButtonGroup
