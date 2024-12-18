import Image from 'next/image'
import { Typography } from '@/shared/components/Typography'
import { useEffect, useRef, useState } from 'react'
import { FloatDiv } from './styled'
import { AnimatePresence } from 'framer-motion'

const ScrollButton = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasScrolledTwoScreens, setHasScrolledTwoScreens] = useState(false)
  const [isFixed, setIsFixed] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight

      // Проверяем, проскроллил ли пользователь два экрана
      setHasScrolledTwoScreens(scrollPosition > 2 * screenHeight)

      const mainElement = document.querySelector('main')

      if (mainElement && ref.current) {
        const mainRect = mainElement.getBoundingClientRect()

        setIsFixed(mainRect.bottom >= window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {hasScrolledTwoScreens && (
        <FloatDiv
          ref={ref}
          onClick={() => handleOnClick()}
          $position={isFixed ? 'fixed' : 'absolute'}
          $bottom={30}
          $right={40}
        >
          <Image src="/icons/arrow-up.svg" alt="Вернуться в начало" width={40} height={40} />
          <Typography size={13}>наверх</Typography>
        </FloatDiv>
      )}
    </AnimatePresence>
  )
}

export default ScrollButton
