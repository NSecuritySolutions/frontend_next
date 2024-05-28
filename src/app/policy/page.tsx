'use client'

import {
  SectionWrapper,
  SectionTitle,
  BlockTitle,
  BlockParagraph,
  BlockWrapper,
  BlockText,
} from './styled.ts'
import { policy } from '@/shared/constants/texts/policy.ts'
import { IPolicyItem } from '@/shared/constants/texts/policy.ts'

export default function PolicyPage() {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  )
}
