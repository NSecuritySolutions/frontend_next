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
  InfoTitle,
  InfoContent,
  ContentTitle,
  ContentTitleText,
  ContentTitlePrice,
  Divider,
  CalcContentList,
  CalcContentListItem,
  CalcContentListItemTitle,
  CalcContentListItemPrice,
  CalcButton,
} from './styled'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { IMaskInput } from 'react-imask'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import MaskedStyledInput from '@/widgets/ContactForm/ui/mask'
import Image from 'next/image'
import { DocumentImage } from '../../DocumentImage'
import { Typography } from '../../Typography'
import calculatorStore from '@/app/store/calculatorStore'
import { useFormStore } from '@/app/store/formModalStoreProvider'
import { observer } from 'mobx-react-lite'
import {
  createApplicationWithCalc,
  createApplicationWithFile,
  createApplicationWithSolution,
} from '@/app/actions'
import { useRouter } from 'next/navigation'
import ResponseModal from './ResponseModal'

type IFormInput = yup.InferType<typeof schema>

const schema = yup.object().shape({
  name: yup.string().required('Заполните поле'),
  phone: yup
    .string()
    .min(18, 'Введите номер телефона в правильном формате ')
    .required('Заполните поле'),
  email: yup.string().email('Введите email в правильном формате ').required('Заполните поле'),
  comment: yup.string(),
  file: yup.mixed((file): file is File => file),
})

const MAX_FILE_SIZE = 5
const PhoneMask = '+{7} (000) 000-00-00'
const FILE_SUPPORTED_FORMATS = ['doc', 'docx', 'xls', 'xlsx', 'pdf']

const FormModal: FC = observer(() => {
  const [fileError, setFileError] = useState<string | undefined>()
  const [success, setSuccess] = useState<boolean>()
  const inputRef = useRef<typeof IMaskInput>(null)
  const modal = useFormStore()
  const { calculator, data } = modal
  const router = useRouter()

  const {
    setValue,
    watch,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitting, touchedFields, isSubmitted },
  } = useForm<IFormInput>({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comment: undefined,
      file: undefined,
    },
    resolver: yupResolver(schema),
  })

  if (!modal.isOpen) return null

  const onFormSubmit: SubmitHandler<IFormInput> = async (validatedData) => {
    const formData = new FormData()
    let response

    formData.set('name', validatedData.name)
    formData.set('phone', validatedData.phone)
    formData.set('email', validatedData.email)
    if (validatedData.comment) {
      formData.set('comment', validatedData.comment)
    }

    if (calculator) {
      formData.set('calculator_data', JSON.stringify(calculatorStore.createFormData()))
      response = await createApplicationWithCalc(formData)
    } else if (data) {
      formData.set('solution', data.id.toString())
      response = await createApplicationWithSolution(formData)
    } else {
      if (validatedData.file?.size) {
        formData.set('file', validatedData.file as File)
      }
      response = await createApplicationWithFile(formData)
    }
    if (response?.status === 201) {
      setSuccess(true)
    } else setSuccess(false)
  }

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const splittedFileName = file.name.split('.')
      if (!FILE_SUPPORTED_FORMATS.includes(splittedFileName[splittedFileName.length - 1])) {
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
  if (!data && !calculator) {
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
        <CloseButton
          onClick={() => {
            modal.close()
            reset()
          }}
        >
          <ImgWrapper>
            <Image src="/icons/closeBtn.svg" width={22} height={22} alt="close" />
          </ImgWrapper>
        </CloseButton>
        <Title>Оставить заявку</Title>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Content>
            <InputsWrapper>
              <InputWrapper>
                <Input
                  {...register('name')}
                  type="text"
                  placeholder="* Имя"
                  maxLength={20}
                  $error={errors.name && isSubmitted}
                />
                {errors.name && isSubmitted && <ErrorText>{errors.name?.message}</ErrorText>}
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
                      $error={errors.phone && isSubmitted ? 'true' : 'false'} // исправить!
                      placeholder="* Телефон"
                    />
                  )}
                />
                {errors.phone && isSubmitted && <ErrorText>{errors.phone?.message}</ErrorText>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="* E-mail"
                  $error={errors.email && isSubmitted}
                />
                {errors.email && isSubmitted && <ErrorText>{errors.email?.message}</ErrorText>}
              </InputWrapper>
              {(data || calculator) && (
                <TextInput {...register('comment')} placeholder="Комментарий" maxLength={2000} />
              )}
            </InputsWrapper>
            {data && (
              <InfoWrapper>
                <InfoTitle>Выбрано готовое решение:</InfoTitle>
                <InfoContent>
                  <ContentTitle>
                    <ContentTitleText>
                      <Image src={data!.image} width={65} height={50} alt="picture" />
                      {data!.title}
                    </ContentTitleText>
                    <ContentTitlePrice>
                      {data.price?.toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        maximumFractionDigits: 0,
                      })}
                    </ContentTitlePrice>
                  </ContentTitle>
                  <Divider />
                  <CharacteristicsList>
                    {data!.equipment.map((equip) => (
                      <li key={equip.id}>{equip.text}</li>
                    ))}
                  </CharacteristicsList>
                </InfoContent>
              </InfoWrapper>
            )}
            {calculator && (
              <InfoWrapper>
                <InfoTitle>Выбрано по калькулятору:</InfoTitle>
                <InfoContent $height={245}>
                  <ContentTitle>
                    <ContentTitleText>Готовая система под ключ</ContentTitleText>
                    <ContentTitlePrice>
                      {calculatorStore.result.toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        maximumFractionDigits: 0,
                      })}
                    </ContentTitlePrice>
                  </ContentTitle>
                  <Divider />
                  <CalcContentList>
                    {calculatorStore.blocks.map((block) => (
                      <CalcContentListItem key={block.id}>
                        <CalcContentListItemTitle>
                          <Image
                            src={block.data.image}
                            width={40}
                            height={40}
                            alt={block.data.title}
                          />
                          {block.data.title}
                        </CalcContentListItemTitle>
                        {block.data.quantity_selection ? (
                          <p
                            style={{ textAlign: 'center' }}
                          >{`${block.getVariable('block_amount')} x ${(block.result / (block.getVariable('block_amount') as number) || 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}`}</p>
                        ) : (
                          <p />
                        )}
                        <CalcContentListItemPrice>
                          {block.result.toLocaleString('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            maximumFractionDigits: 0,
                          })}
                        </CalcContentListItemPrice>
                      </CalcContentListItem>
                    ))}
                  </CalcContentList>
                </InfoContent>
                <CalcButton
                  onClick={() => {
                    modal.close()
                    const calc = document.getElementById('calculator')
                    if (calc) calc.scrollIntoView({ behavior: 'smooth' })
                    else router.push('/#calculator')
                  }}
                >
                  Изменить характеристики
                </CalcButton>
              </InfoWrapper>
            )}
            {!data && !calculator && (
              <TextInput
                {...register('comment')}
                placeholder="Комментарий"
                maxLength={2000}
                $autoHeight
              />
            )}
            {file}
          </Content>
          <Footer>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправляем...' : 'Отправить'}
            </Button>
            <FormParagraph>
              Нажимая oтправить, вы принимаете условия <br />
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
      {success !== undefined && (
        <ResponseModal
          success={success}
          close={() => {
            setSuccess(undefined)
            if (success) {
              modal.close()
              reset()
            }
          }}
        />
      )}
    </Overlay>
  )
})

export default FormModal
