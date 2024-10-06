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
  InfoGridContainer,
  InfoGrid,
} from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/Typography'

import { AnimatePresence, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Tooltip } from '@/shared/components/Tooltip'
import { CalculatorClearButton } from '@/shared/components/CalculatorClearButton'
import { useStore } from '@/app/store/calculatorStoreProvider'
import { useFormStore } from '@/app/store/formModalStoreProvider'
import { createPortal } from 'react-dom'

const Calculator: React.FC = observer(() => {
  const store = useStore()
  const [showDropdown, setShowDropdown] = useState(false)
  const addButtonRef = useRef<HTMLButtonElement>(null)
  const [gridSize, setGridSize] = useState(0)
  const [height, setHeight] = useState(0)
  const [isGrid, setIsGrid] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentMobileCard, setCurrentMobileCard] = useState<string | undefined>()
  const grid = useRef<HTMLDivElement>(null)
  const timers = useRef<NodeJS.Timeout[]>([])
  const modal = useFormStore()

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    return clearTimers
  }, [clearTimers])

  const formattedResult =
    (!store.result ? '' : '~') +
    store.result.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    })

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 940 && !isGrid) {
        setGridSize(99999)
        store.setAnimationSafe(false)
        timers.current.push(
          setTimeout(() => {
            setGridSize(0)
            timers.current.push(
              setTimeout(() => {
                if (grid.current) {
                  setGridSize(grid.current.offsetHeight)
                  store.setAnimationSafe(true)
                }
              }, 50),
            )
          }, 1000),
        )
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
  }, [isGrid, store])

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

  useEffect(() => {
    const handleClickEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        store.handleCancelSelectBlocks()
      }
    }

    if (store.pending_products.length > 0) {
      window.addEventListener('keydown', handleClickEscape)
    }

    return () => {
      if (store.pending_products.length > 0)
        window.removeEventListener('keydown', handleClickEscape)
    }
  }, [store])

  const gridResize = useCallback(
    (value: number, expanded: boolean, setSafe: boolean = true) => {
      if (!store.animationSafe) return
      const size = value * 40
      if (expanded) setGridSize((prev) => prev + size)
      if (setSafe) store.setAnimationSafe(false)
      timers.current.push(
        setTimeout(() => {
          setGridSize(0)
          timers.current.push(
            setTimeout(() => {
              if (grid.current) setGridSize(grid.current!.offsetHeight)
              if (setSafe) store.setAnimationSafe(true)
            }, 50),
          )
        }, 1000),
      )
    },
    [store],
  )

  const gridBlockResize = (add: boolean) => {
    if (!store.animationSafe) return
    if (add) {
      setGridSize((prev) => prev + 20 + 89)
      store.setAnimationSafe(false)
      timers.current.push(
        setTimeout(() => {
          setGridSize(0)
          timers.current.push(
            setTimeout(() => {
              setGridSize(grid.current!.offsetHeight)
              store.setAnimationSafe(true)
            }, 50),
          )
        }, 1000),
      )
    } else {
      store.setAnimationSafe(false)
      setHeight(grid.current!.getBoundingClientRect().height)
      setGridSize(grid.current!.offsetHeight)
      timers.current.push(
        setTimeout(() => {
          setHeight(grid.current!.getBoundingClientRect().height)
          timers.current.push(
            setTimeout(() => {
              setHeight(0)
              store.setAnimationSafe(true)
            }, 1000),
          )
        }, 1000),
      )
    }
  }

  const handleSelect = (value: number) => {
    if (!store.animationSafe) return
    store.setNewBlock(value)
    setShowDropdown(false)
    gridBlockResize(true)
  }

  const handleReset = () => {
    if (!store.animationSafe || !store.clearable) return
    const size = Math.round(store.data.length / 2)
    setGridSize(size * 89 + size * 20)
    store.setAnimationSafe(false)
    setHeight(grid.current!.offsetHeight)
    store.setBlocks()
    timers.current.push(
      setTimeout(() => {
        setHeight(size * 89 + size * 20)
      }),
    )
    timers.current.push(
      setTimeout(() => {
        setHeight(0)
        store.setAnimationSafe(true)
      }, 1000),
    )
  }

  const handleMobileClick = (id: string) => {
    if (store.pending_products) {
      store.handleBlockClick(id)
    } else {
      setCurrentMobileCard(id)
    }
  }

  if (store.error) {
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
                {store.data
                  .filter((block) => block.quantity_selection == true)
                  .map((block) => (
                    <Option
                      key={block.id}
                      onClick={() => store.animationSafe && handleSelect(block.id)}
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
          active={store.clearable}
        />
      </TitleWrapper>
      <Section>
        <BodyWrapper>
          <LayoutGroup>
            <GridWrapper $height={height}>
              {store.pending_products.length > 0 && (
                <InfoGridContainer $top={-35}>
                  <InfoGrid>
                    Ого! Мы можем добавить товар в несколько блоков! Пожалуйста, выберите нужные
                  </InfoGrid>
                </InfoGridContainer>
              )}
              <GridContainer ref={grid} $maxHeight={gridSize}>
                <AnimatePresence mode="sync">
                  {store.blocks.map((block, index) => (
                    <CalculatorCard
                      store={block}
                      key={block.id}
                      index={index}
                      resize={gridResize}
                      deleteBlock={gridBlockResize}
                      overlay={store.suitable_blocks.includes(block.id)}
                      active={store.selected_blocks.includes(block.id)}
                      isMobile={isMobile}
                      id={currentMobileCard}
                      handleMobileClick={handleMobileClick}
                    />
                  ))}
                </AnimatePresence>
              </GridContainer>
              {store.pending_products.length > 0 && (
                <InfoGridContainer $bottom={-45}>
                  <Button onClick={() => store.handleConfirmSelectBlocks()}>Добавить</Button>
                  <Button onClick={() => store.handleCancelSelectBlocks()}>Отменить</Button>
                </InfoGridContainer>
              )}
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
              <Button $primary onClick={() => modal.openCalc()}>
                Оформить заявку
              </Button>
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
      {store.pending_products.length &&
        createPortal(
          <div
            style={{
              backgroundColor: '#80808080',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: 'fixed',
              zIndex: 9,
            }}
          ></div>,
          document.querySelector('body')!,
        )}
    </CalculatorContainer>
  )
})

export default Calculator
