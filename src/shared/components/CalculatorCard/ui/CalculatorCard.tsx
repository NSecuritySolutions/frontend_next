import {
  Card,
  CardImg,
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
import { useRef, useState } from 'react'
import { Tooltip } from '../../Tooltip/index.ts'

interface CalculatorCardProps {
  title: string
  img: string
  handleAmountChange: (condition: boolean) => void
  options: {
    title: string
    tooltip: string
    type: string // 'radio' | 'checkbox' | 'input';
    options?: string[]
    name?: string
  }[]
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  img,
  handleAmountChange,
  options,
}) => {
  const [amount, setAmount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleChange = (v: number) => {
    setAmount(v)
    handleAmountChange(amount === 0 && v !== 0)
  }

  return (
    <Card $center={amount === 0} $expanded={amount > 0} len={options.length} ref={ref}>
      <div>
        <CardHeader>
          <ImageTitle>
            <CardImg $imgUrl={img} />
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
              <Tooltip text={option.tooltip} />
            </OptionHeader>
            {option.type === 'radio' && (
              <RadioGroup options={option.options!} name={option.name!} />
            )}
            {option.type === 'checkbox' && <CheckBox />}
            {option.type === 'input' && <InputNumber />}
          </Option>
        ))}
      </div>
    </Card>
  )
}

export default CalculatorCard
