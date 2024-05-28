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
          <LogoYandex
            src="/images/clients/png/yandex.png"
            width={121}
            height={121}
            quality={100}
            alt="Логотип Яндекс"
          />
          <LogoRostelecom
            src="/images/clients/png/rostelekom.png"
            width={598}
            height={190}
            quality={100}
            alt="Логотип Ростелеком"
          />
          <LogoSamokat
            src="/images/clients/png/samokat.png"
            width={598}
            height={190}
            quality={100}
            alt="Логотип Самокат"
          />
          <LogoAvon
            src="/images/clients/png/avon.png"
            width={279}
            height={72}
            quality={100}
            alt="Логотип AVON"
          />
        </LogoWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default OurClients
