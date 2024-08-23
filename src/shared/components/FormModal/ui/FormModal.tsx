import { ChangeEventHandler, FC, useRef, useState } from 'react'
import {
  Container,
  Title,
  Form,
  Content,
  ErrorText,
  InfoWrapper,
  Input,
  InputsWrapper,
  InputWrapper,
  Overlay,
  TextInput,
  Button,
  FormParagraph,
  StyledLink,
  Footer,
  CloseButton,
  ImgWrapper,
  CharacteristicsList,
  FileWrapper,
  UploadBtn,
  UploadBtnText,
  NoBr,
} from './styled'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { IMaskInput } from 'react-imask'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import MaskedStyledInput from '@/widgets/ContactForm/ui/mask'
import Image from 'next/image'
import { ISolution } from '@/widgets/ReadySolutionSection/types'
import { DocumentImage } from '../../DocumentImage'
import { Typography } from '../../Typography'
import calculatorStore from '@/app/store/calculatorStore'

type IFormInput = yup.InferType<typeof schema>

interface FormModalProps {
  data: ISolution // | Calculator
  solution?: boolean
  calculator?: boolean
}

const schema = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  phone: yup
    .string()
    .min(18, 'Введите номер телефона в правильном формате ')
    .required('Заполните поле'),
  email: yup.string().email('Введите email в правильном формате ').required('Заполните поле'),
  message: yup.string(),
  file: yup.mixed((file): file is File => file),
})

const MAX_FILE_SIZE = 5
const PhoneMask = '+{7} (000) 000-00-00'

const FormModal: FC<FormModalProps> = ({ solution, calculator, data }) => {
  const [fileError, setFileError] = useState<string | undefined>()
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const inputRef = useRef<typeof IMaskInput>(null)
  calculator = true

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
          `Файл слишком большой, максимальный размер файла ${MAX_FILE_SIZE.toFixed(0)} Мб`,
        )
        return
      }
      setFileError(undefined)
      setValue('file', file)
    }
  }

  let file = <></>
  if (!solution && !calculator) {
    if (watch('file')?.name) {
      file = (
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
      )
    } else {
      file = (
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
          <UploadBtnText>
            Загрузить спецификацию <NoBr>(в формате xlx, pdf, word)</NoBr>
          </UploadBtnText>
          {fileError && <ErrorText style={{ bottom: -20 }}>{fileError}</ErrorText>}
        </UploadBtn>
      )
    }
  }

  return (
    <Overlay>
      <Container>
        <CloseButton>
          <ImgWrapper>
            <Image src="/icons/closeBtn.svg" width={22} height={22} alt="close" />
          </ImgWrapper>
        </CloseButton>
        <Title>Заказать звонок</Title>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Content>
            <InputsWrapper>
              <InputWrapper>
                <Input
                  {...register('name')}
                  type="text"
                  placeholder="* Имя"
                  maxLength={20}
                  $error={errors.name ? 'true' : 'false'}
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
                      $error={errors.phone ? 'true' : 'false'}
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
                  $error={errors.email ? 'true' : 'false'}
                />
                {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
              </InputWrapper>
              {(solution || calculator) && (
                <TextInput {...register('message')} placeholder="Комментарий" maxLength={2000} />
              )}
            </InputsWrapper>
            {solution && (
              <InfoWrapper>
                <p style={{ fontSize: 18, fontWeight: 800 }}>Выбрано готовое решение:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, width: 300 }}>
                      <Image src={data.image} width={65} height={50} alt="picture" />
                      {data.title}
                    </div>
                    <p style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.33 }}>10000 P</p>
                  </div>
                  <div style={{ border: '1px solid #E1E7F4' }}></div>
                  <CharacteristicsList>
                    {data.equipment.map((equip) => (
                      <li key={equip.id}>{equip.text}</li>
                    ))}
                  </CharacteristicsList>
                </div>
              </InfoWrapper>
            )}
            {calculator && (
              <InfoWrapper>
                <p style={{ fontSize: 18, fontWeight: 800 }}>Выбрано по калькулятору:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: 240 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, width: 300 }}>
                      Готовая система под ключ
                    </div>
                    <p style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.33 }}>10000 P</p>
                  </div>
                  <div style={{ border: '1px solid #E1E7F4' }}></div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {calculatorStore.blocks.map((block) => (
                      <li
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '260px 120px 120px',
                          height: 40,
                          alignItems: 'center',
                        }}
                        key={block.id}
                      >
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <Image
                            src={block.data.image}
                            width={40}
                            height={40}
                            alt={block.data.title}
                          />
                          {block.data.title}
                        </div>
                        <p>{`${block.getVariable('block_amount')} x ${(block.result / (block.getVariable('block_amount') as number) || 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}`}</p>
                        <p style={{ fontSize: 16, fontWeight: 700, justifySelf: 'end' }}>
                          {block.result.toLocaleString('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  style={{
                    justifySelf: 'end',
                    height: 32,
                    border: '1px solid #10101052',
                    borderRadius: 8,
                    fontFamily: 'var(--mont)',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Изменить характеристики
                </button>
              </InfoWrapper>
            )}
            {!solution && !calculator && (
              <TextInput
                {...register('message')}
                placeholder="Комментарий"
                maxLength={2000}
                $autoHeight
              />
            )}
            {file}
          </Content>
          <Footer>
            <Button type="submit" disabled={errors ? false : true}>
              Отправить
            </Button>
            <FormParagraph>
              Нажимая oтправить, вы принимаете условия
              <br />
              <StyledLink
                href="%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Правил политики конфиденциальности
              </StyledLink>
            </FormParagraph>
          </Footer>
        </Form>
      </Container>
    </Overlay>
  )
}

export default FormModal
