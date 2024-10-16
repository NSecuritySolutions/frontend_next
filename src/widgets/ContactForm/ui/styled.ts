import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundCardYe};
  margin: 0 auto;
  overflow: hidden;
  /* @media (max-width: 1300px) {
    padding: 60px 20px 120px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1180px) {
    padding: 60px 0 120px;
  }

  @media (max-width: 640px) {
    padding: 30px 0;
  } */
`

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 40px;
  gap: 20px;

  @media (max-width: 1300px) {
    max-width: 880px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    display: flex;
  }

  @media (max-width: 620px) {
    max-width: 328px;
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
`

const InfoColumn = styled.div`
  align-self: flex-end;
  justify-self: flex-start;

  @media (max-width: 940px) {
    display: none;
  }
`

const FormImgWrapper = styled.div`
  width: 580px;
  height: 537px;
  position: relative;

  img {
    scale: 1;
    transition: transform 1s ease-in;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 1300px) {
    width: 430px;
    height: 398px;
  }
`

const FormColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;

  /* @media (max-width: 880px) {
    max-width: 280px;
    gap: 20px;
  } */
`

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 620px) {
    button {
      width: 118px;
      font-weight: 700;
      font-size: 13px;
      line-height: 185%;
    }
  }
`

const ColumnParagraph = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
`

const FormParagraph = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top: 20px;
  margin-bottom: 12px;
`

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export type TInputProps = {
  $error: string
}

const focusStyles = (props: { $error: string }) => `
  outline: 1px solid ${props.$error === 'true' ? colors.textNegative : colors.btnPrimary};
`

const Input = styled.input<TInputProps>`
  background: ${colors.backgroundPrimary};
  border: ${(props) => (props.$error === 'true' ? `1px solid ${colors.textNegative}` : 'none')};
  border-radius: 12px;
  width: 100%;
  height: 42px;
  padding: 10px 24px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-manrope);
  color: ${(props) =>
    props.$error === 'true' ? `${colors.textNegative}` : `${colors.darkPrimary}`};

  &:active,
  &:focus,
  &:focus-visible {
    ${(props) => focusStyles(props)}
  }

  @media (max-width: 620px) {
    font-size: 14px;
  }
`
const TextInput = styled.textarea`
  color: ${colors.darkPrimary};
  background: ${colors.backgroundPrimary};
  border: none;
  border-radius: 12px;
  width: 100%;
  height: 120px;
  padding: 10px 24px;
  resize: none;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-manrope);

  &:active,
  &:focus,
  &:focus-visible {
    outline: 1px solid ${colors.btnPrimary};
  }
`

const ErrorText = styled.span`
  display: inline-block;
  color: ${colors.textNegative};
  font-weight: 800;
  font-size: 15px;
  position: absolute;
  bottom: 8px;
  left: 0;
`

const UploadBtn = styled.label`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 13px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.backgroundPrimary};
  cursor: pointer;
`

const UploadBtnText = styled.span`
  margin-left: 8px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 620px) {
    max-width: 250px;
  }
`

const Link = styled.a`
  color: ${colors.darkPrimary};
  max-width: 348px;
  width: 100%;
  font-weight: 400;
  margin: 12px 0;
  font-size: 14px;
  line-height: 19px;
  text-decoration: underline solid 1px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.7s;
  }
`

const FileWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 50px;
  align-items: center;
`

const NoBr = styled.span`
  white-space: nowrap;
`

export {
  Section,
  SectionWrapper,
  InfoColumn,
  FormColumn,
  Form,
  FormParagraph,
  Link,
  SectionTitle,
  ColumnParagraph,
  InputWrapper,
  Input,
  TextInput,
  FormImgWrapper,
  ErrorText,
  UploadBtn,
  UploadBtnText,
  FormHeader,
  FileWrapper,
  NoBr,
}
