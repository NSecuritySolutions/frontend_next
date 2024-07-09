import React from 'react'
import { Amount, ChangeAmount } from './styled'
import Image from 'next/image'
import { Typography } from '@/shared/components/Typography'

interface AmountComponentProps {
  amount: number
  onChange: (v: number) => void
  small?: boolean
}

const AmountComponent: React.FC<AmountComponentProps> = ({ amount, onChange, small }) => {
  return (
    <Amount>
      <ChangeAmount onClick={() => amount > 0 && onChange(amount - 1)}>
        <Image src="/icons/calculator/minus.svg" height={2} width={7} alt="Decrement" />
      </ChangeAmount>
      <Typography
        width={small ? '20px' : '30px'}
        $weight={small ? 800 : 700}
        size={small ? 15 : 24}
        $justifyContent="center"
      >
        {amount}
      </Typography>
      <ChangeAmount onClick={() => onChange(amount + 1)}>
        <Image src="/icons/calculator/plus.svg" height={10} width={9} alt="Increment" />
      </ChangeAmount>
    </Amount>
  )
}

export default AmountComponent
