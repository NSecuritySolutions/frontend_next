import { FC, useRef } from 'react'
import { Option, OptionHeader, CheckBox, InputNumber, Title } from './styled'
import { IOption } from '@/widgets/Calculator/types'
import { Tooltip } from '@/shared/components/Tooltip'
import { RadioGroup } from '@/shared/components/RadioGroup'
import { AmountComponent } from '@/shared/components/AmountComponent'
import { observer } from 'mobx-react-lite'
import CalculatorBlockStore from '@/app/store/calculatorBlockStore'

interface CalculatorOptionProps {
  option: IOption
  store: CalculatorBlockStore
  onChange: (option: IOption, func: (...args: any[]) => void) => void
  amount: number
  bold?: boolean
}

const CalculatorOption: FC<CalculatorOptionProps> = observer(
  ({ option, store, onChange, amount, bold }) => {
    const titleRef = useRef<HTMLParagraphElement>(null)

    const firstArgFunc = (name: string) => (value: number) => {
      store.setVariable(name, value)
    }

    return (
      <Option>
        <OptionHeader>
          <Title ref={titleRef} $bold={bold}>
            {option.title}
          </Title>
          <Tooltip text={option.description} />
        </OptionHeader>
        {option.option_type === 'radio' && (
          <RadioGroup option={option} onChange={onChange} store={store} />
        )}
        {option.option_type === 'checkbox' && (
          <CheckBox
            tabIndex={amount == 0 ? -1 : 0}
            checked={store.getVariable(option.name) as boolean}
            disabled={
              !store.getVariable(option.name) && store.isOptionValueDisabled(option.name, true)
            }
            onChange={(e) => {
              onChange(option, () => store.setVariable(option.name, e.target.checked))
            }}
          />
        )}
        {option.option_type === 'number' && (
          <InputNumber
            tabIndex={amount == 0 ? -1 : 0}
            value={(store.getVariable(option.name) as number) || ''}
            // onChange={(e) => onChange(option, () => store.setVariable(option.name, e.target.value))} // плохая идея
            onChange={(e) =>
              store.setVariable(
                option.name,
                parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0,
              )
            }
          />
        )}
        {option.option_type === 'counter' && (
          <AmountComponent
            amount={store.getVariable(option.name) as number}
            // onChange={(value: number) => onChange(option, () => firstArgFunc(option.name)(value))}
            onChange={firstArgFunc(option.name)}
            small
          />
        )}
      </Option>
    )
  },
)

export default CalculatorOption
