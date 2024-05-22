import Image from 'next/image'
import { Typography } from '@/shared/components/Typography'
import colors from '@/shared/constants/colors'
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
      if (scrollPosition > 2 * screenHeight) {
        setHasScrolledTwoScreens(true)
      } else {
        setHasScrolledTwoScreens(false)
      }

      const mainElement = document.querySelector('main')

      if (mainElement && ref.current) {
        const mainRect = mainElement.getBoundingClientRect()

        console.log(mainElement.offsetTop + mainElement.offsetHeight, mainRect.bottom)

        if (mainRect.bottom <= window.innerHeight) {
          setIsFixed(false)
        } else {
          setIsFixed(true)
        }
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
          position={isFixed ? 'fixed' : 'absolute'}
          bottom={30}
          right={40}
          initial={{ bottom: '-80px' }}
          animate={{ bottom: 30 }}
          exit={{ bottom: '-80px' }}
        >
          <Image
            src="/icons/arrow-up.svg"
            alt="Вернуться в начало"
            width={40}
            height={40}
            style={{
              borderRadius: '50%',
              backgroundColor: colors.backgroundPrimary,
              padding: 7,
            }}
          />
          <Typography size={13}>наверх</Typography>
        </FloatDiv>
      )}
    </AnimatePresence>
  )
}

export default ScrollButton
