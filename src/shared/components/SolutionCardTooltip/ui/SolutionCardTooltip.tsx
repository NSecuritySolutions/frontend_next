import Image from 'next/image'
import { FC, useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Tooltip, Title, Paragraph } from './styled'

interface NewTooltipProps {
  title: string
  text: string
}

const SolutionCardTooltip: FC<NewTooltipProps> = ({ title, text }) => {
  const [show, setShow] = useState(false)
  const anchorRef = useRef<HTMLImageElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useLayoutEffect(() => {
    const handleResize = () => {
      if (anchorRef.current && tooltipRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()

        let top = anchorRect.top + window.scrollY + anchorRect.height
        let left = anchorRect.left + window.scrollX

        if (left - tooltipRect.width < 0) {
          left = tooltipRect.width
        }

        setPosition({ top, left })
      }
    }

    if (show) {
      handleResize()
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
    }
  }, [show])

  return (
    <>
      <Image
        src="/icons/solutions/question.svg"
        alt="tooltip"
        width={24}
        height={24}
        ref={anchorRef}
        style={{ position: 'absolute', top: 20, right: 20 }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show &&
        ReactDOM.createPortal(
          <Tooltip
            $width={'420px'}
            ref={tooltipRef}
            $top={position.top}
            $left={position.left}
            // $top={
            //   anchorRef.current!.getBoundingClientRect().top +
            //   window.scrollY +
            //   anchorRef.current!.offsetHeight
            // }
            // $left={anchorRef.current!.getBoundingClientRect().left}
          >
            <Title>{title}</Title>
            {/* {text.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))} */}
            <Paragraph>{text}</Paragraph>
          </Tooltip>,
          document.getElementById('content')!,
        )}
    </>
  )
}

export default SolutionCardTooltip
