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

  @media (max-width: 880px) {
    max-width: 580px;
    width: 100%;
  }
`

const SectionTitle = styled.h3`
  margin-bottom: 30px;
  color: ${colors.darkPrimary};
  font:
    700 24px Manrope,
    sans-serif;
`

const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  & > div:nth-child(3) {
    @media (max-width: 880px) {
      div {
        top: 180px;
      }
    }
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`

export { Section, SectionTitle, CardsGridContainer }
