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
import { useEffect, useRef, useState } from 'react'
import { Tooltip } from '../../Tooltip/index.ts'
import { observer } from 'mobx-react-lite'
import calculatorStore from '@/widgets/Calculator/store.ts'
import Image from 'next/image'

interface CalculatorCardProps {
  title: string
  img: string
  handleAmountChange: (condition: boolean) => void
  options: {
    title: string
    description: string
    option_type: string // 'radio' | 'checkbox' | 'input';
    choices?: string
    name: string
  }[]
}

const CalculatorCard: React.FC<CalculatorCardProps> = observer(
  ({ title, img, handleAmountChange, options }) => {
    const amount = parseInt(calculatorStore.getVariable(title) as string) || 0
    const ref = useRef<HTMLDivElement | null>(null)

    calculatorStore.printInputsData()

    // useEffect(() => {
    //   options.forEach((option) => {
    //     calculatorStore.setVariable(option.name, '0')
    //   })
    // }, [])

    const handleChange = (v: number) => {
      calculatorStore.printInputsData()
      calculatorStore.setVariable(title, v.toString())
      handleAmountChange(amount === 0 && v !== 0)
    }

    return (
      <Card $center={amount === 0} $expanded={amount > 0} len={options.length} ref={ref}>
        <div>
          <CardHeader>
            <ImageTitle>
              <CardImgWrapper>
                <Image src={img} width={37} height={37} alt={title} />
              </CardImgWrapper>
              <Title>{title}</Title>
            </ImageTitle>
            <AmountComponent amount={amount} onChange={handleChange} />
            <Typography size={24} width="120px" $justifyContent="end">
              14 958 ₽
            </Typography>
          </CardHeader>
          <Divider $show={amount > 0} />
          {options.map((option, index) => (
            <Option style={{ marginTop: index != 0 ? '8px' : 0 }} key={index}>
              <OptionHeader>
                <Typography
                  size={13}
                  width="100%"
                  $justifyContent="start"
                  color={colors.textSecondary}
                >
                  {option.title}
                </Typography>
                <Tooltip text={option.description} />
              </OptionHeader>
              {option.option_type === 'radio' && (
                <RadioGroup options={option.choices!.split('; ')} name={option.name} />
              )}
              {option.option_type === 'checkbox' && (
                <CheckBox
                  checked={calculatorStore.getVariable(option.name) as boolean}
                  onChange={(e) => {
                    console.log(e.target.checked)
                    calculatorStore.setVariable(option.name, e.target.checked)
                  }}
                />
              )}
              {option.option_type === 'number' && (
                <InputNumber
                  value={calculatorStore.getVariable(option.name) as number}
                  onChange={(e) => calculatorStore.setVariable(option.name, e.target.value)}
                />
              )}
            </Option>
          ))}
        </div>
      </Card>
    )
  },
)

export default CalculatorCard
