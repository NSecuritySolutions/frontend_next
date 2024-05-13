import styled from "styled-components";
import colors from "../../../constants/colors";

const Card = styled.div<{ $backgroundColor: string }>`
  margin-top: 15px;
  background-color: ${(props) =>
    props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ImgWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  padding-top: 67px;
  padding-bottom: 67px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
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
  margin: 0;
  padding: 0;
`;

export { Card, CardText, CardTitle, CardImg, ImgWrapper, TextWrapper };
