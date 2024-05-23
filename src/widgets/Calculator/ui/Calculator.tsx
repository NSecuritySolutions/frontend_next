import {
  Section,
  SectionTitle,
  ImgWrap,
  ImageButton,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    calculatorStore.fetchData()
  }, [])

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
    <div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: ref.current?.offsetWidth || 1180,
          marginTop: 40,
          position: 'absolute',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <SectionTitle style={{ height: 28 }}>Калькулятор</SectionTitle>
        <div style={{ position: 'relative', width: '100%' }}>
          <AddBlockButton onClick={() => setShowDropdown(!showDropdown)}>
            <Image src="/icons/calculator/plus.svg" height={10} width={9} alt="Добавить блок" />
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
          </AddBlockButton>
        </div>
      </div>
      <Section id="calculator">
        <div ref={ref}>
          <div
            style={{
              marginTop: 58,
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <LayoutGroup>
              {calculatorStore.blocks.map((block, index) => (
                <CalculatorCard store={block} key={block.id} index={index} />
              ))}
            </LayoutGroup>
          </div>
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
        </div>
      </Section>
    </div>
  )
})

export default Calculator
