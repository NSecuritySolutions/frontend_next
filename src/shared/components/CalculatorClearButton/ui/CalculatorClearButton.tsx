import { FC } from 'react'
import { ImageButton, SVG, Path, Text } from './styled'

interface CalculatorClearButtonProps {
  handleReset: () => void
  isMobile: boolean
  active: boolean
}

const CalculatorClearButton: FC<CalculatorClearButtonProps> = ({
  handleReset,
  isMobile,
  active,
}) => {
  return (
    <ImageButton onClick={handleReset} $active={active}>
      <SVG>
        <Path />
      </SVG>
      <Text>{isMobile ? 'Очистить' : 'Сбросить настройки'}</Text>
    </ImageButton>
  )
}

export default CalculatorClearButton
