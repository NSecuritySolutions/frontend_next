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

  @media (max-width: 1180px) {
    max-width: 122px;
  }

  @media (max-width: 620px) {
    flex-direction: row;
    gap: 8px;
    max-width: 308px;
  }
`

const TextWrapper = styled.div`
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
    width: 172px;
    height: 172px;
    object-fit: cover;

    scale: 1;
    transition: transform 1s;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1180px) {
    width: 122px;
    height: 122px;

    img {
      width: 122px;
      height: 122px;
    }
  }
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

  @media (max-width: 1180px) {
    text-wrap: wrap;
  }
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

export { CardContainer, CardImg, CardName, CardPosition, CardTel, TextWrapper }
