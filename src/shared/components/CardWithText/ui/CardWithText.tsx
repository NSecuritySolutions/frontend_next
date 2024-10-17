import { FC } from 'react'
import Image from 'next/image'
import { BtnLink } from '@/shared/components/BtnLink'
import { TCardProps } from '../types/types'
import colors from '@/shared/constants/colors/index.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils'
import { Card, CardTitle, CardText, CardImg, TextContainer } from './styled'

const CardWithText: FC<TCardProps> = ({ title, img, text, btnName, link }) => {
  return (
    <Card>
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
          style={{ float: 'right' }}
          blurDataURL={rgbDataURL(225, 231, 244)}
        />
      </CardImg>
    </Card>
  )
}

export default CardWithText
