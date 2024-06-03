import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px 50.5px;
  // max-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 12px;
  max-width: 580px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1300px) {
    padding: 20px;
  }

  a {
    @media (max-width: 620px) {
      margin-top: 20px;
    }
  }
`

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  max-width: 500px;
  width: 100%;
`

const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  font-weight: 400;
  font-size: 16px;
  padding-left: 20px;
`

const CardText = styled.li`
  position: relative;
  text-indent: 0;
  font-weight: 400;
  font-size: 16px;
  max-width: 500px;
  width: 90%;
  z-index: 1;
  line-height: 1.2;

  position: relative;

  &:before {
    content: '•';
    position: absolute;
    left: -20px;
  }
  @media (max-width: 940px) {
    width: 80%;
  }
  @media (max-width: 620px) {
    width: 90%;
  }
`

const CardImg = styled.div`
  position: absolute;
  top: 141px;
  right: 0px;
  width: 300px;
  height: 169px;
  object-fit: cover;
  transition: transform 1s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    width: 220px;
    height: 124px;
    top: 145px;
    right: 0px;

    img {
      width: 220px;
      height: 124px;
    }
  }

  @media (max-width: 620px) {
    display: none;
  }
`

export { Card, CardText, CardTitle, CardImg, TextContainer }
