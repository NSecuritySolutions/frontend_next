import colors from '@/shared/constants/colors'

import { motion } from 'framer-motion'

import styled from 'styled-components'

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(237, 237, 237, 0.7);
    z-index: -1;
  }
`
const ModalContent = styled.div`
  overflow-y: auto;
  background-color: ${colors.textSecondary};
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  max-width: 1180px;
  width: 100%;
  min-height: 780px;
  // height: 90%;
  display: flex;
  box-shadow: 2px 2px 25px 0 rgba(16, 16, 16, 0.05);
  z-index: 10;

  @media (max-width: 1180px) {
    max-width: 800px;
    width: 100%;
    min-height: 600px;
  }

  @media (max-width: 880px) {
    max-width: 580px;
    width: 100%;
    min-height: 435px;
  }

  @media (max-width: 620px) {
    max-width: 296px;
    width: 100%;
    min-height: 222px;
  }
`

const CloseButton = styled.button`
  background-color: ${colors.backgroundBase3};
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
    color: ${colors.darkPrimary};
  }

  &:hover {
    opacity: 0.6;
    transition: opacity 0.1s ease-in;
  }
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  opacity: 1;
  z-index: 11;
  width: 64px;
  height: 64px;

  &:hover {
    opacity: 0.7;
    transform: opacity 1s ease-in;
  }

  @media (max-width: 1180px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 880px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 620px) {
    width: 20px;
    height: 20px;
  }
`
const RevertButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 11;
  transform: rotate(180deg);
  opacity: 1;
  width: 64px;
  height: 64px;

  &:hover {
    opacity: 0.7;
    transform: opacity 1s ease-in;
  }

  @media (max-width: 1180px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 880px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 620px) {
    width: 20px;
    height: 20px;
  }
`
export { ModalContainer, ModalContent, CloseButton, RevertButton, Button }
