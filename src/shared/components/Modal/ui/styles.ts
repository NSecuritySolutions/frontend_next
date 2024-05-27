import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import closeBtn from '@/assets/icons/+.svg'

import styled from 'styled-components'

const ModalContainer = styled(motion.div)`
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
`
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
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 702px;
  margin-bottom: 20px;
  width: 100%;
`

const NumbersRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const NumbersColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EquipmentList = styled.ul`
  margin-bottom: 20px;
  list-style-type: circle;

  // display: flex;
  // flex-direction: column;
`

const EquipmentListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: inside;
  font-size: 16px;
  font-weight: 400;
`
const TitleWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: 700;
`

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 800;
`
const Date = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;

  // line-height: 20px;
  line-height: 1.33333;
  color: ${colors.darkPrimary};
  opacity: 0.5;
`
const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.titleBlueColor};
`

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 20px;
`

const TextParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;

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
`
const CloseButton = styled.button`
  background-color: ${colors.backgroundPrimary};
  object-fit: contain;
  border: none;
  position: sticky;
  top: 0px;
  left: 80px;

  width: 27px;
  height: 27px;
  opacity: 1;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }
`
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
  TextWrapper,
}
