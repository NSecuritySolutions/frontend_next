import Image from 'next/image'

import { ManagerCard } from '@/shared/components/ManagerCard/index.ts'

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
  ListItemText,
  StyledList,
} from './styled.ts'

import { teamText } from '@/shared/constants/texts/our-team.ts'

const OurTeam = () => {
  //console.log(data[0].description, data[0].employees)
  return (
    <Section id="team">
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>
              <ColumnParagraph>
                <StyledList>
                  {teamText.map((item, index) => (
                    <ListItem key={index}>
                      <Image src="/icons/list-item.svg" alt="List Marker" width={20} height={20} />
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </StyledList>
              </ColumnParagraph>
            </TextWrapper>
          </Column>
          <ContactsWrapper>
            <ManagerCard></ManagerCard>
          </ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default OurTeam
