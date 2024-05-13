import colors from "../../../shared/constants/colors";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 60px 0;

  @media (max-width: 1300px) {
    padding: 60px 0;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 940px) {
    background-color: ${colors.backgroundPrimary};
    padding: 40px 0;
  }
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 20px;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  background: ${colors.backgroundPrimary};

  @media (max-width: 1300px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 120px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    border-radius: 0;
    max-width: 579px;
    width: 100%;
    box-shadow: none;
  }

  @media (max-width: 504px) {
  }
`;

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  font: 700 24px Manrope, sans-serif;

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 619px) {
    max-width: 277px;
    width: 100%;
    align-self: center;
  }
`;
const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(120px, 400px) minmax(120px, 580px));
  column-gap: 20px;
  gap: 40px;

  @media (max-width: 1300px) {
    padding: 40px;
    display: grid;
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
  @media (max-width: 940px) {
    padding: 0;
  }

  @media (max-width: 504px) {
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 940px) {
    width: 100%;
  }

  @media (max-width: 619px) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 619px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`;

const ColumnParagraph = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 619px) {
    max-width: 277px;
    width: 100%;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1300px) {
    gap: 130px;
  }
  @media (max-width: 940px) {
    gap: 19.5px;
  }

  @media (max-width: 619px) {
    flex-direction: column;
    justify-self: center;
  }
`;
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  ColumnTitle,
  TextWrapper,
  ColumnParagraph,
  ContactsWrapper,
};
