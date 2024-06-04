import { FC } from 'react'

import Image, { StaticImageData } from 'next/image'

import { rgbDataURL } from '@/shared/constants/utils/utils.ts'

import {
  Card,
  CardTitle,
  ContentContainer,
  List,
  ListItem,
  ListItemText,
  TitleContainer,
  CardImg,
} from './styled'

type TCardProps = {
  title: string
  banner: StaticImageData
  listItem: string[]
  backgroundColor: string
  logo: string
}

const CardWithListAndBanner: FC<TCardProps> = ({
  title,
  banner,
  listItem,
  backgroundColor,
  logo,
}) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <ContentContainer>
        <TitleContainer>
          <div style={{ width: '40px', height: '40px' }}>
            <Image
              src={logo}
              alt="Логотип"
              width={20}
              height={20}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </TitleContainer>
        <List>
          {listItem.map((item, index) => (
            <ListItem key={index}>
              <Image src="/icons/list-item.svg" alt="Маркер списка" width={20} height={20} />
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ContentContainer>

      <CardImg>
        <Image
          src={banner}
          alt="Баннер"
          width={403}
          height={260}
          placeholder="blur"
          blurDataURL={rgbDataURL(225, 231, 244)}
        />
      </CardImg>
    </Card>
  )
}

export default CardWithListAndBanner
