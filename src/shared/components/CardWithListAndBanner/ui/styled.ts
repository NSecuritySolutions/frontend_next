import styled from "styled-components";
import colors from "../../../constants/colors";

const Card = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) =>
    props.$backgroundColor || colors.backgroundBase3};
  border-radius: 20px;
  padding-top: 80px;
  padding-left: 60px;
  min-height: 380x;
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 23px;
`;

const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  line-height: 136%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const ListItemText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 136%;
`;

const ContentContainer = styled.div`
  max-width: 645px;
`;

export {
  Card,
  TitleContainer,
  CardTitle,
  List,
  ListItem,
  ListItemText,
  ContentContainer,
};
