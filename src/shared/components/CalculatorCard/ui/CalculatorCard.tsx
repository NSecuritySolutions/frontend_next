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
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import CalculatorBlockStore from '@/app/store/calculatorBlockStore.ts'
import calculatorStore from '@/app/store/calculatorStore.ts'
import { Toogle } from '@/shared/components/Toogle/index.ts'
import { IOption } from '@/widgets/Calculator/types.ts'
import { AnimatePresence } from 'framer-motion'
import { CalculatorOption } from '@/shared/components/CalculatorOption/index.ts'

interface CalculatorCardProps {
  store: CalculatorBlockStore
  index: number
  resize: (value: number, expanded: boolean, setSafe?: boolean) => void
  deleteBlock: (add: boolean) => void
  isMobile: boolean
  id: string | undefined
  handleMobileClick: (id: string) => void
  overlay: boolean
  active: boolean
}

const CalculatorCard: FC<CalculatorCardProps> = observer(
  ({ store, index, resize, deleteBlock, isMobile, id, handleMobileClick, overlay, active }) => {
    const { data, presentOptions, result, prev_block_amount } = store
    const { animationSafe, setAnimationSafe } = calculatorStore
    const amount = (store.getVariable('block_amount') as number) || 0
    const [deleted, setDeleted] = useState(false)
    const [presentCount, setPresentCount] = useState(presentOptions.length)
    const [height, setHeight] = useState(0)
    const card = useRef<HTMLDivElement>(null)
    const timers = useRef<NodeJS.Timeout[]>([])

    const clearTimers = useCallback(() => {
      timers.current.forEach(clearTimeout)
    }, [])

    useEffect(() => {
      return clearTimers
    }, [clearTimers])

    const formattedResult = result.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

    useEffect(() => {
      if (animationSafe && card.current) {
        if (amount == 0) {
          setPresentCount(presentOptions.length)
        } else if (store.disabled && store.appeared) {
          setAnimationSafe(false)
          resize(store.appeared, true, false)
          setPresentCount(presentCount + store.appeared)
          timers.current.push(
            setTimeout(() => {
              if (card.current) {
                setHeight(card.current.offsetHeight)
                resize(store.appeared - store.disabled, false, false)
                timers.current.push(
                  setTimeout(() => {
                    setHeight((prev) => prev + (store.appeared - store.disabled) * 40)
                  }),
                )
                timers.current.push(
                  setTimeout(() => {
                    setHeight(0)
                    setAnimationSafe(true)
                  }, 1000),
                )
                setPresentCount(presentOptions.length)
              }
            }, 1000),
          )
        } else if (store.disabled) {
          setAnimationSafe(false)
          setHeight(card.current.offsetHeight)
          timers.current.push(
            setTimeout(() => {
              resize(store.disabled, false, false)
              setHeight((prev) => prev - store.disabled * 36)
              timers.current.push(
                setTimeout(() => {
                  setHeight(0)
                  setAnimationSafe(true)
                }, 1000),
              )
              setPresentCount(presentOptions.length)
            }, 1000),
          )
        } else if (store.appeared) {
          setAnimationSafe(false)
          resize(store.appeared, true, false)
          timers.current.push(
            setTimeout(() => {
              setAnimationSafe(true)
            }, 1000),
          )
          setPresentCount(presentOptions.length)
        }
      }
    }, [
      presentOptions,
      presentCount,
      amount,
      setAnimationSafe,
      store.appeared,
      store.disabled,
      animationSafe,
      resize,
    ])

    useEffect(() => {
      if (prev_block_amount !== 0 && amount === 0) {
        store.resetVariables()
        resize(presentCount, false)
      } else if (prev_block_amount === 0 && amount !== 0) {
        resize(presentCount, true)
      }
    }, [amount, presentCount, prev_block_amount, resize, store])

    const handleChange = (v: number) => {
      if (!animationSafe && ((amount === 0 && v === 1) || (amount === 1 && v === 0))) return
      store.setVariable('block_amount', v)
      if (amount !== 0 && v === 0) {
        store.resetVariables()
      }
    }

    const handleDelete = () => {
      if (animationSafe) {
        setDeleted(true)
        setAnimationSafe(false)
        timers.current.push(
          setTimeout(() => {
            deleteBlock(false)
            calculatorStore.removeBlock(index)
            setAnimationSafe(true)
          }, 1000),
        )
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
        $expanded={(!isMobile && amount > 0) || (isMobile && amount > 0 && id === store.id)}
        $len={presentCount}
        $deleted={deleted}
        $height={height}
        onClick={() => handleMobileClick(store.id)}
        $overlay={overlay}
        $active={active}
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
          <Price>{formattedResult}</Price>
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
