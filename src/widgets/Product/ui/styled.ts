import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors'
import Image from 'next/image'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px;
  gap: 20px;
  width: 1180px;

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
    gap: 32px;
    padding: 32px;
  }

  @media (max-width: 620px) {
    width: 328px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 136px;

  @media (max-width: 940px) {
    height: 100%;
  }

  @media (max-width: 620px) {
    height: 136px;
  }
`

const Img = styled(Image)`
  width: 129px;
  height: 96px;
  object-fit: cover;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ImageColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 940px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const PriceColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 940px) {
    gap: 12px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }
`

const UnorderedList = styled.ul`
  position: relative;
  margin-inline-start: 20px;

  li::before {
    position: absolute;
    font-size: 16px;
    left: -15px;
    content: '•';
  }

  @media (max-width: 620px) {
    margin-inline-start: 15px;

    li::before {
      font-size: 14px;
      left: -13px;
    }
  }
`

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 800;

  @media (max-width: 620px) {
    font-size: 20px;
  }
`

const SectionTitle = styled.p`
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-size: 16px;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

export {
  Card,
  ImageWrapper,
  ImageColumnWrapper,
  PriceColumnWrapper,
  ColumnWrapper,
  ContentWrapper,
  UnorderedList,
  BlockWrapper,
  Img,
  Title,
  SectionTitle,
  Text,
}
