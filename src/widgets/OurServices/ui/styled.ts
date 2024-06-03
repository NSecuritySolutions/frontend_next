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
    width: 100%;
  }

  @media (max-width: 620px) {
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

  & > div {
    @media (max-width: 940px) {
      div {
        top: 110px;
      }
    }
  }

  & > div:nth-child(3) {
    @media (max-width: 1300px) {
      div {
        top: 180px;
      }
    }
    @media (max-width: 940px) {
      div {
        top: 150px;
      }
    }
  }

  & > div:nth-child(4) {
    @media (max-width: 1300px) {
      div {
        top: 180px;
      }
    }
    @media (max-width: 940px) {
      div {
        top: 88px;
      }
    }
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

export { Section, SectionTitle, CardsGridContainer }
