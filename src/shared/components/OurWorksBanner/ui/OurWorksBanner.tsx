'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { BannerProps } from './types.ts'
import { TWorkExamples } from '@/shared/constants/texts/types.ts'

import {
  InfoIconWrapper,
  InfoIcon,
  BannerWrapper,
  StyledTitle,
  StyledParagraph,
  TextWrapper,
  ImageWrapper,
} from './styled.ts'

const OurWorksBanner: React.FC<BannerProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...'
    } else {
      return str
    }
  }

  return (
    <BannerWrapper
      onClick={() => {
        setIsOpen(true)
      }}
    >
      <ImageWrapper
        onClick={() => {
          router.push(`/examples/${item.id}`)
        }}
      >
        <InfoIconWrapper>
          {item.quantities.map((item, i: number) => (
            <InfoIcon key={i}>
              {item.number} {item.measure}
            </InfoIcon>
          ))}
        </InfoIconWrapper>
        <TextWrapper>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledParagraph>{truncate(item.text, 100)}</StyledParagraph>
        </TextWrapper>
        <Image src={item?.cardImage || ''} alt="" fill />
      </ImageWrapper>
    </BannerWrapper>
  )
}

export default OurWorksBanner
