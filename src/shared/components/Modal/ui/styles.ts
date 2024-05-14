import colors from '../../../../shared/constants/colors';

import closeBtn from '../../../../assets/icons/+.svg';

import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 107px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundBase2};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 99;
`;
const ModalContent = styled.div`
  overflow-y: auto;
  background-color: ${colors.backgroundPrimary};
  margin-bottom: 80px;
  padding-top: 60px;
  border-radius: 20px;
  position: relative;
  max-width: 1180px;
  width: 100%;
  height: calc(100vh - 107px);
  display: flex;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 702px;
  margin-bottom: 20px;
  width: 100%;
`;

const NumbersRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const NumbersColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EquipmentList = styled.ul`
  margin-bottom: 20px;
  list-style-type: circle;

  // display: flex;
  // flex-direction: column;
`;

const EquipmentListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: inside;
  font: 400 16px Manrope, sans-serif;
`;
const TitleWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font: 700 24px Manrope, sans-serif;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font: 800 18px Manrope, sans-serif;
`;
const Date = styled.div`
  display: flex;
  flex-direction: row;
  font: 400 14px Manrope, sans-serif;

  // line-height: 20px;
  line-height: 1.33333;
  color: #101010;
  opacity: 0.5;
`;
const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  font: 700 24px Manrope, sans-serif;
  color: ${colors.titleBlueColor};
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  font: 700 16px Manrope, sans-serif;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

const TextParagraph = styled.p`
  font: 400 16px Manrope, sans-serif;
  br {
    margin-top: 20px;
    display: block;
    content: '';
  }

  a {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
  margin-bottom: 80px;
`;
const CloseButton = styled.button`
  background-image: ${`url("${closeBtn}")`};
  object-fit: contain;
  border: none;
  position: sticky;
  top: 0px;
  left: 1080px;

  width: 27px;
  height: 27px;
  opacity: 1;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }
`;
export {
  ModalContainer,
  ModalContent,
  CloseButton,
  TitleWrapper,
  Title,
  Date,
  Quantity,
  Paragraph,
  ContentWrapper,
  NumbersRow,
  NumbersColumn,
  EquipmentList,
  EquipmentListItem,
  SubTitle,
  TextParagraph,
  TextWrapper
};
