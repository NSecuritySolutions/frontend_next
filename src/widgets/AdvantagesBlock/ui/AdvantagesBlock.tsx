import { FC } from 'react'

import Slider from 'react-slick'

import {
  cardAdvantagesData,
  cardAdvantagesWithBannerData,
} from '@/shared/constants/texts/card-advantages'

import { CardWithList } from '@/shared/components/CardWithList'
import { CardWithListAndBanner } from '@/shared/components/CardWithListAndBanner'

import { Section, SectionWrapper, Title, SliderWrapper } from './styled'

const AdvantagesBlock: FC = () => {
  const settings = {
    responsive: [
      { breakpoint: 999999999, settings: 'unslick' as 'unslick' },
      {
        breakpoint: 940,
        settings: {
          focusOnSelect: true,
          speed: 200,
          infinite: false,
          variableWidth: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <Section id="advantages">
      <SectionWrapper>
        <Title>Мы обеспечиваем</Title>
        <SliderWrapper>
          <Slider {...settings}>
            {cardAdvantagesData.map((card, i) => (
              <CardWithList
                key={card.id}
                title={card.title}
                logo={card.logo}
                listItem={card.listItem}
                backgroundColor={card.backgroundColor}
              />
            ))}

            {cardAdvantagesWithBannerData.map((card) => (
              <CardWithListAndBanner
                key={card.id}
                title={card.title}
                logo={card.logo}
                banner={card.banner}
                listItem={card.listItem}
                backgroundColor={card.backgroundColor}
              />
            ))}
          </Slider>
        </SliderWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default AdvantagesBlock
