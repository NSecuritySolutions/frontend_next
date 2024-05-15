import { FC } from 'react'

import { Section, SectionWrapper, Title, CardsContainer, CardWithBannerContainer } from './styled'

import {
  cardAdvantagesData,
  cardAdvantagesWithBannerData,
} from '@/shared/constants/texts/card-advantages'
import { CardWithList } from '@/shared/components/CardWithList'
import { CardWithListAndBanner } from '@/shared/components/CardWithListAndBanner'

const AdvantagesBlock: FC = () => {
  return (
    <Section>
      <SectionWrapper>
        <Title>Профессиональная установка систем безопасности в Новосибирске</Title>
        <CardsContainer>
          {cardAdvantagesData.map((card) => (
            <CardWithList
              key={card.id}
              title={card.title}
              logo={card.logo}
              listItem={card.listItem}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </CardsContainer>
        <CardWithBannerContainer>
          {cardAdvantagesWithBannerData.map((card) => (
            <CardWithListAndBanner
              key={card.id}
              title={card.title}
              banner={card.banner}
              listItem={card.listItem}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </CardWithBannerContainer>
      </SectionWrapper>
    </Section>
  )
}

export default AdvantagesBlock
