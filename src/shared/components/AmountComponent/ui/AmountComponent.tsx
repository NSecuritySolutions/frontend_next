import React from 'react'
import { Amount, ChangeAmount } from './styled'
import Image from 'next/image'
import { Typography } from '@/shared/components/Typography'

interface AmountComponentProps {
  amount: number
  onChange: (v: number) => void
}

const AmountComponent: React.FC<AmountComponentProps> = ({ amount, onChange }) => {
  return (
    <Amount>
      <ChangeAmount onClick={() => amount > 0 && onChange(amount - 1)}>
        <Image src="/icons/calculator/minus.svg" height={2} width={7} alt="Decrement" />
      </ChangeAmount>
      <Typography width="30px" size={24} $justifyContent="center">
        {amount}
      </Typography>
      <ChangeAmount onClick={() => onChange(amount + 1)}>
        <Image src="/icons/calculator/plus.svg" height={10} width={9} alt="Increment" />
      </ChangeAmount>
    </Amount>
  )
}

export default AmountComponent
