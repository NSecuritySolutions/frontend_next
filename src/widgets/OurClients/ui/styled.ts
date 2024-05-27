'use client'
import colors from '@/shared/constants/colors'
import { StaticImageData } from 'next/image'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};

  @media (max-width: 1300px) {
    padding: 0 20px;
    align-items: center;
    justify-content: center;
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

  @media (max-width: 1300px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 504px) {
    padding: 0;
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

  @media (max-width: 619px) {
    max-width: 268px;
    width: auto;
    align-self: center;
  }
`

const LogoWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 160px;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // gap: 20px;

  @media (max-width: 1300px) {
    margin: 0 auto;
    padding: 0;
    max-width: 620px;
    justify-content: space-around;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  @media (max-width: 940px) {
    padding: 0;
  }

  @media (max-width: 504px) {
  }
`

const LogoYandex = styled.div<{
  alt?: string
}>`
  background: url('/images/clients/webp/yandex.webp') no-repeat;
  background-position: 0px -160px;
  background-size: cover;
  height: 160px;
  width: 160px;

  &:hover {
    cursor: pointer;
    background-position: top;
  }

  @media (max-width: 1300px) {
    align-self: center;
  }
`

const LogoSamokat = styled.div<{ alt?: string }>`
  background: url('/images/clients/webp/samokat.webp') no-repeat;
  background-position: -0.2px -190.3px;
  background-size: cover;
  height: 190px;
  width: 460px;

  &:hover {
    cursor: pointer;
    background-position: top;
  }

  @media (max-width: 1300px) {
    align-self: center;
  }

  @media (max-width: 530px) {
    background-position: -0.2px -124.3px;
    background-size: cover;
    height: 130px;
    width: 300px;
  }
`

const LogoRostelecom = styled.div<{ alt?: string }>`
  background: url('/images/clients/webp/rostelekom.webp') no-repeat;
  background-position: 0px -150.9px;
  background-size: cover;
  height: 151px;
  width: 164px;

  &:hover {
    cursor: pointer;
    background-position: top;
  }

  @media (max-width: 1300px) {
    align-self: center;
  }
`

const LogoAvon = styled.div<{ alt?: string }>`
  background: url('/images/clients/webp/avon.webp') no-repeat;
  background-position: -1px -151.5px;
  background-size: cover;
  height: 160px;
  width: 279px;

  &:hover {
    cursor: pointer;
    background-position: top;
  }

  @media (max-width: 1300px) {
    align-self: center;
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
