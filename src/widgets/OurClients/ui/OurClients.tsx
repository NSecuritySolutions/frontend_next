import yandex from '@/assets/images/clients/webp/yandex.webp'
import scooter from '@/assets/images/clients/webp/samokat.webp'
import rostelecom from '@/assets/images/clients/webp/rostelekom.webp'
import avon from '@/assets/images/clients/webp/avon.webp'

import {
  Section,
  SectionWrapper,
  SectionTitle,
  LogoWrapper,
  LogoYandex,
  LogoSamokat,
  LogoRostelecom,
  LogoAvon,
} from './styled'

const OurClients = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Нам доверяют</SectionTitle>
        <LogoWrapper>
          <LogoYandex $imgUrl={yandex} alt="Логотип Яндекс" />
          <LogoSamokat $imgUrl={scooter} alt="Логотип Самокат" />
          <LogoRostelecom $imgUrl={rostelecom} alt="Логотип Ростелеком" />
          <LogoAvon $imgUrl={avon} alt="Логотип AVON" />
        </LogoWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default OurClients
