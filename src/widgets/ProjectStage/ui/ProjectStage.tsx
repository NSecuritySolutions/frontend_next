import { projectMilestones } from "../../../shared/constants/texts/project-milestones";
import {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  SectionTitle,
  StageTitle,
  StageParagraph,
  TextWrapper,
} from "./styled";

const ProjectStage = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Этапы работ</SectionTitle>
        <ColumnWrapper>
          {projectMilestones.map((item, i) => (
            <Column key={i}>
              <StageWrapper>
                <StageNumber>{item.id}</StageNumber>
                <StageLine />
              </StageWrapper>
              <TextWrapper>
                <StageTitle>{item.title}</StageTitle>
                <StageParagraph>{item.text}</StageParagraph>
              </TextWrapper>
            </Column>
          ))}
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default ProjectStage;
