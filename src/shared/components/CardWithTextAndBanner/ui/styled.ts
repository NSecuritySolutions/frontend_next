import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div<{ $backgroundColor: string }>`
  margin-top: 15px;
  background-color: ${(props) => props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1180px;
  max-height: 320px;
  overflow: hidden;

  @media (max-width: 880px) {
    max-height: 266px;
    padding: 20px;
  }
`

const TextWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  padding-top: 71px;
  padding-bottom: 71px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  @media (max-width: 880px) {
    max-width: 260px;
    width: 100%;

    a {
      margin-top: 20px;
    }
  }
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  max-width: 380px;
  width: 100%;
`
const TextContainer = styled.ul`
  list-style: inside;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  height: 145px;
  min-width: 540px;

  @media (max-width: 880px) {
    line-height: 1.2;
  }
`
const CardText = styled.li`
  font-weight: 400;
  font-size: 16px;
  max-width: 540px;
  width: 70%;
  z-index: 1;

  font-size: 16px;
  fornt-weight: 400;
  list-style: none;

  @media (max-width: 880px) {
    max-width: 260px;
    line-height: 1.2;
  }
`

const CardImg = styled.div`
  margin: 0;
  padding-top: 20px;
  max-width: 540px;
  max-height: 305px;
  width: 100%;

  @media (max-width: 880px) {
    max-width: 300px;
    width: 100%;
    max-height: 227px;

    img {
      max-width: 300px;
      width: 100%;
      max-height: 227px;
    }
  }
`

export { Card, CardText, CardTitle, CardImg, TextWrapper, TextContainer }
