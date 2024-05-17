import React, { useState, useRef } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { IMaskInput } from 'react-imask'

import Image from 'next/image'

import colors from '@/shared/constants/colors'
import card from '@/assets/images/form/webp/card.webp'
import {
  Section,
  SectionWrapper,
  InfoColumn,
  Form,
  FormParagraph,
  Link,
  SectionTitle,
  ColumnParagraph,
  Input,
  TextInput,
  FromImgWrapper,
  FormColumn,
  ErrorText,
  InputWrapper,
  UploadBtn,
  UploadBtnText,
} from './styled'
import { Button } from '@/shared/components/Button'
import MaskedStyledInput from './mask'

const schema = yup.object({
  name: yup.string().required('Заполните поле'),
  phone: yup.string().min(18, 'Не похоже на телефон').required('Заполните поле'),
  email: yup.string().email('Не похоже на email').required('Заполните поле'),
  message: yup.string(),
})

type IFormInput = yup.InferType<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: undefined,
    },
    resolver: yupResolver(schema),
  })

  const [submitSuccess, setSubmitSuccess] = useState(false)

  const PhoneMask = '+{7} (000) 000-00-00'
  const inputRef = useRef<typeof IMaskInput>(null)

  const onFormSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('Данные формы', data)
          resolve()
        }, 1000)
      })
      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 300)
      reset()
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  return (
    <Section>
      <SectionWrapper>
        <InfoColumn>
          <FromImgWrapper>
            <Image src={card} alt="Картинка карты" fill />
          </FromImgWrapper>
        </InfoColumn>
        <FormColumn>
          <SectionTitle>Оставить заявку</SectionTitle>
          <ColumnParagraph>Заполните форму заявки и наш менеджер вам перезвонит</ColumnParagraph>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <InputWrapper>
              <Input
                {...register('name')}
                type="text"
                placeholder="* Имя"
                maxLength={20}
                error={errors.name ? 'true' : 'false'}
              />
              {errors.name && <ErrorText>{errors.name?.message}</ErrorText>}
            </InputWrapper>
            <InputWrapper>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <MaskedStyledInput
                    {...field}
                    mask={PhoneMask}
                    inputRef={inputRef}
                    error={errors.phone ? 'true' : 'false'}
                    placeholder="* Телефон"
                  />
                )}
              />
              {errors.phone && <ErrorText>{errors.phone?.message}</ErrorText>}
            </InputWrapper>
            <InputWrapper>
              <Input
                {...register('email')}
                type="email"
                placeholder="* E-mail"
                error={errors.email ? 'true' : 'false'}
              />
              {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
            </InputWrapper>
            <InputWrapper>
              <TextInput {...register('message')} placeholder="Комментарий" maxLength={1000} />
            </InputWrapper>
            <UploadBtn>
              <Image
                src="/icons/upload.svg"
                width={16}
                height={16}
                alt="Upload"
                style={{ objectFit: 'cover' }}
              />
              <UploadBtnText>Загрузить спецификацию (в формате xlx, pdf, word)</UploadBtnText>
            </UploadBtn>
            <FormParagraph>
              Нажимая oтправить, вы принимаете условия&nbsp;
              <Link>Правил политики конфиденциальности</Link>
            </FormParagraph>
            <Button
              width="130px"
              height="44px"
              color={colors.btnOpacityColor}
              text="Отправить"
              disabled={!isValid}
            />
          </Form>
        </FormColumn>
      </SectionWrapper>
    </Section>
  )
}

export default ContactForm
