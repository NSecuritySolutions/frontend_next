import colors from "../../../shared/constants/colors";

import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};
  padding-top: 120px;
  padding-bottom: 60px;
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 136%;
  max-width: 535px;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const CardWithBannerContainer = styled.div`
  margin-top: 40px;
`;

export {
  Section,
  Title,
  SectionWrapper,
  CardsContainer,
  CardWithBannerContainer,
};
