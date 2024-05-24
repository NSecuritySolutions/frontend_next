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
              src={errorImg}
              alt={`Ошибка ${errorCode} - ${errorMessage}`}
              width={572}
              height={325}
            />
          </ErrorImgWrapper>
        </ColumnWrapper>
      </ColumnConatiner>
    </Section>
  )
}

export default Error
