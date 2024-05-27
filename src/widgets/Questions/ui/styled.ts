import colors from '@/shared/constants/colors'

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
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 640px) {
    padding: 60px 0;
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  font-size: 24px;
  font-weight: 700;

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 640px) {
    max-width: 410px;
  }

  @media (max-width: 480px) {
    max-width: 305px;
  }

  @media (max-width: 340px) {
    max-width: 280px;
  }
`

const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  //grid-template-columns: repeat(1, minmax(120px, 400px) minmax(120px, 580px));
  //column-gap: 20px;
  gap: 20px;

  @media (max-width: 1300px) {
    max-width: 880px;
    gap: 16px;
  }

  @media (max-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 940px) {
    padding: 0;
    flex-wrap: wrap;
    max-width: 580px;
  }

  @media (max-width: 644px) {
    justify-content: center;
  }
`

const TopicsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 514px;

  @media (max-width: 940px) {
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    height: auto;
    flex-flow: wrap;
    justify-content: center;
    padding: 0 30px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`

const QuestionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 514px;
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
  }

  @media (max-width: 619px) {
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
