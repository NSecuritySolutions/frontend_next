import colors from '@/shared/constants/colors'
import Link from 'next/link'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 940px) {
    overflow-y: auto;
    align-items: start;
    padding-block: 40px;
  }
`

const Container = styled.div`
  position: relative;
  width: 1180px;
  display: flex;
  background-color: ${colors.backgroundCardYe};
  flex-direction: column;
  padding: 40px;
  border-radius: 20px;
  gap: 32px;
  animation: init-modal 1s;

  @keyframes init-modal {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
  }

  @media (max-width: 620px) {
    width: 328px;
    padding: 16px;
    gap: 20px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 940px) {
    gap: 20px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 100%;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 620px) {
    gap: 4px;
  }
`

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  gap: 12px;
  background-color: ${colors.backgroundPrimary};
`

export type TInputProps = {
  $error?: boolean
}

const focusStyles = (props: { $error?: boolean }) => `
  outline: 1px solid ${props.$error ? colors.textNegative : colors.btnPrimary};
`

const Input = styled.input<TInputProps>`
  background: ${colors.backgroundPrimary};
  border: none;
  border-radius: 12px;
  width: 100%;
  height: 42px;
  padding: 10px 24px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-manrope);
  color: ${(props) => (props.$error ? colors.textNegative : colors.darkPrimary)};
  outline: ${(props) => (props.$error ? `1px solid ${colors.textNegative}` : 'none')};

  &:active,
  &:focus,
  &:focus-visible {
    ${(props) => focusStyles(props)}
  }

  @media (max-width: 620px) {
    font-size: 14px;
    margin-bottom: 28px;
  }
`
const TextInput = styled.textarea<{ $autoHeight?: boolean }>`
  color: ${colors.darkPrimary};
  background: ${colors.backgroundPrimary};
  border: none;
  border-radius: 12px;
  width: 100%;
  height: ${(props) => (props.$autoHeight ? 'auto' : '120px')};
  margin-bottom: ${(props) => (props.$autoHeight ? '32px' : 0)};
  padding: 10px 24px;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-manrope);

  &:active,
  &:focus,
  &:focus-visible {
    outline: 1px solid ${colors.btnPrimary};
  }

  @media (max-width: 620px) {
    font-size: 14px;
    margin-bottom: ${(props) => (props.$autoHeight ? '28px' : 0)};
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

const FormParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;

  @media (max-width: 940px) {
    & > br {
      display: none;
    }
  }

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const Button = styled.button`
  display: flex;
  width: 160px;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${colors.btnPrimary};
  color: ${(props) => (props.disabled ? colors.btnOpacityColor : colors.darkPrimary)};
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  font-family: var(--mont);

  &:hover {
    background-color: ${(props) => (props.disabled ? colors.btnPrimary : colors.btnPrimaryHover)};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  @media (max-width: 620px) {
    font-size: 13px;
    font-weight: 700;
    flex-position: 1;
    order: 2;
  }
`

const StyledLink = styled(Link)`
  text-decoration: underline solid 1px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 12px;
    align-items: start;
  }
`

const CharacteristicsList = styled.ol`
  list-style-type: disc;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  height: 100%;
  overflow-x: hidden;
  line-height: 1.36;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.textSecondary};
  scrollbar-width: thin;

  @media (max-width: 620px) {
    font-size: 14px;
    -webkit-line-clamp: 6;
  }

  & > li::marker {
    font-size: 10px;
  }
`

const FileWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  grid-column-start: span 2;
`

const NoBr = styled.span`
  white-space: nowrap;
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
  grid-column-start: span 2;
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

const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
`

const InfoContent = styled.div<{ $height?: number }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};

  @media (max-width: 940px) {
    height: auto;
  }
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

const ContentTitleText = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 300px;
  font-size: 15px;
  font-weight: 800;

  @media (max-width: 620px) {
    font-size: 13px;
    font-weight: 700;
    flex-direction: column;
    gap: 0px;
  }
`

const ContentTitlePrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  min-width: max-content;

  @media (max-width: 620px) {
    font-size: 20px;
    font-weight: 800;
  }
`

const Divider = styled.div`
  border: 1px solid ${colors.backgroundCardBl};
`

const CalcContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 195px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-gutter: stable;

  @media (max-width: 940px) {
    height: auto;
  }
`

const CalcContentListItem = styled.li`
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr;
  min-height: 40px;
  align-items: center;

  @media (max-width: 1300px) {
    grid-template-columns: 2.2fr 1fr;

    & > p:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 940px) {
    grid-template-columns: 2.2fr 1fr 1fr;

    & > p:nth-child(2) {
      display: block;
    }
  }

  @media (max-width: 620px) {
    grid-template-columns: 2.2fr 1fr;

    & > p:nth-child(2) {
      display: none;
    }
  }
`

const CalcContentListItemTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 1300px) {
    & > img {
      display: none;
    }
  }

  @media (max-width: 940px) {
    & > img {
      display: block;
    }
  }

  @media (max-width: 620px) {
    font-size: 14px;

    & > img {
      display: none;
    }
  }
`

const CalcContentListItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  justify-self: end;
`

const CalcButton = styled.button`
  justify-self: end;
  height: 32px;
  border: 1px solid ${colors.darkPrimary}52;
  border-radius: 8px;
  font-family: var(--mont);
  font-size: 13px;
  font-weight: 700;

  &:hover {
    background-color: ${colors.backgroundCardBl};
  }
`

export {
  Overlay,
  Container,
  CloseButton,
  ImgWrapper,
  Form,
  Title,
  Content,
  InputsWrapper,
  InfoWrapper,
  InputWrapper,
  Input,
  ErrorText,
  TextInput,
  Footer,
  FormParagraph,
  StyledLink,
  Button,
  CharacteristicsList,
  FileWrapper,
  NoBr,
  UploadBtn,
  UploadBtnText,
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
}
