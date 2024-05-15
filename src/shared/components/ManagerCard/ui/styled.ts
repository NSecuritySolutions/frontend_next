import styled from 'styled-components'
import colors from '@/shared/constants/colors'
import { StaticImageData } from 'next/image'

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 180px;
  width: 100%;
  color: ${colors.darkPrimary};
  font-weight: 400;
  font-size: 16px;
`

const CardImg = styled.div<{ $imgUrl: StaticImageData; alt?: string }>`
  border-radius: 500px;
  background-color: ${colors.backgroundCardBl};
  width: 180px;
  height: 180px;
  background: ${(props) => `url(${props.$imgUrl}) no-repeat center`};
  background-size: cover;
`

const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 180px;
  margin-top: 6px;
  width: 100%;
  justify-content: center;
  overflow-wrap: break-word;
  text-align: center;
  font:
    800 18px Manrope,
    sans-serif;
`

const CardPosition = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 180px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  text-align: center;
`

const CardTel = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 180px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  overflow-wrap: break-word;
  text-align: center;
`

export { CardContainer, CardImg, CardName, CardPosition, CardTel }
