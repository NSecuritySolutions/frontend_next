import { useState } from 'react'
import { ToogleBorder, Toogler } from './styled'

interface ToogleComponentProps {
  amount: number
  onChange: (v: number) => void
}

const Toogle: React.FC<ToogleComponentProps> = ({ amount, onChange }) => {
  return (
    <ToogleBorder
      className={amount == 1 ? 'checked' : ''}
      onClick={() => (amount == 0 ? onChange(1) : onChange(0))}
    >
      <Toogler />
    </ToogleBorder>
  )
}

export default Toogle
