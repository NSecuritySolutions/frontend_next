'use client'
import { useState } from 'react'
import { useRef, useEffect } from 'react'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'

import { policy } from '@/shared/constants/texts/policy.ts'
import { IPolicyItem } from '@/shared/constants/texts/policy.ts'

import colors from '@/shared/constants/colors/index.ts'
import {
  SectionWrapper,
  SectionTitle,
  BlockTitle,
  BlockParagraph,
  BlockWrapper,
  BlockText,
} from './styled.ts'

export default function PolicyPage() {
  const sectionRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const [isHeight, setIsHeight] = useState('')

  const handleContainerClick = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (sectionRef.current) {
      const height = sectionRef.current.clientHeight
      setIsHeight(`${height}px`)
      console.log(isHeight)
    }
  }, [isExpanded])

  //@TODO -  если понадобится скролл внутри блока Политики style={{ overflow: 'scroll', scrollbarWidth: 'none' }}

  return (
    <SectionWrapper
      ref={sectionRef}
      $additional={isExpanded}
      $height={isExpanded ? '6250px' : '760px'}
      id="policy"
      // className={!isExpanded ? 'no_expanded' : ''}
    >
      <SectionTitle>{policy.title}</SectionTitle>
      <div style={{ overflow: 'hidden', scrollbarWidth: 'none' }}>
        {policy.paragraphs.map((item: IPolicyItem, i: number) => (
          <BlockWrapper key={i}>
            <BlockTitle>{item.title}</BlockTitle>
            <BlockParagraph>{item.paragraph}</BlockParagraph>
            <BlockText style={{ whiteSpace: 'pre-wrap' }}>{item.text}</BlockText>
          </BlockWrapper>
        ))}
      </div>
      <BtnLink
        onClick={handleContainerClick}
        btnType="transparent"
        text={isExpanded ? 'Вернуться' : 'Читать полностью'}
        width="214px"
        height="56px"
        color={colors.darkPrimary}
        size="15px"
      />
    </SectionWrapper>
  )
}
