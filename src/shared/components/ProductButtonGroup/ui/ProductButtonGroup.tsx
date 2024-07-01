import { FC } from 'react'

import { BtnLink } from '@/shared/components/BtnLink'
import colors from '@/shared/constants/colors'
import { Wrapper } from './styled'

interface ProductButtonGroupProps {
  link: string
}

const ProductButtonGroup: FC<ProductButtonGroupProps> = ({ link }) => {
  return (
    <Wrapper>
      <BtnLink
        btnType="accent"
        text="Заказать звонок"
        width="235px"
        height="44px"
        link="/#contact-form"
        color={colors.darkPrimary}
        size="15px"
      />
      <BtnLink
        btnType="transparent"
        text="В калькулятор"
        width="235px"
        height="44px"
        link="/#calculator"
        color={colors.darkPrimary}
        size="15px"
      />
    </Wrapper>
  )
}

export default ProductButtonGroup
