import { FC } from 'react'
import Image from 'next/image'
import { TError } from './types.ts'

import {
  Section,
  ColumnConatiner,
  ColumnWrapper,
  ErrorName,
  ErrorText,
  ErrorButton,
  ErrorImgWrapper,
  TextColumn,
} from './styled.ts'
import { rgbDataURL } from '@/shared/constants/utils/utils.ts'

const Error: FC<TError> = ({ errorText, errorImg, errorMessage, errorCode }) => {
  return (
    <Section>
      <ColumnConatiner>
        <ColumnWrapper>
          <TextColumn>
            <ErrorName>{errorMessage}</ErrorName>
            <ErrorText>{errorText}</ErrorText>
            <ErrorButton href="/">На главную</ErrorButton>
          </TextColumn>
          <ErrorImgWrapper>
            <Image
              placeholder="blur"
              src={errorImg}
              alt={`Ошибка ${errorCode} - ${errorMessage}`}
              width={572}
              height={325}
              blurDataURL={rgbDataURL(225, 231, 244)}
            />
          </ErrorImgWrapper>
        </ColumnWrapper>
      </ColumnConatiner>
    </Section>
  )
}

export default Error
