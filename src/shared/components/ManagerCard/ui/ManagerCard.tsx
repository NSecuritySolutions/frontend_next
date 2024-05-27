import Image from 'next/image'

import { teamContacts } from '@/shared/constants/texts/our-team'
import { CardContainer, CardImg, CardName, CardPosition, CardTel } from './styled'
import { rgbDataURL } from '@/shared/constants/utils/utils'

const ManagerCard = () => {
  return (
    <>
      {teamContacts.map((item) => (
        <CardContainer key={item.id}>
          <CardImg>
            <Image
              src={item.image}
              placeholder="blur"
              blurDataURL={rgbDataURL(225, 231, 244)}
              alt="Фотография сотрудника"
            ></Image>
          </CardImg>
          <CardName>{item.name}</CardName>
          <CardPosition>{item.position}</CardPosition>
          <CardTel>{item.tel}</CardTel>
        </CardContainer>
      ))}
    </>
  )
}

export default ManagerCard
