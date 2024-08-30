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
  // const [isOpen, setIsOpen] = useState<boolean>(false)
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
    // onClick={() => {
    //   setIsOpen(true)
    // }}
    >
      <ImageWrapper
        onClick={() => {
          router.push(`/ourworks/${item.id}`)
        }}
      >
        <InfoIconWrapper>
          <InfoIcon>{item.time} дн.</InfoIcon>
          <InfoIcon>
            {item.budget.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </InfoIcon>
          <InfoIcon>{item.area + ' м\u00B2'}</InfoIcon>
        </InfoIconWrapper>
        <TextWrapper>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledParagraph>{truncate(item.description[0], 100)}</StyledParagraph>
        </TextWrapper>
        <Image src={item.images.find((image) => image.is_main)?.image || ''} alt="" fill />
      </ImageWrapper>
    </BannerWrapper>
  )
}

export default OurWorksBanner
