import Image from 'next/image'

import { teamContacts } from '@/shared/constants/texts/our-team'
import { CardContainer, CardImg, CardName, CardPosition, CardTel } from './styled'

const ManagerCard = () => {
  return (
    <>
      {teamContacts.map((item) => (
        <CardContainer key={item.id}>
          <CardImg>
            <Image
              src={item.image}
              alt="Фотография сотрудника"
              style={{
                borderRadius: '500px',
                width: '172px',
                height: '172px',
                objectFit: 'cover',
              }}
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
