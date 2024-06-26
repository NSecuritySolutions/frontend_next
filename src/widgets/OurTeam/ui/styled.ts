import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 40px;

  @media (max-width: 1300px) {
    padding: 60px 0;
    align-items: center;
    justify-content: center;
  }
`

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};

  @media (max-width: 1300px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 120px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    padding: 20px;
  }
`
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`

const ListItemText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
`

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 700;

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 620px) {
    max-width: 277px;
    width: 100%;
    align-self: center;
  }
`
const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(120px, 540px) minmax(120px, 540px));
  column-gap: 20px;
  gap: 20px;

  @media (max-width: 940px) {
    padding: 40px;
    display: grid;
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }

  @media (max-width: 940px) {
    padding: 0;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 940px) {
    width: 100%;
  }

  @media (max-width: 620px) {
    flex-direction: row;
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

const ColumnParagraph = styled.div`
  font-family: Manrope, sans-serif;
  max-width: 518px;
  width: 100%;
  letter-spacing: -0.5px;
  display: flex;
  flex-direction: column;

  gap: 12px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 277px;
    width: 100%;
  }
`

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;

  @media (max-width: 940px) {
    gap: 19.5px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 12px;
  }
`
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  ColumnTitle,
  TextWrapper,
  ColumnParagraph,
  ContactsWrapper,
  ListItem,
  ListItemText,
  StyledList,
}
