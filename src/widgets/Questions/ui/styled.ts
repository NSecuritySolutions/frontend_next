import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1180px;
  width: 1180px;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 20px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    gap: 16px;
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  line-height: 1.36;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: 280px 300px 583px;
  gap: 10px;

  @media (max-width: 1300px) {
    grid-template-columns: 90px 340px 430px;
  }

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 580px;
    gap: 20px;
  }

  @media (max-width: 620px) {
    gap: 12px;
  }
`

const TopicsColumn = styled.div`
  .questions-slider.regular.slider {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 514px;

    @media (max-width: 940px) {
      flex-direction: row;
      gap: 8px;
      height: auto;
    }

    @media (max-width: 620px) {
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      height: auto;
      flex-flow: wrap;
      justify-content: center;
      padding: 0 30px;
    }
  }
  .questions-slider.slick-slider {
    width: 328px;
    overflow: visible;
  }

  .questions-slider .slick-list {
    overflow: visible;
  }
`

const QuestionsColumn = styled(motion.div).attrs({
  layout: 'size',
})<{ $height?: string }>`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 16px;
  max-height: 514px;
  overflow-y: auto;
  overflow-x: hidden;
  // scrollbar-width: thin;
  // scrollbar-color: ${colors.scrollActive} ${colors.backgroundBase2};
  box-sizing: border-box;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${colors.backgroundBase2};
    border-radius: 6px;
    margin-left: 10px;
    padding-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollActive};
    border-radius: 6px;
  }

  @media (max-width: 940px) {
    padding: 0px;
    gap: 12px;
    overflow-y: hidden;
    width: 580px;
    max-height: none;
  }

  @media (max-width: 620px) {
    width: 328px;
    gap: 8px;
  }
`

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 620px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1300px) {
    gap: 130px;
  }
  @media (max-width: 940px) {
    gap: 19.5px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    justify-self: center;
  }
`
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  TopicsColumn,
  QuestionsColumn,
  SectionTitle,
  TextWrapper,
  ContactsWrapper,
}
