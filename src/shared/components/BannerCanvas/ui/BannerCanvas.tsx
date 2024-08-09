import { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { StyledCanvas } from './styled'
import { CameraBannerObj } from '@/shared/components/CameraBanner'

interface BannerCanvasProps {
  area: RefObject<HTMLDivElement>
  setReady: Dispatch<SetStateAction<boolean>>
}

const BannerCanvas: FC<BannerCanvasProps> = ({ area, setReady }) => {
  return (
    <StyledCanvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 5], fov: 50 }}>
      <spotLight
        intensity={9000}
        position={[20, 10, 30]}
        penumbra={1}
        shadow-mapSize={[1024, 1024]}
        castShadow
      />
      <CameraBannerObj
        sceneProps={{
          rotation: [0, Math.PI, 0],
          position: [0, 0.5, 0],
          scale: 0.35,
        }}
        setReady={setReady}
        area={area}
      />
    </StyledCanvas>
  )
}

export default BannerCanvas
