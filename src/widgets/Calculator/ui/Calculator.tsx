import { Section, SectionTitle, ImgWrap, ImageButton, FooterWrapper } from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors/index.ts'

import { LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import calculatorStore from '../store'
import { observer } from 'mobx-react-lite'
import Loader from '@/shared/components/Loader/Loader'

const Calculator: React.FC = observer(() => {
  const [height, setHeight] = useState(0)
  const section = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    calculatorStore.fetchData()
  }, [])

  const handleAmountChange = (condition: boolean, len: number, card: HTMLDivElement) => {
    const cardContainer = section.current!
    const cardTop = card.offsetTop
    const containerTop = cardContainer.offsetTop
    const cardHeight = card.offsetHeight
    const containerHeight = cardContainer.offsetHeight
    const containerLeft = cardContainer.offsetLeft
    const cardLeft = card.offsetLeft

    const cardBottom = cardTop + cardHeight
    const containerBottom = containerTop + containerHeight

    if (condition) {
      // если карточка вначале или в конце
      if (cardTop === containerTop || cardBottom === containerBottom) {
        // если координаты низа раскрытой карточки > координаты низа контейнера + элементы между ними
        if (cardBottom + len * 36 >= containerBottom + (containerBottom - cardBottom)) {
          setHeight(cardTop - containerTop + cardHeight + 193 + len * 36)
        } else {
          setHeight(containerHeight + 193 + len * 36)
        }
      } else {
        // если карточка справа
        if (cardLeft !== containerLeft) {
          // если в раскрытом виде не выходит за пределы контейнера
          if (cardBottom + len * 36 <= containerBottom) {
            setHeight(containerHeight + (containerBottom - cardBottom) + 193)
            // если выходит за предели контейнера + элементы между ними
          } else if (cardBottom + len * 36 > containerBottom + (containerBottom - cardBottom)) {
            setHeight(containerHeight + 193 + len * 36)
          }
          // если слева (тут все просто)
        } else {
          setHeight(containerHeight + 193 + len * 36)
        }
      }
    }
    setTimeout(() => {
      setHeight(section.current!.clientHeight + 193)
    }, 1000)
  }

  if (calculatorStore.isLoading) {
    return Loader()
  }

  if (calculatorStore.error) {
    return <Typography>Извините, калькулятор сломався...</Typography>
  }

  return (
    <Section height={height} id="calculator">
      <div>
        <SectionTitle>Калькулятор</SectionTitle>
        <LayoutGroup>
          <div
            ref={section}
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(auto-fit, 1fr)',
            }}
          >
            <LayoutGroup>
              {calculatorStore.blocks.map((block) => (
                <CalculatorCard
                  store={block}
                  key={block.data.id}
                  handleAmountChange={handleAmountChange}
                />
              ))}
            </LayoutGroup>
          </div>
          <FooterWrapper>
            <ImageButton>
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
        </LayoutGroup>
      </div>
    </Section>
  )
})

export default Calculator
