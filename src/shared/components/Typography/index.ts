import colors from '@/shared/constants/colors'
import styled from 'styled-components'

const Typography = styled.p<{
  width?: string
  size?: number
  $weight?: number
  $justifyContent?: 'start' | 'center' | 'end'
  color?: string
}>`
  display: flex;
  font-size: var(--font-size, ${(props) => props.size || 20}px);
  font-weight: var(--font-weight, ${(props) => props.$weight || 700});
  justify-content: ${(props) => props.$justifyContent || 'start'};
  width: ${(props) => props.width || 'fit-content'};
  color: ${(props) => props.color || colors.darkPrimary}}
`

export { Typography }
