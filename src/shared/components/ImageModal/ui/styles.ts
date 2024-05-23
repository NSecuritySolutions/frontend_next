import colors from '@/shared/constants/colors'
import { motion } from 'framer-motion'

import styled from 'styled-components'

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 107px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundBase3};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
  opacity: 0.7;
`
const ModalContent = styled.div`
  overflow-y: auto;
  position: relative;
  background-color: ${colors.textSecondary};
  margin-bottom: 80px;
  padding-top: 60px;
  border-radius: 20px;
  max-width: 1180px;
  width: 100%;
  min-height: 780px;
  display: flex;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  z-index: 100;
`

const CloseButton = styled.button`
  color: ${colors.textSecondary};
  background-color: transparent;
  object-fit: contain;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 101;
  width: 20px;
  height: 20px;
  opacity: 1;
  border-radius: 50%;
  border: 1px solid ${colors.btnPrimary};

  &:after {
    content: '\2715';
  }
  &:hover {
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 1%;
  opacity: 1;
  z-index: 99;
  &:hover {
    opacity: 0.7;
    transform: opacity 1s ease-in;
  }
`
const RevertButton = styled.button`
  position: absolute;
  top: 50%;
  right: 94%;
  z-index: 99;
  transform: rotate(180deg);
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transform: opacity 1s ease-in;
  }
`
export { ModalContainer, ModalContent, CloseButton, RevertButton, Button }
