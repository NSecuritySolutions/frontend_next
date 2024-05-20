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
          <LogoYandex alt="Логотип Яндекс" />
          <LogoSamokat alt="Логотип Самокат" />
          <LogoRostelecom alt="Логотип Ростелеком" />
          <LogoAvon alt="Логотип AVON" />
        </LogoWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default OurClients
