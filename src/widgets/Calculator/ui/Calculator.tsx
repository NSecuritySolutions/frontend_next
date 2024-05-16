import { Section, SectionTitle, ImgWrap, ImageButton } from './styled'
import { CalculatorCard } from '@/shared/components/CalculatorCard/index'
import { Typography } from '@/shared/components/CalculatorCard/ui/styled'
import colors from '@/shared/constants/colors/index.ts'

import { LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import calculatorStore from '../store'
import { observer } from 'mobx-react-lite'

const camera = '/icons/calculator/camera-white.svg'
const innerCamera = '/icons/calculator/inner-camera.svg'
const bio = '/icons/calculator/fingerprint.svg'
const remoteIcon = '/icons/calculator/remote.svg'

const storageOptions = ['1 tb', '2 tb', '4 tb', '6 tb']
const systemOptions = ['AHD', 'IP']
const pictureOptions = ['HD', 'FullHD', '2K-4K']

const cameraOptions = [
  {
    title: 'Объем хранилища, tb',
    tooltip: 'Ну сколько там надо?',
    type: 'radio',
    options: storageOptions,
    name: 'storage',
  },
  {
    title: 'Настраиваемый объектив',
    tooltip: 'Ну типо приближает, я хз',
    type: 'checkbox',
  },
  {
    title: 'Тип системы',
    tooltip: 'Ну тип системы',
    type: 'radio',
    options: systemOptions,
    name: 'system',
  },
  {
    title: 'Качество изображения',
    tooltip: 'Ну смотря какой экран, если хотите кино смотреть, то берите 4К',
    type: 'radio',
    options: pictureOptions,
    name: 'picture',
  },
  {
    title: 'Запись звука',
    tooltip: 'Ну это если у вас есть наушники',
    type: 'checkbox',
  },
  {
    title: 'Длина кабеля, м',
    tooltip: 'Прикинуться змеей и посчитать расстояние',
    type: 'number',
  },
]

const scud = [
  {
    title: 'Учёт рабочего времени',
    tooltip: 'Я хз, наверн фишка для статистики',
    type: 'checkbox',
  },
  {
    title: 'Кол-во считывателей, шт.',
    tooltip: 'Что-то из прикладной математики похоже',
    type: 'number',
  },
  {
    title: 'Длин кабеля, м',
    tooltip: 'Прикинуться змеей и посчитать расстояние',
    type: 'number',
  },
]

const scaner = [
  {
    title: 'Биометрический терминал',
    tooltip: 'Как в кино типо',
    type: 'checkbox',
  },
]

const Calculator: React.FC = observer(() => {
  const [height, setHeight] = useState(0)
  const section = useRef<HTMLDivElement | null>(null)

  console.log(calculatorStore.data)

  useEffect(() => {
    calculatorStore.fetchData()
  }, [])

  const handleAmountChange = (condition: boolean) => {
    const currentHeight = section.current!.clientHeight
    if (condition) {
      setTimeout(() => {
        if (section.current!.clientHeight < currentHeight + 80) {
          setHeight(1000)
        } else {
          setHeight(section.current!.clientHeight + 195)
        }
      }, 0)
    }
    setTimeout(() => {
      setHeight(section.current!.clientHeight + 195)
    }, 1000)
  }

  const calculateResult = () => {
    let result = 0
    calculatorStore.variables.forEach((value, key) => {
      if (typeof value === 'number') {
        result += value
      }
    })
    return result
  }

  if (calculatorStore.isLoading) {
    return <div></div>
  }

  return (
    <Section height={height}>
      <div>
        <SectionTitle>Калькулятор</SectionTitle>
        <LayoutGroup>
          <div
            ref={section}
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <LayoutGroup>
              {calculatorStore.data.map((block) => (
                <CalculatorCard
                  key={block.id}
                  title={block.title}
                  img={camera}
                  handleAmountChange={handleAmountChange}
                  options={block.options}
                />
              ))}
            </LayoutGroup>
          </div>
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
            <Typography size={16} width="fit-content" color={colors.textSecondary}>
              Сбросить настройки
            </Typography>
          </ImageButton>
          <Typography size={16} width="fit-content">
            {calculatorStore.formula}
          </Typography>
        </LayoutGroup>
      </div>
    </Section>
  )
})

export default Calculator
