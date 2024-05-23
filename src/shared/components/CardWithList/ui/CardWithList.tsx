import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import listMarker from '@/assets/icons/list-item.svg'
import { Card, CardTitle, List, ListItem, ListItemText, TitleContainer } from './styled'

type TCardProps = {
  title: string
  logo: StaticImageData
  listItem: string[]
  backgroundColor: string
}

const CardWithList: FC<TCardProps> = ({ title, logo, listItem, backgroundColor }) => {
  return (
    <Card $backgroundColor={backgroundColor}>
      <TitleContainer>
        <div style={{ width: '40px', height: '40px' }}>
          <Image
            src={logo}
            alt="Логотип"
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
    </Card>
  )
}

export default CardWithList
