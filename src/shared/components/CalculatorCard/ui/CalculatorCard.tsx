import {
  Card,
  CardImgWrapper,
  CardHeader,
  ImageTitle,
  Title,
  Typography,
  Divider,
  Option,
  OptionHeader,
  CheckBox,
  InputNumber,
} from './styled'
import colors from '@/shared/constants/colors/index'
import { AmountComponent } from '../../AmountComponent'
import { RadioGroup } from '../../RadioGroup'
import { useRef } from 'react'
import { Tooltip } from '../../Tooltip/index.ts'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '../store.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  handleAmountChange: (condition: boolean, len: number, card: HTMLDivElement) => void
}

const CalculatorCard: React.FC<CalculatorCardProps> = observer(({ store, handleAmountChange }) => {
  const data = store.data
  const amount = parseInt(store.getVariable(data.title) as string) || 0
  const ref = useRef<HTMLDivElement | null>(null)

  const handleChange = (v: number) => {
    store.setVariable(data.title, v.toString())
    if (amount !== 0 && v === 0) {
      store.resetVariables()
      handleAmountChange(false, data.options.length, ref.current!)
    }
    if (amount === 0 && v !== 0) handleAmountChange(true, data.options.length, ref.current!)
  }

  return (
    <Card $center={amount === 0} $expanded={amount > 0} len={data.options.length} ref={ref}>
      <CardHeader>
        <ImageTitle>
          <CardImgWrapper>
            <Image src={data.image} width={37} height={37} alt={data.title} />
          </CardImgWrapper>
          <Title>{data.title}</Title>
        </ImageTitle>
        <AmountComponent amount={amount} onChange={handleChange} />
        <Typography size={18} width="120px" $justifyContent="end">
          {store.result.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </CardHeader>
      <Divider $show={amount > 0} />
      <div style={{ width: '100%' }}>
        {data.options.map((option, index) => (
          <Option key={index}>
            <OptionHeader>
              <Typography size={13} width="100%" color={colors.textSecondary}>
                {option.title}
              </Typography>
              <Tooltip text={option.description} />
            </OptionHeader>
            {option.option_type === 'radio' && (
              <RadioGroup
                options={option
                  .choices!.split(';')
                  .map((part) => part.trim())
                  .filter((part) => part !== '')}
                name={option.name}
                store={store}
              />
            )}
            {option.option_type === 'checkbox' && (
              <CheckBox
                checked={store.getVariable(option.name) as boolean}
                onChange={(e) => {
                  store.setVariable(option.name, e.target.checked)
                }}
              />
            )}
            {option.option_type === 'number' && (
              <InputNumber
                value={store.getVariable(option.name) as number}
                onChange={(e) => store.setVariable(option.name, e.target.value)}
              />
            )}
          </Option>
        ))}
      </div>
    </Card>
  )
})

export default CalculatorCard
