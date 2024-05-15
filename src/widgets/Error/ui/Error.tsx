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
  ImgColumn,
  TextColumn,
  ErrorImgHiddenWrapper,
} from './styled.ts'

const Error: FC<TError> = ({ errorText, errorImg, warningImg, errorMessage, errorCode }) => {
  return (
    <Section>
      <ColumnConatiner>
        <ColumnWrapper>
          <ImgColumn>
            <Image src={warningImg} alt="aa" />
          </ImgColumn>
          <TextColumn>
            <ErrorName>{errorMessage}</ErrorName>
            <ErrorImgHiddenWrapper>
              <Image src={errorImg} alt={`Ошибка ${errorCode} - ${errorMessage}`} />
            </ErrorImgHiddenWrapper>
            <ErrorText>{errorText}</ErrorText>
            <ErrorButton href="/">На главную</ErrorButton>
          </TextColumn>
          <ErrorImgWrapper>
            <Image src={errorImg} alt={`Ошибка ${errorCode} - ${errorMessage}`} />
          </ErrorImgWrapper>
        </ColumnWrapper>
      </ColumnConatiner>
    </Section>
  )
}

export default Error
