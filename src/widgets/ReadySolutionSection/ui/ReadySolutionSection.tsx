import { useState } from 'react'
import { CardsContainer, Section, SectionTitle, TabButton, TabsContainer } from './styled'
import {
  cardSolutionData,
  cardSolutionData2,
  cardSolutionData3,
} from '@/shared/constants/texts/cards-solution'
import { CardSolution } from '@/shared/components/CardSolution'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'
import Slider from 'react-slick'

const ReadySolutionSection = () => {
  const [activeTab, setActiveTab] = useState('VideoSurveillance')
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const tabSettings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  }

  const cardSettings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 620,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  }

  let activeTabData: TCardSolutionProps[] = []

  switch (activeTab) {
    case 'VideoSurveillance':
      activeTabData = cardSolutionData
      break
    case 'Intercom':
      activeTabData = cardSolutionData2
      break
    case 'SecurityFireAlarms':
      activeTabData = cardSolutionData3
      break
    default:
      break
  }

  return (
    <Section id="solutions">
      <SectionTitle>Готовые решения</SectionTitle>
      <TabsContainer>
        <Slider {...tabSettings}>
          <TabButton
            onClick={() => handleTabChange('VideoSurveillance')}
            $activetab={activeTab === 'VideoSurveillance'}
          >
            Видеонаблюдение
          </TabButton>
          <TabButton
            onClick={() => handleTabChange('Intercom')}
            $activetab={activeTab === 'Intercom'}
          >
            Домофония/СКУД
          </TabButton>
          <TabButton
            onClick={() => handleTabChange('SecurityFireAlarms')}
            $activetab={activeTab === 'SecurityFireAlarms'}
          >
            Охранно-пожарные сигнализации
          </TabButton>
        </Slider>
      </TabsContainer>

      <CardsContainer>
        <Slider {...cardSettings}>
          {activeTabData.map((solution) => (
            <CardSolution data={solution} key={solution.id} />
          ))}
        </Slider>
        <p id="calculator-start" style={{ display: 'none' }}></p>
      </CardsContainer>
    </Section>
  )
}

export default ReadySolutionSection
