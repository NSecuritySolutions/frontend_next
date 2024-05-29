import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div<{ $backgroundColor: string }>`
  margin: 0 auto;
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

  @media (max-width: 1180px) {
    max-width: 880px;
    gap: 40px;
  }

  @media (max-width: 880px) {
    max-height: 266px;
    padding: 20px 20px 20px 0;
    gap: 20px;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    max-height: 434px;
    flex-direction: column-reverse;
    padding: 20px;
  }
`

const TextWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  a {
    margin-top: 8px;
  }

  @media (max-width: 880px) {
    max-width: 260px;
    width: 100%;

    a {
      margin-top: 20px;
    }
    
  }

  @media (max-width: 620px) {
    max-width: 288px;
    height 177px;
    line-height: 1.2;
    transform: none;
    gap: 12px;

    a {
      margin: 0 auto;
      margin-top: 8px;
    }
  }
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  max-width: 380px;
  width: 100%;

  @media (max-width: 620px) {
    font-weight: 700;
    font-size: 16px;
  }
`
const TextContainer = styled.ul`
  list-style: inside;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  max-width: 540px;
  width: 100%;
  line-height: 1.2;

  @media (max-width: 1180px) {
    max-width: 540px;
  }
  @media (max-width: 880px) {
  }

  @media (max-width: 620px) {
    max-width: 288px;
    height: 100%;
  }
`
const CardText = styled.li`
  font-weight: 400;
  font-size: 16px;
  max-width: 540px;
  width: 70%;
  z-index: 1;
  line-height: 1.2;

  font-size: 16px;
  fornt-weight: 400;
  list-style: none;

  @media (max-width: 1180px) {
    max-width: 540px;
    width: 100%;
  }

  @media (max-width: 880px) {
    max-width: 260px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 288px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    fornt-weight: 400;
  }
`

const CardImg = styled.div`
  margin: 0;
  padding-top: 20px;
  max-width: 540px;
  max-height: 305px;
  width: 100%;

  @media (max-width: 1180px) {
    max-width: 320px;
    width: 100%;
    max-height: 227px;
    
    img {
      max-width: 320px;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 880px) {
 

    img {
     max-width: 400px;
     width: 100%;
     max-height: 230px;
     object-fit: cover;
    }
  }

  @media (max-width: 620px) {
    padding-top: 20px
    max-width: 328px;
    width: 100%;
    max-height: 197px;

    img {
      object-fit: cover;
    }
  }
`

export { Card, CardText, CardTitle, CardImg, TextWrapper, TextContainer }
