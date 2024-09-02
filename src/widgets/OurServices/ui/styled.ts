import colors from '../../../shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 40px 0;
  max-width: 1180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    padding: 32px 0;
    width: 100%;
  }

  @media (max-width: 620px) {
    padding: 16px 0;
    max-width: 328px;
    width: 100%;
  }
`

const SectionTitle = styled.h3`
  margin-bottom: 30px;
  color: ${colors.darkPrimary};
  font-size: 24px;
  font-weight: 700;
`

const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 620px) {
    gap: 16px;
  }
`

export { Section, SectionTitle, CardsGridContainer }
