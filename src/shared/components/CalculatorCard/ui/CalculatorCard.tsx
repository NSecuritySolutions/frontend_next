import {
  Card,
  CardImgWrapper,
  CardHeader,
  ImageTitle,
  Title,
  Divider,
  Option,
  OptionHeader,
  CheckBox,
  InputNumber,
  CloseButton,
  OptionsWrapper,
} from './styled'
import colors from '@/shared/constants/colors/index'
import { AmountComponent } from '@/shared/components/AmountComponent'
import { RadioGroup } from '@/shared/components/RadioGroup'
import { FC } from 'react'
import { Tooltip } from '@/shared/components/Tooltip/index.ts'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '../store.ts'
import { Typography } from '@/shared/components/Typography'
import calculatorStore from '@/widgets/Calculator/store.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  index: number
}

const CalculatorCard: FC<CalculatorCardProps> = observer(({ store, index }) => {
  const data = store.data
  const amount = parseInt(store.getVariable(data.title) as string) || 0

  const handleChange = (v: number) => {
    store.setVariable(data.title, v.toString())
    if (amount !== 0 && v === 0) {
      store.resetVariables()
    }
  }

  return (
    <Card $center={amount === 0} $expanded={amount > 0} len={data.options.length}>
      {index > 3 && (
        <CloseButton onClick={() => calculatorStore.removeBlock(index)}>
          <Image src="/icons/closeBtn.svg" width={10} height={10} alt="Убрать" />
        </CloseButton>
      )}
      <CardHeader>
        <ImageTitle>
          <CardImgWrapper src={data.image} width={37} height={37} alt={data.title} />
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
      <OptionsWrapper>
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
                tabIndex={amount == 0 ? -1 : 0}
                checked={store.getVariable(option.name) as boolean}
                onChange={(e) => {
                  store.setVariable(option.name, e.target.checked)
                }}
              />
            )}
            {option.option_type === 'number' && (
              <InputNumber
                tabIndex={amount == 0 ? -1 : 0}
                value={store.getVariable(option.name) as number}
                onChange={(e) => store.setVariable(option.name, e.target.value)}
              />
            )}
          </Option>
        ))}
      </OptionsWrapper>
    </Card>
  )
})

export default CalculatorCard
