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
  gap: 8px;

  @media (max-width: 1300px) {
    max-width: 122px;
  }

  @media (max-width: 620px) {
    flex-direction: row;
    max-width: 308px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

const CardImg = styled.div`
  overflow: hidden;
  border-radius: 550px;
  width: 172px;
  height: 172px;
  background-color: ${colors.backgroundCardBl};
  background-size: cover;

  img {
    border-radius: 500px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    scale: 1;
    transition: scale 1s;

    &:hover {
      scale: 1.2;
    }
  }

  @media (max-width: 1300px) {
    width: 122px;
    height: 122px;
  }
`

const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 172px;
  width: 100%;
  justify-content: center;
  text-wrap: nowrap;
  text-align: center;
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 1300px) {
    text-wrap: wrap;
  }

  @media (max-width: 620px) {
    text-align: start;
  }
`

const CardPosition = styled.div`
  display: flex;
  max-width: 172px;
  width: 100%;
  justify-content: center;
  text-align: center;

  @media (max-width: 620px) {
    justify-content: start;
    text-align: start;
  }
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

export { CardContainer, CardImg, CardName, CardPosition, CardTel, TextWrapper }
