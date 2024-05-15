import { useState } from 'react'
import { CardsContainer, Section, SectionTitle, TabButton, TabsContainer } from './styled'
import {
  cardSolutionData,
  cardSolutionData2,
  cardSolutionData3,
} from '@/shared/constants/texts/cards-solution'
import { CardSolution } from '@/shared/components/CardSolution'
import { TCardSolutionProps } from '@/shared/components/CardSolution/ui/CardSolution'

const ReadySolutionSection = () => {
  const [activeTab, setActiveTab] = useState('VideoSurveillance')
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
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
    <Section>
      <SectionTitle>Готовые решения</SectionTitle>
      <TabsContainer>
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
      </TabsContainer>
      <CardsContainer>
        {activeTabData.map((solution) => (
          <CardSolution
            key={solution.id}
            title={solution.title}
            img={solution.img}
            listItem={solution.listItem}
            price={solution.price}
            toolTipText={solution.toolTipText}
          />
        ))}
      </CardsContainer>
    </Section>
  )
}

export default ReadySolutionSection
