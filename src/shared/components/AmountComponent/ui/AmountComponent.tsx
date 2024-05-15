import React from 'react'
import { Amount, ChangeAmount, Typography } from './styled'

interface AmountComponentProps {
  amount: number
  onChange: (v: number) => void
}

const AmountComponent: React.FC<AmountComponentProps> = ({ amount, onChange }) => {
  return (
    <Amount>
      <ChangeAmount onClick={() => amount > 0 && onChange(amount - 1)}>
        <Typography width="100%">-</Typography>
      </ChangeAmount>
      <Typography width="30px">{amount}</Typography>
      <ChangeAmount onClick={() => onChange(amount + 1)}>
        <Typography width="100%">+</Typography>
      </ChangeAmount>
    </Amount>
  )
}

export default AmountComponent
