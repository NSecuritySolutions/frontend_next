import colors from '@/shared/constants/colors'
import Image from 'next/image'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 940px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  width: 1180px;

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
  }

  @media (max-width: 620px) {
    width: 328px;
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 160px;
  align-items: center;

  @media (max-width: 1300px) {
    height: 120px;
  }

  @media (max-width: 940px) {
    height: auto;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  @media (max-width: 620px) {
  }
`

const LogoYandex = styled(Image)`
  filter: grayscale(100%) brightness(150%);
  height: 160px;
  width: 160px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: none;
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    height: 120px;
    width: 120px;
    padding: 15px;
  }

  @media (max-width: 940px) {
    order: 1;
  }

  @media (max-width: 620px) {
    height: 90px;
    width: 90px;
    padding: 11px;
  }
`

const LogoSamokat = styled(Image)`
  filter: grayscale(100%) brightness(135%);
  object-fit: cover;
  height: 160px;
  width: 460px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: none;
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    height: 120px;
    width: 345px;
  }

  @media (max-width: 940px) {
    order: 2;
  }

  @media (max-width: 620px) {
    height: 90px;
    width: 226px;
  }
`

const LogoRostelecom = styled(Image)`
  filter: brightness(350%) contrast(40%) grayscale(100%);
  height: 160px;
  width: 175px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: none;
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    height: 120px;
    width: 131px;
    padding: 4px;
  }

  @media (max-width: 940px) {
    order: 3;
  }

  @media (max-width: 620px) {
    height: 83px;
    width: 90px;
    padding: 3px;
  }
`

const LogoAvon = styled(Image)`
  filter: contrast(0%) brightness(120%);
  // height: 160px;
  width: 300px;
  height: auto;
  cursor: pointer;
  padding: 44px 9px;
  transition: all 0.3s;

  &:hover {
    filter: none;
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    height: 120px;
    width: 225px;
    padding: 33px 7px;
  }

  @media (max-width: 940px) {
    order: 4;
  }

  @media (max-width: 620px) {
    height: 78px;
    width: 146px;
    padding: 21px 4px;
  }
`

export {
  Section,
  SectionWrapper,
  SectionTitle,
  LogoWrapper,
  LogoYandex,
  LogoSamokat,
  LogoRostelecom,
  LogoAvon,
}
