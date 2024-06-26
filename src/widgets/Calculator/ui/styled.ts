import colors from '@/shared/constants/colors'

import styled from 'styled-components'

import { motion } from 'framer-motion'

const CalculatorContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 620px) {
    display: none;
  }
`

const Section = styled(motion.div).attrs({
  layout: 'size',
  transition: { type: 'linear' },
})<{
  height?: number
}>`
  background-color: ${colors.backgroundBase4};
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

const TitleWrapper = styled.div`
  width: 880px;
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

const ImgWrap = styled.div`
  padding: 9px;
  flex-shrink: 0;
`

const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`

const FooterWrapper = styled.div`
  width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

const GridContainer = styled.div`
  margin-top: 58px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }

  // @media (max-width: 620px) {
  //   width: 328px;
  // }
`

export {
  CalculatorContainer,
  Section,
  SectionTitle,
  ImgWrap,
  ImageButton,
  FooterWrapper,
  AddBlockButton,
  Select,
  Option,
  TitleWrapper,
  GridContainer,
}
