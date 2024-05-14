import colors from "../../../../shared/constants/colors";

import styled from "styled-components";

const Card = styled.div<{ $backgroundColor: string }>`
  margin-top: 15px;
  background-color: ${(props) =>
    props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1180px;
  max-height: 320px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  padding-top: 13px;
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  padding-top: 71px;
  padding-bottom: 71px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  max-width: 380px;
  width: 100%;
`;
const TextContainer = styled.ul`
  list-style: inside;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  height: 145px;
  min-width: 540px;
  font:
    400 16px Manrope,
    sans-serif;
  list-style: none;
`;
const CardText = styled.li`
  font-weight: 400;
  font-size: 16px;
  max-width: 540px;
  width: 70%;
`;

const CardImg = styled.img`
  margin: 0;
  padding: 0;
`;

export {
  Card,
  CardText,
  CardTitle,
  CardImg,
  ImgWrapper,
  TextWrapper,
  TextContainer,
};
