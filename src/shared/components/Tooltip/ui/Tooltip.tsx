import { FC, useState } from 'react'
import { TooltipImage, Tip } from './styled'
import colors from '@/shared/constants/colors'
import { Typography } from '@/shared/components/Typography'

const Tooltip: FC<{ text: string }> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TooltipImage onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {isVisible && (
        <Tip $maxWidth="200px">
          <Typography width="100%" size={15} $weight={500} color={colors.backgroundPrimary}>
            {text}
          </Typography>
        </Tip>
      )}
    </TooltipImage>
  )
}

export default Tooltip
