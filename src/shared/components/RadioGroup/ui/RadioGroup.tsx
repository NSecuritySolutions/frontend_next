import React, { ChangeEventHandler } from 'react'
import { Label, Radio, LabelText } from './styled'

interface RadioGroupProps {
  options: string[]
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, value, onChange }) => {
  return (
    <div role="radiogroup" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {options.map((option) => (
        <Label key={option}>
          <Radio name={name} value={option} checked={value === option} onChange={onChange} />
          <LabelText>{option}</LabelText>
        </Label>
      ))}
    </div>
  )
}

export default RadioGroup
