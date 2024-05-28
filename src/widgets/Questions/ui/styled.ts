import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};

  @media (max-width: 1300px) {
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    padding: 0;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  gap: 40px;

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
    padding: 16px;
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
  grid-template-columns: 280px 280px 583px;
  gap: 20px;

  @media (max-width: 1300px) {
    grid-template-columns: 90px 320px 430px;
  }

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 580px;
  }

  @media (max-width: 620px) {
    gap: 12px;
  }
`

const TopicsColumn = styled.div`
  .regular.slider {
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
  .slick-slider {
    width: 328px;
    overflow: visible;
  }

  .slick-list {
    overflow: visible;
  }
`

const QuestionsColumn = styled(motion.div).attrs({
  layout: 'size',
})<{ $height?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 514px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-color: ${colors.scrollActive} ${colors.backgroundBase2};

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${colors.backgroundBase2};
    border-radius: 30px;
    margin-left: 10px;
    padding-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollActive};
    width: 6px;
    border-radius: 30px;
  }

  @media (max-width: 940px) {
    gap: 12px;
    overflow-y: hidden;
    width: 580px;
    height: 0px;
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

  @media (max-width: 619px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`

const ColumnParagraph = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 619px) {
    max-width: 277px;
    width: 100%;
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

  @media (max-width: 619px) {
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
  ColumnParagraph,
  ContactsWrapper,
}
