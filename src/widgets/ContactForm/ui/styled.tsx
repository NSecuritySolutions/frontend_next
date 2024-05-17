import colors from '@/shared/constants/colors'
// import { IMaskMixin } from "react-imask";
import React from 'react'

import styled from 'styled-components'

const Section = styled.section`
  background-color: ${colors.backgroundBase2};
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 1300px) {
    padding: 60px 20px 120px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1180px) {
    padding: 60px 0 120px;
  }

  @media (max-width: 640px) {
    padding: 30px 0;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundCardYe};
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05)6
  border-radius: 20px;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 60px;
  gap: 40px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 1180px) {
    max-width: 1180px;
    border-radius: 0;
  }
`

const SectionTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;

  font:
    700 24px Manrope,
    sans-serif;

  @media (max-width: 940px) {
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
  }
`

const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 1300px) {
    max-width: 880px;
    gap: 20px;
  }

  @media (max-width: 1180px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 940px) {
    padding: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 660px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 660px) {
    flex-direction: column;
  }
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 880px) {
    max-width: 280px;
    gap: 20px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;

  @media (max-width: 940px) {
  }

  @media (max-width: 619px) {
  }
`

const ColumnParagraph = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 348px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 880px) {
    max-width: 280px;
  }
`

const FormParagraph = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 348px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  @media (max-width: 880px) {
    max-width: 280px;
  }
`

const Input = styled.input`
  color: ${colors.darkPrimary};
  background: ${colors.backgroundPrimary};
  border: none;
  border-radius: 12px;
  max-width: 348px;
  width: 100%;
  height: 42px;
  padding: 10px 24px;

  &:active {
    outline: solid 1px #fcc12d;
    //border: solid 1px #FCC12D;
    //border-color: #FCC12D;
  }

  &:focus {
    outline: solid 1px #fcc12d;
    //border: solid 1px #FCC12D;
    //border-color: #FCC12D;
  }

  &:focus-visible {
    outline: solid 1px #fcc12d;
    //border: solid 1px #FCC12D;
    //border-color: #FCC12D;
  }

  @media (max-width: 880px) {
    max-width: 280px;
  }
`

// const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => (
//   <Input {...props} ref={inputRef as React.LegacyRef<HTMLInputElement>} />
// ));

const TextInput = styled.textarea`
  color: ${colors.darkPrimary};
  background: ${colors.backgroundPrimary};
  border: none;
  border-radius: 12px;
  max-width: 348px;
  width: 100%;
  height: 150px;
  padding: 10px 24px;
  resize: none;

  &:active {
    outline: none;
    border: solid 1px #fcc12d;
    border-color: #fcc12d;
  }

  &:focus {
    outline: none;
    border: solid 1px #fcc12d;
    border-color: #fcc12d;
  }

  &:focus-visible {
    outline: none;
    border: solid 1px #fcc12d;
    border-color: #fcc12d;
  }

  @media (max-width: 880px) {
    max-width: 280px;
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

const CardImage = styled.div<{ $imgUrl?: string; alt?: string }>`
  background: ${(props) => `url(${props.$imgUrl}) no-repeat center`};
  background-size: contain;
  height: 320px;
  width: 364px;
  position: relative;
  top: 66px;
  left: -26px;

  @media (max-width: 1300px) {
    align-self: center;
  }

  @media (max-width: 880px) {
    position: static;
  }

  @media (max-width: 660px) {
    display: none;
  }
`

export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  InfoColumn,
  Form,
  FormParagraph,
  Link,
  SectionTitle,
  ColumnParagraph,
  Input,
  TextInput,
  CardImage,
}
