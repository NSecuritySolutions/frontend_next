'use client'

import { useRouter } from 'next/navigation'

import blankImg from '@/assets/icons/examples/no-image.svg'

import Image from 'next/image'

import { BtnLink } from '@/shared/components/BtnLink/index.ts'

import { TWorkExamples } from '@/shared/constants/texts/types.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
import colors from '@/shared/constants/colors'

import { TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

import {
  SliderContainer,
  CardWrapper,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  IconWrapper,
  ExamplesLink,
  InfoIcon,
  InfoIconWrapper,
  ExamplesImgWrapper,
  StyledTitle,
} from './styled.ts'

import { OurWorksBanner } from '../../OurWorksBanner/index.ts'

const ExampleCard: React.FC = () => {
  const router = useRouter()

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...'
    } else {
      return str
    }
  }

  const bannerItem = workExamples.sort(
    (newDate: TWorkExamples, olderDate: TWorkExamples) =>
      new Date(olderDate.date as string).getTime() - new Date(newDate.date as string).getTime(),
  )[0]

  console.log(bannerItem, 'item')

  return (
    <>
      <OurWorksBanner item={bannerItem} />
      <StyledTitle>Примеры работ</StyledTitle>
      <SliderContainer className="slider-container" id="examples">
        {workExamples
          .sort(
            (newDate: TWorkExamples, olderDate: TWorkExamples) =>
              new Date(olderDate.date as string).getTime() -
              new Date(newDate.date as string).getTime(),
          )
          .map((item: TWorkExamples, i) => (
            <CardWrapper key={item.id}>
              {item.cardImage ? (
                <ExamplesLink href={`/ourworks/${item.id}`}>
                  <ExamplesImgWrapper>
                    <Image
                      blurDataURL={rgbDataURL(225, 231, 244)}
                      src={item?.cardImage}
                      alt={item.cardTitle}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                  </ExamplesImgWrapper>
                </ExamplesLink>
              ) : (
                <ExamplesImgWrapper>
                  <Image
                    src={(item.cardImage = blankImg)}
                    fill
                    alt={'Пустая картинка'}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(225, 231, 244)}
                  ></Image>
                </ExamplesImgWrapper>
              )}
              <ExamplesContainer className="slick-slide" key={i}>
                <ExamplesTitle>{truncate(item.cardTitle, TITLE_LIMIT)}</ExamplesTitle>

                <InfoIconWrapper>
                  {item.quantities.map((item, i) => (
                    <InfoIcon key={i}>
                      {item.number}
                      {item.measure}
                    </InfoIcon>
                  ))}
                </InfoIconWrapper>

                <ButtonWrapper>
                  <BtnLink
                    btnType="transparent"
                    text={'Подробнее'}
                    width="134px"
                    height="44px"
                    color={colors.darkPrimary}
                    size="15px"
                    link={`/ourworks/${item.id}`}
                  ></BtnLink>

                  <IconWrapper>{item.date ? item.date : '----'}</IconWrapper>
                </ButtonWrapper>
              </ExamplesContainer>
            </CardWrapper>
          ))}
      </SliderContainer>
    </>
  )
}

export default ExampleCard
