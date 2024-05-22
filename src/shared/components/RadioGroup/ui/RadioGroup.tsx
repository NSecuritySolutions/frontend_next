import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { Label, Radio, LabelText } from './styled'
import { observer } from 'mobx-react-lite'
import CalculatorBlockStore from '../../CalculatorCard/store'

interface RadioGroupProps {
  options: string[]
  name: string
  store: CalculatorBlockStore
}

const RadioGroup: React.FC<RadioGroupProps> = observer(({ options, name, store }) => {
  const value = store.getVariable(name)

  return (
    <div role="radiogroup" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {options.map((option) => (
        <Label key={option}>
          <Radio
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) =>
              store.setVariable(name, e.target.value === value ? 'unknown' : e.target.value)
            }
          />
          <LabelText>{option}</LabelText>
        </Label>
      ))}
    </div>
  )
})

export default RadioGroup
