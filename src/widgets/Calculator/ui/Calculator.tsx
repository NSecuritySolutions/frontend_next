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
import Loader from '@/shared/components/Loader/Loader'

const Calculator: React.FC = observer(() => {
  const [showDropdown, setShowDropdown] = useState(false)
  const addButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    calculatorStore.fetchData()
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

  const handleSelect = (value: number) => {
    calculatorStore.setNewBlock(value)
    setShowDropdown(false)
  }

  if (calculatorStore.isLoading) {
    return Loader()
  }

  if (calculatorStore.error) {
    return <Typography>Извините, калькулятор сломався...</Typography>
  }

  return (
    <CalculatorContainer>
      <TitleWrapper>
        <SectionTitle style={{ height: 28 }}>Калькулятор</SectionTitle>
        <AddBlockButton onClick={() => setShowDropdown(!showDropdown)} ref={addButtonRef}>
          <Image src="/icons/calculator/plus.svg" height={10} width={9} alt="Добавить блок" />
          <AnimatePresence>
            {showDropdown && (
              <Select>
                {calculatorStore.data.map((block) => (
                  <Option key={block.id} onClick={() => handleSelect(block.id)}>
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
      <Section id="calculator">
        <GridContainer>
          <LayoutGroup>
            {calculatorStore.blocks.map((block, index) => (
              <CalculatorCard store={block} key={block.id} index={index} />
            ))}
          </LayoutGroup>
        </GridContainer>
        <FooterWrapper>
          <ImageButton onClick={() => calculatorStore.setBlocks()}>
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
