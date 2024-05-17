import { FC } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { Card, CardTitle, CardText, TitleContainer } from './styled'

type TCardInfoWithIconProps = {
  title: string
  logo: StaticImageData
  text: string
  backgroundColor: string
}

const CardInfoWithIcon: FC<TCardInfoWithIconProps> = ({ title, logo, text, backgroundColor }) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <TitleContainer>
        {/* <Image src={logo} alt="Logo" width={30} height={30} /> */}
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardText>{text}</CardText>
    </Card>
  )
}

export default CardInfoWithIcon
