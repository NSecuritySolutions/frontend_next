import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const CardContainer = styled.article<{ $chosen?: boolean }>`
  background: ${(props) => (props.$chosen ? `${colors.backgroundCardBl}` : '#FFFFFF')};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  border-radius: 8px;
  color: ${colors.darkPrimary};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  font-weight: 400;
  font-size: 16px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 940px) {
    width: 70px;
    height: 70px;
    border-radius: 8px;
  }
`

const CardImg = styled.div<{
  $imgUrl?: string
  alt?: string
  $chosen?: boolean
}>`
  border-radius: 50%;
  background: ${(props) => `url(${props.$imgUrl}) no-repeat center`};
  background-color: ${(props) => (props.$chosen ? '#FFFFFF' : `${colors.backgroundCardBl}`)};
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`

const CardName = styled.h2`
  align-self: center;
  margin: 0;
  overflow-wrap: break-word;
  max-width: 190px;
  font-weight: 700;
  font-size: 15px;

  @media (max-width: 1300px) {
    display: none;
  }
`

export { CardContainer, CardImg, CardName }
