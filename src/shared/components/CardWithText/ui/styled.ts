import colors from "../../../constants/colors";

import styled from "styled-components";

const Card = styled.div`
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px 50.5px;
  min-height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  max-width: 580px;
  width: 100%;
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  max-width: 380px;
  width: 100%;
`;

const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  max-width: 320px;
  width: 100%;
`;

const CardImg = styled.img`
  position: absolute;
  top: 140px;
  right: 15px;
  max-width: 350px;
  max-height: 208px;
  object-fit: cover;
`;

export { Card, CardText, CardTitle, CardImg };
