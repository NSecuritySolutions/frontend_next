import { useState, useEffect, useMemo } from 'react'

import Slider from 'react-slick'

import { projectMilestones } from '@/shared/constants/texts/project-milestones'

import {
  Section,
  SectionWrapper,
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
  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          arrows: false,
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
          arrows: false,
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
      </SectionWrapper>
    </Section>
  )
}

export default ProjectStage
