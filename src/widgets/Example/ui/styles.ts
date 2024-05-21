import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 0;
  padding: 0;
`

const ModalContent = styled.div`
  overflow-y: auto;
  background-color: ${colors.backgroundPrimary};
  margin-bottom: 80px;
  padding-top: 60px;
  border-radius: 20px;
  position: relative;
  min-width: 1180px;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  margin-bottom: 20px;
  width: 100%;
`

const NumbersRow = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const NumbersColumn = styled.div<{ $color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background-color: ${(props) => (props.$color ? props.$color : 'white')};
  min-width: 190px;
  width: 100%;
  border-radius: 8px;
  gap: 8px;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 118px;
  width: 100%;
`
const ImageColumn = styled.div`
  max-width: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;s
`

const EquipmentList = styled.ol`
  margin-bottom: 20px;
  counter-reset: a 0;
  list-style: none;

  // display: flex;
  // flex-direction: column;
`

const EquipmentListItem = styled.li`
  margin: 0;
  padding: 0;

  font:
    400 16px Manrope,
    sans-serif;

  &:before {
    content: counter(a) '.';
    counter-increment: a 1;
    display: inline-block;
    margin-right: 5px;
  }
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
  font:
    700 24px Manrope,
    sans-serif;
`

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font:
    800 18px Manrope,
    sans-serif;
`
const Date = styled.div`
  display: flex;
  flex-direction: row;
  font:
    400 14px Manrope,
    sans-serif;

  // line-height: 20px;
  line-height: 1.33333;
  color: ${colors.darkPrimary};
  opacity: 0.5;
`

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  font:
    700 24px Manrope,
    sans-serif;
  color: ${colors.darkPrimary};
`

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  font:
    400 16px Manrope,
    sans-serif;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 20px;
`

const TextParagraph = styled.p`
  font:
    400 16px Manrope,
    sans-serif;
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

export {
  ModalContent,
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
  ImageColumn,
  InfoColumn,
  SectionWrapper,
}
