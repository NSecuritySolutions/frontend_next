import Image from 'next/image'

import { CardContainer, CardImg, CardName, CardPosition, CardTel, TextWrapper } from './styled'
import { rgbDataURL } from '@/shared/constants/utils/utils'
import { FC } from 'react'
import { Employee } from '@/widgets/OurTeam/types'

const ManagerCard: FC<{ data: Employee[] }> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <CardContainer key={item.id}>
          <CardImg>
            <Image
              src={item.image}
              height={200}
              width={200}
              placeholder="blur"
              blurDataURL={rgbDataURL(225, 231, 244)}
              alt="Фотография сотрудника"
            ></Image>
          </CardImg>
          <TextWrapper>
            <CardName>{item.first_name + ' ' + item.last_name}</CardName>
            <CardPosition>{item.position}</CardPosition>
            {/* <CardTel>{item.tel}</CardTel> */}
          </TextWrapper>
        </CardContainer>
      ))}
    </>
  )
}

export default ManagerCard
