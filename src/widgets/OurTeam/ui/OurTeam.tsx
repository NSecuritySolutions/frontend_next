import { ManagerCard } from '../../../shared/components/ManagerCard/index.ts';

import listMarker from '../../../assets/icons/list-item.svg';

import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  ColumnParagraph,
  TextWrapper,
  ColumnWrapper,
  ContactsWrapper,
  ListItem,
  ListItemText
} from './styled.ts';
import { teamText } from '../../../shared/constants/texts/our-team.ts';

const OurTeam = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>
              <ColumnParagraph>
                {teamText.map((item, index) => (
                  <ListItem key={index}>
                    <img src={listMarker} alt="List Marker" />
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </ColumnParagraph>
            </TextWrapper>
          </Column>
          <ContactsWrapper>
            <ManagerCard></ManagerCard>
          </ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default OurTeam;
