import { useState, useEffect } from 'react'
import { projectMilestones } from '@/shared/constants/texts/project-milestones'
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
} from './styled'

const ProjectStage = () => {
  const [isSlider, setIsSlider] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.width >= 880) {
      setIsSlider(false)
    } else {
      setIsSlider(true)
    }
  }, [windowSize])

  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Этапы работ</SectionTitle>
        {isSlider ? (
          // @TODO Здесь можно добавить код для Slick Slider
          <div>Slick Slider здесь</div>
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
