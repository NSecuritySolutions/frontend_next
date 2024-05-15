import React from 'react'
import { Label, Radio, LabelText } from './styled'

interface RadioGroupProps {
  options: string[]
  name: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name }) => {
  return (
    <div role="radiogroup" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {options.map((option) => (
        <Label key={option}>
          <Radio name={name} value={option} />
          <LabelText>{option}</LabelText>
        </Label>
      ))}
    </div>
  )
}

export default RadioGroup
