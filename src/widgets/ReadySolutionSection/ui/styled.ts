import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 40px 0 75px 0;
  width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
    padding: 40px 0;
  }

  @media (max-width: 620px) {
    width: 328px;
    padding: 16px 0;
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

  .ready-solutions-slider .slick-prev {
    background-image: url('/icons/ic-next-button.svg');
    background-size: contain;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 48%;
    left: -80px;
    transform: translateY(-50%) rotate(180deg);
    z-index: 3;

    &:before {
      display: none;
    }

    @media (max-width: 620px) {
      display: none;
    }
  }

  .ready-solutions-slider .slick-next {
    background-image: url('/icons/ic-next-button.svg');
    background-size: contain;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 48%;
    right: -80px;
    transform: translateY(-50%);
    z-index: 3;

    &:before {
      display: none;
    }
  }

  .ready-solutions-slider .slick-disabled {
    // visibility: hidden;
    opacity: 30%;
    cursor: default;
  }

  .ready-solutions-slider .slick-track {
    display: flex;
    gap: 20px;
  }

  .ready-solutions-slider .slick-list {
    @media (max-width: 940px) {
      overflow: visible;
    }
  }

  .ready-solutions-slider .slick-dots {
    bottom: -35px;

    li {
      width: fit-content;
      height: fit-content;

      &.slick-active div {
        background-color: ${colors.btnPrimary};
      }
    }
  }
`

const CustomDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #d7d7d7;
`

export { Section, SectionTitle, TabsContainer, TabButton, CardsContainer, CustomDot }
