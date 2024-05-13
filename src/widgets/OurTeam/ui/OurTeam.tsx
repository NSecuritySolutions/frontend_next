import { ManagerCard } from "../../../shared/components/ManagerCard";
import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  ColumnParagraph,
  TextWrapper,
  ColumnWrapper,
  ContactsWrapper,
} from "./styled";

const OurTeam = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>
              <ColumnParagraph>
                Уже более 10-ти лет мы занимаемся системами безопасности.
                Системы видеонаблюдения, СКУД, охранная и пожарная сигнализации.
                Огромный опыт работы, начиная от жилых квартир, заканчивая
                крупными производственными комплексами. Найдем решения под любые
                задачи и бюджет.
              </ColumnParagraph>
            </TextWrapper>
          </Column>
          <ContactsWrapper>
            <ManagerCard />
          </ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default OurTeam;
