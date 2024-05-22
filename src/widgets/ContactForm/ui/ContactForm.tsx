import React, { useState, useRef, ChangeEventHandler } from 'react'
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
  FormHeader,
  FileWrapper,
} from './styled'
import { Button } from '@/shared/components/Button'
import MaskedStyledInput from './mask'
import { Typography } from '@/shared/components/Typography'
import { DocumentImage } from '@/shared/components/DocumentImage'

const MAX_FILE_SIZE = 5

const schema = yup.object({
  name: yup.string().required('Заполните поле'),
  phone: yup.string().min(18, 'Не похоже на телефон').required('Заполните поле'),
  email: yup.string().email('Не похоже на email').required('Заполните поле'),
  message: yup.string(),
  file: yup.mixed((file): file is File => file),
})

type IFormInput = yup.InferType<typeof schema>

const ContactForm = () => {
  const [fileError, setFileError] = useState<string | undefined>()
  const {
    setValue,
    watch,
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
      file: undefined,
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

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const splittedFileName = file.name.split('.')
      if (
        !['doc', 'docx', 'xls', 'xlsx', 'pdf'].includes(
          splittedFileName[splittedFileName.length - 1],
        )
      ) {
        setFileError('Неподдерживаемый формат файла')
        return
        // перевели в байты
      } else if (file.size > MAX_FILE_SIZE * 1024 * 1024) {
        setFileError(
          `Файл слишком большой, максимальный размер файла ${MAX_FILE_SIZE.toFixed(1)} Мбайт`,
        )
        return
      }
      setFileError(undefined)
      setValue('file', file)
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
          <FormHeader>
            <SectionTitle>Оставить заявку</SectionTitle>
            <ColumnParagraph>Заполните форму заявки и наш менеджер вам перезвонит</ColumnParagraph>
          </FormHeader>
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

            {watch('file')?.name ? (
              <FileWrapper>
                <DocumentImage name={watch('file')!.name} />
                <Typography size={13}>{watch('file')!.name}</Typography>
                <Image
                  src="/icons/red-cross.svg"
                  width={20}
                  height={20}
                  style={{ padding: 4, cursor: 'pointer' }}
                  color="#FD4D61"
                  alt="Удалить"
                  onClick={() => setValue('file', undefined)}
                />
              </FileWrapper>
            ) : (
              <UploadBtn role="button">
                <input
                  {...register('file')}
                  type="file"
                  hidden
                  accept=".doc,.docx,application/msword,.xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf,application/vnd.ms-excel"
                  onChange={handleFileChange}
                />
                <Image
                  src="/icons/upload.svg"
                  width={16}
                  height={16}
                  alt="Upload"
                  style={{ objectFit: 'cover' }}
                />
                <UploadBtnText>Загрузить спецификацию (в формате xlx, pdf, word)</UploadBtnText>
                {fileError && <ErrorText style={{ bottom: -20 }}>{fileError}</ErrorText>}
              </UploadBtn>
            )}
            <FormParagraph>
              Нажимая oтправить, вы принимаете условия&nbsp;
              {/* Ну чисто для теста */}
              <Link
                href="%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Правил политики конфиденциальности
              </Link>
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
