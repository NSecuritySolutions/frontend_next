import { FC } from 'react'

import Image from 'next/image'

import { BtnLink } from '@/shared/components/BtnLink'

import { Card, CardTitle, CardText, CardImg, TextContainer } from './styled'

import { TCardProps } from '../types/types'

import colors from '@/shared/constants/colors/index.ts'

import { rgbDataURL } from '@/shared/constants/utils/utils'

const CardWithText: FC<TCardProps> = ({ title, img, text, btnName, link }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <TextContainer>
        {text.map((item, index) => (
          <CardText key={index}>{item}</CardText>
        ))}
      </TextContainer>

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
          blurDataURL={rgbDataURL(225, 231, 244)}
        />
      </CardImg>
    </Card>
  )
}

export default CardWithText
