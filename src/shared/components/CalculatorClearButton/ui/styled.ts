import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const ImageButton = styled.button<{ $active?: boolean }>`
  opacity: ${(props) => (props.$active ? 1 : 0.6)};
  display: flex;
  gap: 4px;
  align-items: center;
  padding-top: 4px;
  color: ${(props) => (props.$active ? colors.accentNegative : colors.darkPrimary)};

  path {
    fill: ${(props) => (props.$active ? colors.accentNegative : colors.darkPrimary)};
  }

  @media (max-width: 620px) {
    width: 50%;
    justify-content: end;
  }
`

const SVG = styled.svg.attrs({
  viewBox: '0 0 24 25',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: 24px;
  height: 25px;
`

const Path = styled.path.attrs({
  d: 'M11.9998 13.9008L7.0998 18.8008C6.91647 18.9841 6.68314 19.0758 6.3998 19.0758C6.11647 19.0758 5.88314 18.9841 5.6998 18.8008C5.51647 18.6174 5.4248 18.3841 5.4248 18.1008C5.4248 17.8174 5.51647 17.5841 5.6998 17.4008L10.5998 12.5008L5.6998 7.60078C5.51647 7.41745 5.4248 7.18411 5.4248 6.90078C5.4248 6.61745 5.51647 6.38411 5.6998 6.20078C5.88314 6.01745 6.11647 5.92578 6.3998 5.92578C6.68314 5.92578 6.91647 6.01745 7.0998 6.20078L11.9998 11.1008L16.8998 6.20078C17.0831 6.01745 17.3165 5.92578 17.5998 5.92578C17.8831 5.92578 18.1165 6.01745 18.2998 6.20078C18.4831 6.38411 18.5748 6.61745 18.5748 6.90078C18.5748 7.18411 18.4831 7.41745 18.2998 7.60078L13.3998 12.5008L18.2998 17.4008C18.4831 17.5841 18.5748 17.8174 18.5748 18.1008C18.5748 18.3841 18.4831 18.6174 18.2998 18.8008C18.1165 18.9841 17.8831 19.0758 17.5998 19.0758C17.3165 19.0758 17.0831 18.9841 16.8998 18.8008L11.9998 13.9008Z',
})``

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export { ImageButton, SVG, Path, Text }
