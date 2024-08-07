import {
  CalculatorContainer,
  Section,
  SectionTitle,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
  TitleWrapper,
  GridContainer,
  PriceContainer,
  PriceHeader,
  Price,
  GridWrapper,
  BodyWrapper,
  ButtonsWrapper,
  Button,
} from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/Typography'

import { AnimatePresence, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import calculatorStore from '../store'
import { observer } from 'mobx-react-lite'
import { ICalculatorData, ICamera, IRegister } from '../types'
import { Tooltip } from '@/shared/components/Tooltip'
import { CalculatorClearButton } from '@/shared/components/CalculatorClearButton'

const Calculator: React.FC<{ products: (ICamera | IRegister)[]; calculator: ICalculatorData[] }> =
  observer(({ products, calculator }) => {
    const { animationSafe, setAnimationSafe, result } = calculatorStore
    const [showDropdown, setShowDropdown] = useState(false)
    const addButtonRef = useRef<HTMLButtonElement>(null)
    const [gridSize, setGridSize] = useState(0)
    const [height, setHeight] = useState(0)
    const [isGrid, setIsGrid] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [currentMobileCard, setCurrentMobileCard] = useState<string | undefined>()
    const grid = useRef<HTMLDivElement>(null)

    const formattedResult =
      (!result ? '' : '~') +
      result.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      })

    useEffect(() => {
      calculatorStore.getData(products, calculator)
    }, [products, calculator])

    useEffect(() => {
      const resize = () => {
        if (window.innerWidth >= 940 && !isGrid) {
          setGridSize(99999)
          setAnimationSafe(false)
          setTimeout(() => {
            setGridSize(0)
            setTimeout(() => {
              setGridSize(grid.current!.offsetHeight)
              setAnimationSafe(true)
            }, 50)
          }, 1000)
          setIsGrid(true)
        } else if (window.innerWidth < 940) {
          setIsGrid(false)
          if (window.innerWidth < 620) {
            setIsMobile(true)
          } else {
            setIsMobile(false)
          }
        }
      }

      window.addEventListener('resize', resize)
      resize()
      return () => window.removeEventListener('resize', resize)
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
      const size = value * 40
      if (expanded) setGridSize((prev) => prev + size)
      if (setSafe) setAnimationSafe(false)
      setTimeout(() => {
        setGridSize(0)
        setTimeout(() => {
          if (grid.current) setGridSize(grid.current!.offsetHeight)
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
      if (!animationSafe || !calculatorStore.clearable) return
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

    const handleMobileClick = (id: string) => {
      setCurrentMobileCard(id)
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
          <CalculatorClearButton
            handleReset={handleReset}
            isMobile={isMobile}
            active={calculatorStore.clearable}
          />
        </TitleWrapper>
        <Section>
          <BodyWrapper>
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
                        isMobile={isMobile}
                        id={currentMobileCard}
                        handleMobileClick={handleMobileClick}
                      />
                    ))}
                  </AnimatePresence>
                </GridContainer>
              </GridWrapper>
            </LayoutGroup>
            <FooterWrapper>
              <PriceContainer>
                <PriceHeader>
                  <Typography size={16}>Итого система «под ключ»:</Typography>
                  <Tooltip text={'Уточняйте точную цену у манагеров'} />
                </PriceHeader>
                <Price>{formattedResult}</Price>
              </PriceContainer>
              <ButtonsWrapper>
                <Button $primary>Оформить заявку</Button>
                <Button>
                  <Image
                    src="/icons/calculator/download.svg"
                    height={24}
                    width={24}
                    alt="Downdload"
                  />
                  Скачать прайс
                </Button>
              </ButtonsWrapper>
            </FooterWrapper>
          </BodyWrapper>
        </Section>
      </CalculatorContainer>
    )
  })

export default Calculator
