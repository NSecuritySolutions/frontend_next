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
  width: 235px;
  height: 136px;
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
  width: 235px;

  @media (max-width: 940px) {
    gap: 12px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 940px) {
    gap: 20px;
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

const Text = styled.p<{ $link?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  word-break: break-word;
  color: ${(props) => (props.$link ? colors.titleBlueColor : 'none')};
  // width: 100px;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Button = styled.a<{ $primary?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$primary ? 'none' : `1px solid ${colors.darkPrimary}52`)};
  border-radius: 12px;
  background-color: ${(props) => (props.$primary ? colors.btnPrimary : colors.backgroundPrimary)};
  white-space: nowrap;
  font-size: 15px;
  font-weight: 800;
  width: 235px;
  height: 44px;
  gap: 8px;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? colors.btnPrimaryHover : colors.btnOutlineHover};
  }

  @media (max-width: 620px) {
    font-size: 13px;
    font-weight: 700;
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
  ButtonsWrapper,
  Button,
}
