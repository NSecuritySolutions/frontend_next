import {
  CalculatorContainer,
  Section,
  SectionTitle,
  ImgWrap,
  ImageButton,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
  TitleWrapper,
  GridContainer,
  PriceContainer,
  Price,
  GridWrapper,
} from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors/index.ts'

import { animate, AnimatePresence, LayoutGroup, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import calculatorStore from '../store'
import { observer } from 'mobx-react-lite'
import { ICalculatorData, ICamera, IRegister } from '../types'

const Calculator: React.FC<{ products: (ICamera | IRegister)[]; calculator: ICalculatorData[] }> =
  observer(({ products, calculator }) => {
    const { animationSafe, setAnimationSafe, result } = calculatorStore
    const [showDropdown, setShowDropdown] = useState(false)
    const addButtonRef = useRef<HTMLButtonElement>(null)
    const [gridSize, setGridSize] = useState(0)
    const [height, setHeight] = useState(0)
    // const [safeForExpand, setSafeForExpand] = useState(true)
    const grid = useRef<HTMLDivElement>(null)

    const formattedResult =
      '~' +
      result.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

    // Когда-то была анимация циферок :(
    // const price = useMotionValue(calculatorStore.result)
    // const formattedPrice = useTransform(
    //   price,
    //   (price) =>
    //     '~' +
    //     price.toLocaleString('ru-RU', {
    //       style: 'currency',
    //       currency: 'RUB',
    //       minimumFractionDigits: 2,
    //       maximumFractionDigits: 2,
    //     }),
    // )

    // useEffect(() => {
    //   const animation = animate(price, calculatorStore.result, { duration: 1 })
    //   return animation.stop
    // }, [calculatorStore.result])

    useEffect(() => {
      calculatorStore.getData(products, calculator)
    }, [products, calculator])

    useEffect(() => {
      const size = Math.round(calculatorStore.blocks.length / 2)
      setGridSize(size * 89 + size * 20)
    }, [])

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (addButtonRef.current && !addButtonRef.current.contains(event.target as Node)) {
          setShowDropdown(!showDropdown)
        }
      }
      // ставим слушатели, чтобы закрыть выбор при клике вне его
      if (showDropdown) {
        window.addEventListener('click', handleClickOutside)
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            setShowDropdown(!showDropdown)
          }
        })
        window.addEventListener('blur', () => {
          setShowDropdown(!showDropdown)
        })
      } else {
        window.removeEventListener('click', handleClickOutside)
      }

      return () => {
        window.removeEventListener('click', handleClickOutside)
      }
    }, [showDropdown])

    const gridResize = (value: number, expanded: boolean, setSafe: boolean = true) => {
      if (!animationSafe) return
      const size = value * 36
      if (expanded) setGridSize((prev) => prev + size)
      if (setSafe) setAnimationSafe(false)
      setTimeout(() => {
        setGridSize(0)
        setTimeout(() => {
          setGridSize(grid.current!.offsetHeight)
          if (setSafe) setAnimationSafe(true)
        }, 50)
      }, 1000)
    }

    const gridBlockResize = (add: boolean) => {
      if (!animationSafe) return
      if (add) {
        setGridSize((prev) => prev + 20 + 89)
        setAnimationSafe(false)
        setTimeout(() => {
          setGridSize(0)
          setTimeout(() => {
            setGridSize(grid.current!.offsetHeight)
            setAnimationSafe(true)
          }, 50)
        }, 1000)
      } else {
        setAnimationSafe(false)
        setHeight(grid.current!.getBoundingClientRect().height)
        setGridSize(grid.current!.offsetHeight)
        setTimeout(() => {
          setHeight(grid.current!.getBoundingClientRect().height)
          setTimeout(() => {
            setHeight(0)
            setAnimationSafe(true)
          }, 1000)
        }, 1000)
      }
    }

    const handleSelect = (value: number) => {
      if (!animationSafe) return
      calculatorStore.setNewBlock(value)
      setShowDropdown(false)
      gridBlockResize(true)
    }

    const handleReset = () => {
      if (!animationSafe) return
      const size = Math.round(calculatorStore.data.length / 2)
      setGridSize(size * 89 + size * 20)
      setAnimationSafe(false)
      setHeight(grid.current!.offsetHeight)
      calculatorStore.setBlocks()
      setTimeout(() => {
        setHeight(size * 89 + size * 20)
      })
      setTimeout(() => {
        setHeight(0)
        setAnimationSafe(true)
      }, 1000)
    }

    if (calculatorStore.error) {
      return <Typography>Извините, калькулятор сломався...</Typography>
    }

    return (
      <CalculatorContainer id="calculator">
        <TitleWrapper>
          <SectionTitle>Калькулятор</SectionTitle>
          <AddBlockButton onClick={() => setShowDropdown(!showDropdown)} ref={addButtonRef}>
            <Image src="/icons/calculator/plus.svg" height={10} width={9} alt="Добавить блок" />
            <AnimatePresence>
              {showDropdown && (
                <Select>
                  {calculatorStore.data
                    .filter((block) => block.quantity_selection == true)
                    .map((block) => (
                      <Option
                        key={block.id}
                        onClick={() => animationSafe && handleSelect(block.id)}
                      >
                        <Typography size={16} $weight={700} width="100%">
                          {block.title}
                        </Typography>
                      </Option>
                    ))}
                </Select>
              )}
            </AnimatePresence>
          </AddBlockButton>
        </TitleWrapper>
        <Section>
          <LayoutGroup>
            <GridWrapper $height={height}>
              <GridContainer ref={grid} $maxHeight={gridSize}>
                <AnimatePresence mode="sync">
                  {calculatorStore.blocks.map((block, index) => (
                    <CalculatorCard
                      store={block}
                      key={block.id}
                      index={index}
                      resize={gridResize}
                      deleteBlock={gridBlockResize}
                    />
                  ))}
                </AnimatePresence>
              </GridContainer>
            </GridWrapper>
          </LayoutGroup>
          <FooterWrapper>
            <ImageButton onClick={handleReset}>
              <ImgWrap>
                <Image
                  src="/icons/calculator/cross.svg"
                  width={22}
                  height={22}
                  alt="Reset"
                  style={{ objectFit: 'cover' }}
                />
              </ImgWrap>
              <Typography size={16} color={colors.accentNegative}>
                Сбросить настройки
              </Typography>
            </ImageButton>
            <PriceContainer>
              <Typography size={18} style={{ marginTop: 5 }}>
                Итого система «под ключ»:
              </Typography>
              <Price>{formattedResult}</Price>
            </PriceContainer>
          </FooterWrapper>
        </Section>
      </CalculatorContainer>
    )
  })

export default Calculator
