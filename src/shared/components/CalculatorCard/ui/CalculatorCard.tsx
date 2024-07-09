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
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Tooltip } from '@/shared/components/Tooltip/index.ts'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '../store.ts'
import { Typography } from '@/shared/components/Typography'
import calculatorStore from '@/widgets/Calculator/store.ts'
import { Toogle } from '../../Toogle/index.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  index: number
  resize: (value: number, expanded: boolean) => void
  deleteBlock: (add: boolean, size?: number, id?: string) => void
  safe: boolean
  setSafe: Dispatch<SetStateAction<boolean>>
}

const CalculatorCard: FC<CalculatorCardProps> = observer(
  ({ store, index, resize, deleteBlock, safe, setSafe }) => {
    const data = store.data
    const amount = parseInt(store.getVariable('block_amount') as string) || 0
    const [deleted, setDeleted] = useState(false)

    const handleChange = (v: number) => {
      if (!safe && ((amount === 0 && v === 1) || (amount === 1 && v === 0))) return
      store.setVariable('block_amount', v.toString())
      if (amount !== 0 && v === 0) {
        store.resetVariables()
        resize(data.options.length, false)
      } else if (amount === 0 && v === 1) {
        resize(data.options.length, true)
      }
    }

    const handleDelete = () => {
      if (!safe) return
      setDeleted(true)
      setSafe(false)
      setTimeout(() => {
        deleteBlock(false, amount > 0 ? data.options.length : undefined, store.id)
        calculatorStore.removeBlock(index)
        setSafe(true)
      }, 1000)
    }

    const firstArgFunc = (name: string) => (value: number) => {
      store.setVariable(name, value.toString())
    }

    return (
      <Card
        $center={amount === 0}
        $expanded={amount > 0}
        len={data.options.length}
        $deleted={deleted}
      >
        {index > 3 && (
          <CloseButton onClick={handleDelete}>
            <Image src="/icons/closeBtn.svg" width={10} height={10} alt="Убрать" />
          </CloseButton>
        )}
        <CardHeader>
          <ImageTitle>
            <CardImgWrapper src={data.image} width={37} height={37} alt={data.title} />
            <Title>{data.title}</Title>
          </ImageTitle>
          {store.quantity_selection ? (
            <AmountComponent amount={amount} onChange={handleChange} />
          ) : (
            <Toogle amount={amount} onChange={handleChange} />
          )}
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
              {option.option_type === 'counter' && (
                <AmountComponent
                  amount={parseInt(store.getVariable(option.name) as string)}
                  onChange={firstArgFunc(option.name)}
                  small
                />
              )}
            </Option>
          ))}
        </OptionsWrapper>
      </Card>
    )
  },
)

export default CalculatorCard
