'use client'

import { useState } from 'react'

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

export default function Policy() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleContainerClick = () => {
    setIsExpanded(!isExpanded)
  }

  //@TODO -  useRef - сделать высоту контейнера c текстом универсальной.

  return (
    <SectionWrapper $additional={isExpanded} $height={isExpanded ? '6150px' : '760px'} id="policy">
      <SectionTitle>{policy.title}</SectionTitle>
      <div style={{ overflow: 'hidden', scrollbarWidth: 'none' }}>
        {policy.paragraphs.map((item: IPolicyItem, i: number) => (
          <BlockWrapper key={i}>
            <BlockTitle>{item.title}</BlockTitle>
            <BlockParagraph>{item.paragraph}</BlockParagraph>
            <BlockText>{item.text}</BlockText>
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
