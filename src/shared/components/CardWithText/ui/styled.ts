import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px 50.5px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 12px;
  max-width: 580px;
  width: 100%;
  overflow: hidden;
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
  height: 145px;
  font:
    400 16px Manrope,
    sans-serif;
`

const CardText = styled.li`
  text-indent: 0;
  font-weight: 400;
  font-size: 16px;
  max-width: 500px;
  width: 90%;

  // &:before {
  //   content: '';
  //   display: inline-block;
  //   width: 5px;
  //   height: 5px;
  //   border-radius: 50%;
  //   background-color: #000;
  //   margin-right: 10px;
  //   flex: 1;
  //   max-width: 5px;
  //   min-width: 5px;
  // }
`

const CardImg = styled.img`
  position: absolute;
  top: 151px;
  right: 0px;
  width: 300px;
  height: 169px;
  object-fit: cover;
`

export { Card, CardText, CardTitle, CardImg, TextContainer }
