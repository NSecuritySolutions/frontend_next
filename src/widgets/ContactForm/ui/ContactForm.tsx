import React, { useState, useEffect, ChangeEvent, useRef } from "react";
// import { IMaskInput } from "react-imask";

import colors from "../../../shared/constants/colors";
import card from "src/assets/images/form/webp/card.webp";
import {
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
} from "./styled";

const ContactForm = () => {
  // const [form, setValue] = useState<TFormTypes>({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   text: "",
  // });
  // const [isValid, setIsValid] = useState(false);
  // const PhoneMask = "+{7} (000) 000-00-00";
  // const inputRef = useRef<typeof IMaskInput>(null);
  // const [isFocused, setIsFocused] = useState<boolean>(false);

  // const handleEditorFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleEditorBlur = () => {
  //   setIsFocused(false);
  // };

  // useEffect(() => {
  //   if (form.phone.length === 11) handleEditorBlur();
  // }, [form]);

  // useEffect(() => {
  //   if (isFocused && form.phone === "" && !inputRef.current) {
  //     console.log(inputRef.current);
  //   }
  // }, [isFocused]);

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue({ ...form, [e.target.name]: e.target.value });
  // };

  // function onChangePhone(value: string) {
  //   setValue({ ...form, phone: value });
  // }

  // useEffect(() => {
  //   const res = /[^а-яА-Я ]/g.exec(form.name);
  //   setValue({ ...form, name: form.name.replace(`${res}`, "") });
  // }, [form.name]);

  // useEffect(() => {
  //   if (form.name.length > 2 && form.phone.length === 11) {
  //     setIsValid(true);
  //   } else setIsValid(false);
  // }, [form]);

  // useEffect(() => {
  //   const res = /[^a-zA-Z.@_-]/g.exec(form.email);
  //   setValue({ ...form, email: form.email.replace(`${res}`, "") });
  // }, [form.email]);

  // const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setValue({ ...form, [e.target.name]: e.target.value });
  // };

  // function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  // }

  return (
    <>
      <Section>
        <SectionWrapper>
          <ColumnWrapper>
            <InfoColumn>
              <SectionTitle>Оставить заявку</SectionTitle>
              <ColumnParagraph>
                Заполните форму заявки и наш менеджер вам перезвонит
              </ColumnParagraph>
              {/* <CardImage $imgUrl={card} alt="Картинка карты" /> */}
            </InfoColumn>
            <Form>
              {/* <Input
                placeholder="Имя*"
                value={form.name}
                name="name"
                type="text"
                onChange={onChange}
                maxLength={20}
                required
              /> */}
              {/* <MaskedStyledInput
                mask={PhoneMask}
                inputRef={inputRef}
                radix="."
                unmask={true}
                placeholder="Телефон*"
                name="phone"
                type="text"
                maxLength={18}
                required
                onAccept={(value: string) => {
                  onChangePhone(value);
                }}
                lazy={true}
                onFocus={handleEditorFocus}
                onBlur={handleEditorBlur}
              /> */}
              {/* <Input
                placeholder="E-mail"
                value={form.email}
                name="email"
                type="email"
                onChange={onChange}
              />
              <TextInput
                placeholder="Комментарий"
                value={form.text}
                name="text"
                onChange={onChangeText}
              /> */}
              <FormParagraph>
                Нажимая Отправить, вы принимаете условия&nbsp;
                <Link>Правил политики конфиденциальности</Link>
              </FormParagraph>
              {/* <Button
                width="130px"
                height="44px"
                color={colors.btnOpacityColor}
                text="Отправить"
                onClick={handleSubmit}
                disabled={!isValid}
              /> */}
            </Form>
          </ColumnWrapper>
        </SectionWrapper>
      </Section>
    </>
  );
};

export default ContactForm;
