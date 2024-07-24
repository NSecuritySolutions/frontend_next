import colors from '@/shared/constants/colors'

import styled from 'styled-components'

import { motion } from 'framer-motion'

const CalculatorContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  // в связи с анимацией отключаю на 940
  @media (max-width: 940px) {
    display: none;
  }

  @media (max-width: 620px) {
    display: none;
  }
`

const Section = styled.div`
  background-color: ${colors.backgroundBase4};
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  // margin-top: 58px;
  // align-items: center;
`

const TitleWrapper = styled.div`
  width: 1180px;
  margin-top: 40px;
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  z-index: 2;

  @media (max-width: 940px) {
    width: 430px;
  }

  // @media (max-width: 620px) {
  //   width: 328px;
  // }
`

const SectionTitle = styled.h3`
  height: 28px;
  color: ${colors.darkPrimary};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
`

const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 4px;
  align-items: center;
  padding-top: 4px;
`

const BodyWrapper = styled.div`
  width: 1180px;
  margin-top: 58px;
  display: flex;
  gap: 20px;
`

const FooterWrapper = styled.div`
  margin-top: 10px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  // align-items: center;
  // justify-content: space-between;

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: start;
    width: 430px;

    & > button {
      order: 2;
    }

    & > p {
      order: 1;
    }
  }

  // @media (max-width: 620px) {
  //   width: 328px;
  // }
`

const AddBlockButton = styled.button`
  position: relative;
  display: flex;
  margin-top: 2px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${colors.textSecondary};
  opacity: 0.8px;
  cursor: pointer;
`

const Select = styled(motion.ul).attrs({
  layout: true,
  initial: { height: 0 },
  animate: { height: 'auto' },
  exit: { height: 0 },
})`
  position: absolute;
  top: 25px;
  left: 0px;
  width: max-content;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 8px;
  background-color: ${colors.backgroundPrimary};
  overflow: hidden;
  z-index: 99;
`

const Option = styled.li`
  padding: 6px 10px;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.backgroundBase3};
  }
`

const GridWrapper = styled.div<{ $height: number }>`
  height: ${(props) => (props.$height ? `${props.$height}px` : 'auto')};
  transition: height 1s;
`

const GridContainer = styled.div<{ $maxHeight: number }>`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  max-height: ${(props) => (props.$maxHeight ? `${props.$maxHeight}px` : 'auto')};
  transition:
    max-height 1s,
    height 1s;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }

  // @media (max-width: 620px) {
  //   width: 328px;
  // }
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 280px;
  gap: 12px;
`

const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Button = styled.a<{ $weight?: number }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.backgroundBase3};
  border-radius: 12px;
  background-color: ${colors.backgroundPrimary};
  white-space: nowrap;
  width: 280px;
  height: 44px;
  opacity: 1;
  gap: 8px;

  &:hover {
    background-color: ${colors.btnOutlineHover};
  }
`

export {
  CalculatorContainer,
  Section,
  SectionTitle,
  ImageButton,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
  TitleWrapper,
  GridContainer,
  PriceContainer,
  Price,
  GridWrapper,
  BodyWrapper,
  ButtonsWrapper,
  Button,
}
