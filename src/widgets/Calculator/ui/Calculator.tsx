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
} from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors/index.ts'

import { AnimatePresence, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import calculatorStore from '../store'
import { observer } from 'mobx-react-lite'
import { ICalculatorData, ICamera, IRegister } from '../types'

const Calculator: React.FC<{ products: (ICamera | IRegister)[]; calculator: ICalculatorData[] }> =
  observer(({ products, calculator }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const addButtonRef = useRef<HTMLButtonElement>(null)
    const [gridSize, setGridSize] = useState(0)
    const [height, setHeight] = useState(0)
    const [safeForExpand, setSafeForExpand] = useState(true)
    const grid = useRef<HTMLDivElement>(null)

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

    const gridResize = (value: number, expanded: boolean) => {
      if (!safeForExpand) return
      const size = value * 36
      if (expanded) setGridSize((prev) => prev + size)
      setSafeForExpand(false)
      setTimeout(() => {
        setGridSize(0)
        setTimeout(() => {
          setGridSize(grid.current!.offsetHeight)
          setSafeForExpand(true)
        }, 50)
      }, 1000)
    }

    const gridBlockResize = (add: boolean) => {
      if (!safeForExpand) return
      if (add) {
        setGridSize((prev) => prev + 20 + 89)
        setSafeForExpand(false)
        setTimeout(() => {
          setGridSize(0)
          setTimeout(() => {
            setGridSize(grid.current!.offsetHeight)
            setSafeForExpand(true)
          }, 50)
        }, 1000)
      } else {
        setGridSize(grid.current!.offsetHeight)
      }
    }

    const handleSelect = (value: number) => {
      if (!safeForExpand) return
      calculatorStore.setNewBlock(value)
      setShowDropdown(false)
      gridBlockResize(true)
    }

    const handleReset = () => {
      if (!safeForExpand) return
      const size = Math.round(calculatorStore.blocks.length / 2)
      setGridSize(size * 89 + size * 20)
      setSafeForExpand(false)
      setHeight(grid.current!.offsetHeight)
      calculatorStore.setBlocks()
      setTimeout(() => {
        setHeight(size * 89 + size * 20)
      })
      setTimeout(() => {
        setHeight(0)
        setSafeForExpand(true)
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
                        onClick={() => safeForExpand && handleSelect(block.id)}
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
            <GridContainer ref={grid} $maxHeight={gridSize} $height={height}>
              <AnimatePresence mode="sync">
                {calculatorStore.blocks.map((block, index) => (
                  <CalculatorCard
                    store={block}
                    key={block.id}
                    index={index}
                    resize={gridResize}
                    deleteBlock={gridBlockResize}
                    safe={safeForExpand}
                    setSafe={setSafeForExpand}
                  />
                ))}
              </AnimatePresence>
            </GridContainer>
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
              <Typography size={16} color={colors.textSecondary}>
                Сбросить настройки
              </Typography>
            </ImageButton>
            <Typography size={18} style={{ marginTop: 5 }}>
              Итого система «под ключ»: ~{calculatorStore.result}
            </Typography>
          </FooterWrapper>
        </Section>
      </CalculatorContainer>
    )
  })

export default Calculator
