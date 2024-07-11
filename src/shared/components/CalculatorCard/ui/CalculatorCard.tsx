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
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import { Tooltip } from '@/shared/components/Tooltip/index.ts'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '../store.ts'
import { Typography } from '@/shared/components/Typography'
import calculatorStore from '@/widgets/Calculator/store.ts'
import { Toogle } from '../../Toogle/index.ts'
import { IOption } from '@/widgets/Calculator/types.ts'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { CalculatorOption } from '../../CalculatorOption/index.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  index: number
  resize: (value: number, expanded: boolean) => void
  deleteBlock: (add: boolean) => void
  safe: boolean
  setSafe: Dispatch<SetStateAction<boolean>>
}

const CalculatorCard: FC<CalculatorCardProps> = observer(
  ({ store, index, resize, deleteBlock, safe, setSafe }) => {
    const data = store.data
    const amount = parseInt(store.getVariable('block_amount') as string) || 0
    const [deleted, setDeleted] = useState(false)
    const [presentCount, setPresentCount] = useState(data.options.length)
    const [height, setHeight] = useState(0)
    const card = useRef<HTMLDivElement>(null)

    const handleIsPresent = useCallback(
      (option: IOption) => {
        if (option.depends_on == undefined) return true
        if (option.depends_on) {
          const depends = data.options.find((item) => item.id == option.depends_on)
          if (depends && store.getVariable(depends.name).toString() == option.depends_on_value)
            return true
        }
        return false
      },
      [store.variables],
    )

    const presentDataOptions = data.options.filter(handleIsPresent)

    useEffect(() => {
      if (safe && card.current) {
        if (amount == 0) {
          setPresentCount(presentDataOptions.length)
        } else if (presentDataOptions.length < presentCount) {
          setSafe(false)
          setHeight(card.current.offsetHeight)
          setTimeout(() => {
            resize(presentCount - presentDataOptions.length, false)
            setHeight((prev) => prev - (presentCount - presentDataOptions.length) * 36)
            setTimeout(() => {
              setHeight(0)
              setSafe(true)
            }, 1000)
            setPresentCount(presentDataOptions.length)
          }, 1000)
        } else if (presentDataOptions.length > presentCount) {
          setSafe(false)
          resize(presentDataOptions.length - presentCount, true)
          setTimeout(() => {
            setSafe(true)
          }, 1000)
          setPresentCount(presentDataOptions.length)
        }
      }
    }, [safe, presentDataOptions.length, presentCount, amount])

    const handleChange = (v: number) => {
      if (!safe && ((amount === 0 && v === 1) || (amount === 1 && v === 0))) return
      store.setVariable('block_amount', v.toString())
      if (amount !== 0 && v === 0) {
        store.resetVariables()
        resize(presentCount, false)
      } else if (amount === 0 && v === 1) {
        resize(presentCount, true)
      }
    }

    const handleDelete = () => {
      if (!safe) return
      setDeleted(true)
      setSafe(false)
      setTimeout(() => {
        deleteBlock(false)
        calculatorStore.removeBlock(index)
        setSafe(true)
      }, 1000)
    }

    const handleChangeOption = (option: IOption, func: (...args: any[]) => void) => {
      if (option.dependencies) {
        if (safe) {
          func()
        }
      } else func()
    }

    return (
      <Card
        ref={card}
        $center={amount === 0}
        $expanded={amount > 0}
        $len={presentCount}
        $deleted={deleted}
        $height={height}
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
          <AnimatePresence mode="sync">
            {presentDataOptions.map((option) => (
              <CalculatorOption
                key={option.id}
                option={option}
                store={store}
                onChange={handleChangeOption}
                amount={amount}
              />
            ))}
          </AnimatePresence>
        </OptionsWrapper>
      </Card>
    )
  },
)

export default CalculatorCard
