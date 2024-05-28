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

export default function PolicyPage() {
  const [isEnlarged, setIsEnlarged] = useState(false)

  const handleContainerClick = () => {
    setIsEnlarged(!isEnlarged)

    const element: HTMLElement | null = document.getElementById('policy')
    console.log({ element }, 'element')
    element?.classList.add('enlarge')
  }

  return (
    <SectionWrapper
      additional={isEnlarged}
      height={isEnlarged ? '2000px' : '500px'}
      transform={isEnlarged}
      id="policy"
    >
      <SectionTitle>{policy.title}</SectionTitle>
      <div style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
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
        text={'Читать полностью'}
        width="214px"
        height="56px"
        color={colors.darkPrimary}
        size="15px"
      />
    </SectionWrapper>
  )
}
