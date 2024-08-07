import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 40px 0;
  max-width: 1180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 620px) {
    max-width: 328px;
  }
`

const SectionTitle = styled.h3`
  color: ${colors.darkPrimary};
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-size: 20px;
  }
`

const TabsContainer = styled.div`
  .ready-solutions-tabs-slider.slider.regular {
    display: flex;
    gap: 16px;
  }

  .ready-solutions-tabs-slider .slick-track {
    display: flex;
    gap: 16px;

    @media (max-width: 620px) {
      gap: 8px;
    }
  }

  .ready-solutions-tabs-slider .slick-list {
    overflow: visible;
  }
`

const TabButton = styled.div<{ $activetab: boolean }>`
  background-color: ${(props) => (props.$activetab ? colors.btnPrimary : colors.backgroundPrimary)};
  color: ${(props) => (props.$activetab ? colors.darkPrimary : colors.darkPrimaryOpacity)};
  border: none;
  width: max-content;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;

  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    color: ${colors.darkPrimary};
  }

  @media (max-width: 940px) {
    padding: 8px 12px;
  }

  @media (max-width: 620px) {
    font-size: 13px;
  }
`

const CardsContainer = styled.div`
  .ready-solutions-slider.slider.regular {
    display: flex;
    gap: 20px;
  }

  .ready-solutions-slider .slick-track {
    display: flex;
    gap: 20px;
  }

  .ready-solutions-slider .slick-list {
    overflow: visible;
  }
`

export { Section, SectionTitle, TabsContainer, TabButton, CardsContainer }
