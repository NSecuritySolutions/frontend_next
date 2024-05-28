import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 172px;
  width: 100%;
  color: ${colors.darkPrimary};
  font-weight: 400;
  font-size: 16px;
`

const CardImg = styled.div`
  border-radius: 550px;
  width: 172px;
  height: 172px;
  background-color: ${colors.backgroundCardBl};
  background-size: cover;
`

const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 172px;
  margin-top: 6px;
  width: 100%;
  justify-content: center;
  text-wrap: nowrap;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
`

const CardPosition = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 172px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  text-align: center;
`

const CardTel = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 172px;
  width: 100%;
  font-family: Manrope, sans-serif;
  justify-content: center;
  margin-top: 6px;
  text-wrap: wrap;
  text-align: center;
`

export { CardContainer, CardImg, CardName, CardPosition, CardTel }
