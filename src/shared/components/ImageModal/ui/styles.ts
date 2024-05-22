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
export { ModalContainer, ModalContent, CloseButton, ContentWrapper }
