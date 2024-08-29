import { FC } from 'react'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { BtnLink } from '@/shared/components/BtnLink'

import { Card, CardTitle, CardText, CardImg, TextContainer } from './styled'

import { TCardProps } from '../types/types'

import colors from '@/shared/constants/colors/index.ts'

import { rgbDataURL } from '@/shared/constants/utils/utils'

const CardWithText: FC<TCardProps> = ({ title, img, text, btnName, link }) => {
  const router = useRouter()

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        router.push(link)
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <CardTitle>{title}</CardTitle>
        <TextContainer>
          {text.map((item, index) => (
            <CardText key={index}>{item}</CardText>
          ))}
        </TextContainer>
      </div>
      <BtnLink
        btnType="transparent"
        text={btnName}
        width="134px"
        height="44px"
        link={link}
        color={colors.darkPrimary}
        size="15px"
      ></BtnLink>
      <CardImg>
        <Image
          placeholder="blur"
          src={img}
          alt={title}
          width={300}
          height={169}
          // blurDataURL="/blurData/blur2.png"
          style={{ float: 'right' }}
          blurDataURL={rgbDataURL(225, 231, 244)}
          // className={isHovered ? 'card-image expanded' : 'card-image'}
        />
      </CardImg>
    </Card>
  )
}

export default CardWithText
