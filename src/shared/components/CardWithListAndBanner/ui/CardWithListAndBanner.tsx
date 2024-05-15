import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import listMarker from '@/assets/icons/list-item.svg'
import {
  Card,
  CardTitle,
  ContentContainer,
  List,
  ListItem,
  ListItemText,
  TitleContainer,
} from './styled'

type TCardProps = {
  title: string
  banner: StaticImageData
  listItem: string[]
  backgroundColor: string
}

const CardWithListAndBanner: FC<TCardProps> = ({ title, banner, listItem, backgroundColor }) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <ContentContainer>
        <TitleContainer>
          <CardTitle>{title}</CardTitle>
        </TitleContainer>
        <List>
          {listItem.map((item, index) => (
            <ListItem key={index}>
              {/* <Image src={listMarker} alt="List Marker" width={20} height={20} /> */}
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ContentContainer>

      <Image src={banner} alt="Banner" width={200} height={200} />
    </Card>
  )
}

export default CardWithListAndBanner
