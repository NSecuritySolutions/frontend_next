import colors from '@/shared/constants/colors'
import styled from 'styled-components'

const Title = styled.p`
  font-weight: 800;
  max-height: 50px;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  line-height: 1.33;
  font-size: 18px;
  width: 100%;
  text-align: center;

  @media (max-width: 1300px) {
    text-align: start;
  }

  @media (max-width: 620px) {
    font-size: 16px;
  }
`

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
`

const Tooltip = styled.div<{ $width?: string; $top: number; $left: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: max-content;
  background-color: ${colors.backgroundCardYe};
  color: ${colors.darkPrimary};
  padding: 20px 32px;
  border-radius: 20px;
  max-width: ${(props) => props.$width || 'none'};
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  transform: translateX(-100%);
`

export { Tooltip, Title, Paragraph }
