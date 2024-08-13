import { FC, useState } from 'react'
import {
  CardsContainer,
  Section,
  SectionTitle,
  TabButton,
  TabsContainer,
  CustomDot,
} from './styled'
import { CardSolution } from '@/shared/components/CardSolution'
import Slider from 'react-slick'
import { ISolution, ITag } from '../types'

interface ReadySolutionSectionProps {
  data: { solutions: ISolution[]; tags: ITag[] }
}

const ReadySolutionSection: FC<ReadySolutionSectionProps> = ({ data: { solutions, tags } }) => {
  const [activeTab, setActiveTab] = useState(tags[0].title)
  const [activeTabData, setActiveTabData] = useState(
    solutions.filter(
      (solution) => solution.tags.find((tag) => tag.title === tags[0].title) != undefined,
    ),
  )

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setActiveTabData(solutions.filter((solution) => solution.tags.find((tag) => tag.title === tab)))
  }

  const tabSettings = {
    className: 'ready-solutions-tabs-slider',
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
    className: 'ready-solutions-slider',
    speed: 300,
    responsive: [
      {
        breakpoint: 999999999,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true,
          arrows: true,
          dots: true,
        },
      },
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
    customPaging() {
      return <CustomDot />
    },
  }

  return (
    <Section id="solutions">
      <SectionTitle>Готовые решения</SectionTitle>
      <TabsContainer>
        <Slider {...tabSettings}>
          {tags.map((tag) => (
            <TabButton
              key={tag.id}
              onClick={() => handleTabChange(tag.title)}
              $activetab={activeTab === tag.title}
            >
              {tag.title}
            </TabButton>
          ))}
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
