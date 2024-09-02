import { FC } from 'react'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { BtnLink } from '../../BtnLink'

import { rgbDataURL } from '@/shared/constants/utils/utils'

import { Card, CardText, CardTitle, CardImg, TextWrapper, TextContainer } from './styled'

import colors from '@/shared/constants/colors'
import { StaticImageData } from 'next/image'

type TCardProps = {
  title: string
  img: StaticImageData | string
  text: string[]
  btnName: string
  link: string
  backgroundColor: string
}

const CardWithTextAndBanner: FC<TCardProps> = ({
  title,
  img,
  text,
  link,
  backgroundColor,
  btnName,
}) => {
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
      $backgroundColor={backgroundColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        router.push(link)
      }}
    >
      <CardImg>
        <Image
          src={img}
          alt={title}
          width={540}
          height={305}
          placeholder="blur"
          blurDataURL={rgbDataURL(225, 231, 244)}
          // className={isHovered ? 'card-image expanded' : 'card-image'}
        />
      </CardImg>
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <TextContainer>
          {text.map((item, index) => (
            <CardText key={index}>{item}</CardText>
          ))}
        </TextContainer>
        <BtnLink
          btnType="transparent"
          text={btnName}
          width="212px"
          height="44px"
          link={link}
          color={colors.darkPrimary}
          size="15px"
        ></BtnLink>
      </TextWrapper>
    </Card>
  )
}

export default CardWithTextAndBanner
