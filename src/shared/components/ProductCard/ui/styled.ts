import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import Image from 'next/image'
import { Typography } from '../../Typography'

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  width: 380px;
  background: ${colors.backgroundPrimary};
  gap: 20px;
  min-height: 611px;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 280px;
  }

  @media (max-width: 620px) {
    padding: 16px;
    width: 156px;
    min-height: 348px;
  }
`

const Img = styled(Image)`
  margin: 0 auto;
  width: 260px;
  height: 164px;

  @media (max-width: 1300px) {
    width: 209px;
    height: 155px;
  }

  @media (max-width: 620px) {
    width: 106px;
    height: 79px;
  }
`

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 620px) {
    font-weight: 800;
    font-size: 20px;
  }
`
const ProductTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  text-wrap: nowrap;

  @media (max-width: 1300px) {
    text-wrap: nowrap;
  }

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
    text-wrap: wrap;
  }
`
const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.textSecondary};

  @media (max-width: 620px) {
    font-size: 14px;
  }
`
const ProductAbout = styled.ul`
  font-weight: 400;
  font-size: 16px;
  list-style-type: disc;
  list-style-position: inside;
  @media (max-width: 620px) {
    display: none;
  }
`
const LinkChild = styled(Typography)`
  margin-left: 20px;
  @media (max-width: 620px) {
    display: none;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  a {
    border-radius: 12px;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    a {
      border-radius: 12px;
      width: 240px;
    }
  }

  @media (max-width: 620px) {
    gap: 8px;
    margin-top: 0;

    a {
      border-radius: 8px;
      width: 124px;
      height: 32px;
      font-weight: 700;
      font-size: 13px;
      line-height: 185%;
      text-align: center;
      text-wrap: nowrap;
    }
  }
`
export {
  CardContainer,
  Img,
  CardWrapper,
  ProductPrice,
  ProductTitle,
  ProductDescription,
  ProductAbout,
  LinkChild,
  ButtonWrapper,
  TextWrapper,
}
