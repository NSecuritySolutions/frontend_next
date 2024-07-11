import { FC } from 'react'
import { Option, OptionHeader, CheckBox, InputNumber } from './styled'
import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors/index'
import { IOption } from '@/widgets/Calculator/types'
import { Tooltip } from '@/shared/components/Tooltip'
import { RadioGroup } from '@/shared/components/RadioGroup'
import { AmountComponent } from '@/shared/components/AmountComponent'
import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'

interface CalculatorOptionProps {
  option: IOption
  store: CalculatorBlockStore
  onChange: (option: IOption, func: (...args: any[]) => void) => void
  amount: number
}

const CalculatorOption: FC<CalculatorOptionProps> = ({ option, store, onChange, amount }) => {
  const firstArgFunc = (name: string) => (value: number) => {
    store.setVariable(name, value.toString())
  }

  return (
    <Option>
      <OptionHeader>
        <Typography size={13} width="100%" color={colors.textSecondary}>
          {option.title}
        </Typography>
        <Tooltip text={option.description} />
      </OptionHeader>
      {option.option_type === 'radio' && (
        <RadioGroup option={option} onChange={onChange} store={store} />
      )}
      {option.option_type === 'checkbox' && (
        <CheckBox
          tabIndex={amount == 0 ? -1 : 0}
          checked={store.getVariable(option.name) as boolean}
          onChange={(e) => {
            onChange(option, () => store.setVariable(option.name, e.target.checked))
          }}
        />
      )}
      {option.option_type === 'number' && (
        <InputNumber
          tabIndex={amount == 0 ? -1 : 0}
          value={store.getVariable(option.name) as number}
          // onChange={(e) => onChange(option, () => store.setVariable(option.name, e.target.value))} // плохая идея
          onChange={(e) => store.setVariable(option.name, e.target.value)}
        />
      )}
      {option.option_type === 'counter' && (
        <AmountComponent
          amount={parseInt(store.getVariable(option.name) as string)}
          // onChange={(value: number) => onChange(option, () => firstArgFunc(option.name)(value))}
          onChange={firstArgFunc(option.name)}
          small
        />
      )}
    </Option>
  )
}

export default CalculatorOption
