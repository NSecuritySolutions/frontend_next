import styled from 'styled-components'
import colors from '@/shared/constants/colors'

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundCardYe};
  margin: 0 auto;

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
  grid-template-columns: auto 580px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 40px;
  gap: 40px;

  /* @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 1180px) {
    max-width: 1180px;
    border-radius: 0;
  } */
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;

  /* @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 880px) {
    max-width: 280px;
    width: 100%;
    align-self: flex-start;
  }

  @media (max-width: 640px) {
    max-width: 410px;
  }

  @media (max-width: 480px) {
    max-width: 305px;
  }

  @media (max-width: 340px) {
    max-width: 280px;
  } */
`

const InfoColumn = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
`

const FromImgWrapper = styled.div`
  width: 490px;
  height: 454px;
  position: relative;
`

const FormColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 40px;

  /* @media (max-width: 880px) {
    max-width: 280px;
    gap: 20px;
  } */
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  outline: none;
  border: 1px solid ${props.$error === 'true' ? colors.textNegative : colors.btnPrimary};
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
  color: ${(props) =>
    props.$error === 'true' ? `${colors.textNegative}` : `${colors.darkPrimary}`};

  &:active,
  &:focus,
  &:focus-visible {
    ${(props) => focusStyles(props)}
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

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.btnPrimary};
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

const UploadBtn = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 13px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.backgroundPrimary};
  margin-bottom: 20px;
  cursor: pointer;
`

const UploadBtnText = styled.span`
  margin-left: 8px;
  font-size: 13px;
  font-weight: 700;
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
  FromImgWrapper,
  ErrorText,
  UploadBtn,
  UploadBtnText,
}
