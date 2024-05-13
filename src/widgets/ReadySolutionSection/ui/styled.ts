import colors from "../../../shared/constants/colors";

import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding: 60px 0;
  max-width: 1180px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-bottom: 30px;

  color: ${colors.darkPrimary};
  font: 700 24px Manrope, sans-serif;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 35px;
`;

type TTabButtonProps = {
  active: boolean;
};

const TabButton = styled.button<TTabButtonProps>`
  background-color: ${(props) =>
    props.active ? colors.btnPrimary : colors.backgroundPrimary};
  color: ${(props) =>
    props.active ? colors.darkPrimary : colors.darkPrimaryOpacity};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  font: 700 16px Manrope, sans-serif;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${colors.darkPrimary};
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export { Section, SectionTitle, TabsContainer, TabButton, CardsContainer };
