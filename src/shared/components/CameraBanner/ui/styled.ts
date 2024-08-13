import { Canvas } from '@react-three/fiber'

import styled from 'styled-components'

const StyledCanvas = styled(Canvas)`
  left: 111.5px;
  bottom: 100.7px;

  @media (max-width: 1300px) {
    left: 85.8px;
    bottom: 77.5px;
  }

  @media (max-width: 940px) {
    left: 45px;
    bottom: 44.8px;
  }

  @media (max-width: 620px) {
    left: 44.8px;
    bottom: 43.9px;
  }

  @media (max-device-width: 940px) {
    display: none;
  }
`

export { StyledCanvas }
