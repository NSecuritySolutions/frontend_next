import { FC, useRef, useState } from 'react'
import { TooltipImage, Tip } from './styled'
import ReactDOM from 'react-dom'
import colors from '@/shared/constants/colors'
import { Typography } from '@/shared/components/Typography'

const Tooltip: FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TooltipImage
      ref={ref}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible &&
        ReactDOM.createPortal(
          <Tip
            $maxWidth="200px"
            style={{
              top: ref.current!.offsetTop,
              left: ref.current!.offsetLeft + ref.current!.offsetWidth,
            }}
          >
            <Typography width="100%" size={15} $weight={500} color={colors.backgroundPrimary}>
              {text}
            </Typography>
          </Tip>,
          document.getElementById('content')!,
        )}
    </TooltipImage>
  )
}

export default Tooltip
