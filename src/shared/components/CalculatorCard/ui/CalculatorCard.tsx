import {
  Card,
  CardImgWrapper,
  CardHeader,
  ImageTitle,
  Title,
  Divider,
  CloseButton,
  OptionsWrapper,
  Price,
} from './styled'
import { AmountComponent } from '@/shared/components/AmountComponent'
import { FC, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '../store.ts'
import calculatorStore from '@/widgets/Calculator/store.ts'
import { Toogle } from '../../Toogle/index.ts'
import { IOption } from '@/widgets/Calculator/types.ts'
import { animate, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { CalculatorOption } from '../../CalculatorOption/index.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  index: number
  resize: (value: number, expanded: boolean) => void
  deleteBlock: (add: boolean) => void
}

const CalculatorCard: FC<CalculatorCardProps> = observer(
  ({ store, index, resize, deleteBlock }) => {
    const { data, presentOptions } = store
    const { animationSafe, setAnimationSafe } = calculatorStore
    const amount = parseInt(store.getVariable('block_amount') as string) || 0
    const [deleted, setDeleted] = useState(false)
    const [presentCount, setPresentCount] = useState(presentOptions.length)
    const [height, setHeight] = useState(0)
    const card = useRef<HTMLDivElement>(null)

    const price = useMotionValue(store.result)
    const formattedPrice = useTransform(
      price,
      (price) =>
        '~' +
        price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
    )

    useEffect(() => {
      const animation = animate(price, store.result, { duration: 1 })
      return animation.stop
    }, [store.result])

    useEffect(() => {
      if (animationSafe && card.current) {
        if (amount == 0) {
          setPresentCount(presentOptions.length)
        } else if (store.disabled && store.appeared) {
          setAnimationSafe(false)
          resize(store.appeared, true)
          setPresentCount(presentCount + store.appeared)
          setTimeout(() => {
            setHeight(card.current!.offsetHeight)
            resize(store.appeared - store.disabled, false)
            setTimeout(() => {
              setHeight((prev) => prev + (store.appeared - store.disabled) * 36)
            })
            setTimeout(() => {
              setHeight(0)
              setAnimationSafe(true)
            }, 1000)
            setPresentCount(presentOptions.length)
          }, 1000)
        } else if (store.disabled) {
          setAnimationSafe(false)
          setHeight(card.current.offsetHeight)
          setTimeout(() => {
            resize(store.disabled, false)
            setHeight((prev) => prev - store.disabled * 36)
            setTimeout(() => {
              setHeight(0)
              setAnimationSafe(true)
            }, 1000)
            setPresentCount(presentOptions.length)
          }, 1000)
        } else if (store.appeared) {
          setAnimationSafe(false)
          resize(store.appeared, true)
          setTimeout(() => {
            setAnimationSafe(true)
          }, 1000)
          setPresentCount(presentOptions.length)
        }
      }
    }, [presentOptions, presentCount, amount])

    const handleChange = (v: number) => {
      if (!animationSafe && ((amount === 0 && v === 1) || (amount === 1 && v === 0))) return
      store.setVariable('block_amount', v.toString())
      if (amount !== 0 && v === 0) {
        store.resetVariables()
        resize(presentCount, false)
      } else if (amount === 0 && v === 1) {
        resize(presentCount, true)
      }
    }

    const handleDelete = () => {
      if (animationSafe) {
        setDeleted(true)
        setAnimationSafe(false)
        setTimeout(() => {
          deleteBlock(false)
          calculatorStore.removeBlock(index)
        }, 1000)
      }
    }

    const handleChangeOption = (option: IOption, func: (...args: any[]) => void) => {
      if (option.dependencies) {
        if (animationSafe) {
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
          <Price>{formattedPrice}</Price>
        </CardHeader>
        <Divider $show={amount > 0} />
        <OptionsWrapper>
          <AnimatePresence mode="sync">
            {presentOptions.map((option) => (
              <CalculatorOption
                key={option.id}
                option={option}
                store={store}
                onChange={handleChangeOption}
                amount={amount}
                bold={option.dependencies}
              />
            ))}
          </AnimatePresence>
        </OptionsWrapper>
      </Card>
    )
  },
)

export default CalculatorCard
