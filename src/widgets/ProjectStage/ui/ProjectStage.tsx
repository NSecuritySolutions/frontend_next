import { useState, useEffect, useMemo } from 'react'

import Slider from 'react-slick'

import { projectMilestones } from '@/shared/constants/texts/project-milestones'

import { TWindowSize } from '../types/types'

import {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  SectionTitle,
  StageTitle,
  StageParagraph,
  TextWrapper,
  SliderWrapper,
} from './styled'

const ProjectStage = () => {
  const [isSlider, setIsSlider] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  const calculatedWidth = useMemo(() => windowSize.width, [windowSize.width])

  useEffect(() => {
    if (windowSize.width >= 940) {
      setIsSlider(false)
    } else {
      setIsSlider(true)
    }
  }, [calculatedWidth])

  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          arrow: false,
          focusOnSelect: true,
          speed: 200,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          arrow: false,
          focusOnSelect: true,
          speed: 200,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Этапы работ</SectionTitle>
        {isSlider ? (
          <SliderWrapper>
            <Slider {...settings}>
              {projectMilestones.map((item, i) => (
                <Column key={i}>
                  <StageWrapper>
                    <StageNumber>{item.id}</StageNumber>
                    <StageLine />
                  </StageWrapper>
                  <TextWrapper>
                    <StageTitle>{item.title}</StageTitle>
                    <StageParagraph>{item.text}</StageParagraph>
                  </TextWrapper>
                </Column>
              ))}
            </Slider>
          </SliderWrapper>
        ) : (
          <ColumnWrapper>
            {projectMilestones.map((item, i) => (
              <Column key={i}>
                <StageWrapper>
                  <StageNumber>{item.id}</StageNumber>
                  <StageLine />
                </StageWrapper>
                <TextWrapper>
                  <StageTitle>{item.title}</StageTitle>
                  <StageParagraph>{item.text}</StageParagraph>
                </TextWrapper>
              </Column>
            ))}
          </ColumnWrapper>
        )}
      </SectionWrapper>
    </Section>
  )
}

export default ProjectStage
