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

import { Info } from '../types.ts'
import { FC } from 'react'

const OurTeam: FC<{ data: Info }> = ({ data }) => {
  return (
    <Section id="our-team">
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>
              <ColumnParagraph>
                <StyledList>
                  {data.description.map((item, index) => (
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
            <ManagerCard data={data.employees}></ManagerCard>
          </ContactsWrapper>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  )
}

export default OurTeam
