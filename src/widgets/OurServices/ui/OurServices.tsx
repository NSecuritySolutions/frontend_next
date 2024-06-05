import { useRouter } from 'next/navigation'

import { Section, SectionTitle, CardsGridContainer } from './styled'

import { CardWithText } from '@/shared/components/CardWithText'
import { cardServices, cardServicesWithBannerData } from '@/shared/constants/texts/services'
import { CardWithTextAndBanner } from '@/shared/components/CardWithTextAndBanner'
import colors from '@/shared/constants/colors'

const OurServices = () => {
  return (
    <Section>
      <SectionTitle>Наши услуги</SectionTitle>
      <CardsGridContainer>
        {cardServices.map((item, i) => (
          <CardWithText
            key={i}
            text={item.text}
            img={item.img}
            title={item.title}
            btnName={item.btnName}
            link={item.link}
          />
        ))}
      </CardsGridContainer>
      {cardServicesWithBannerData.map((item, i) => (
        <CardWithTextAndBanner
          key={i}
          text={item.text}
          img={item.img}
          title={item.title}
          btnName={item.btnName}
          link={item.link}
          backgroundColor={colors.backgroundBase4}
        />
      ))}
    </Section>
  )
}

export default OurServices
