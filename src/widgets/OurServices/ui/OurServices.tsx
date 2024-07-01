import { Section, SectionTitle, CardsGridContainer } from './styled'
import { CardWithText } from '@/shared/components/CardWithText'
import { cardServices, cardServicesWithBannerData } from '@/shared/constants/texts/services'
import { CardWithTextAndBanner } from '@/shared/components/CardWithTextAndBanner'
import colors from '@/shared/constants/colors'
import { useRouter } from 'next/navigation'

const OurServices = () => {
  const router = useRouter()
  console.log(router, 'router')
  return (
    <Section id="our-services">
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
