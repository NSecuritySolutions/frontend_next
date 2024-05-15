import colors from '../../../shared/constants/colors';

import styled from 'styled-components';

const SliderContainer = styled.section`
  margin: 60px auto;
  background-color: ${colors.backgroundBase2};
  display: flex;
  flex-direction: column;
  min-height: 644px;
  max-width: 1180px;
  width: 100%;
  row-gap: 20px !important;

  .slick-track {
    display: flex;
  }

  @media (max-width: 1280px) {
    max-width: 900px;
    width: 100%;
  }

  @media (max-width: 916px) {
    max-width: 600px;
    width: 100%;
  }

  @media (max-width: 619px) {
    max-width: 300px;
    min-height: 528px;
    width: 100%;
  }

  .slick-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      gap: 20px;

      @media (max-width: 1280px) {
        justify-content: space-between;
      }

      @media (max-width: 880px) {
        justify-content: space-between;
      }
    }
  }
  .slick-list {
    margin-bottom: 40px;
  }

  .slick-initialized .slick-slide {
    row-gap: 20px;
    max-width: 1180px;
    article {
      row-gap: 0px;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 5px;
      width: 10px;
      height: 10px;
      div {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;
      }

      &.slick-active div {
        background-color: ${colors.btnPrimary};
      }
    }
  }
`;

const CardWrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  gap: 20px !important;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px !important;
  padding: 20px;

  @media (max-width: 1280px) {
    flex-direction: column;
    max-width: 430px;
    width: 100%;
    gap: 20px;
  }

  @media (max-width: 916px) {
    min-height: 528px;
  }
`;

const ExamplesContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  gap: 10px;
  max-width: 320px;
  width: 100%;
  min-height: 202px;
  background-color: ${colors.backgroundPrimary};
  font-family: Manrope, sans-serif;
  justify-content: center;

  @media (max-width: 916px) {
    max-width: 240px;
  }
`;

const ExamplesLink = styled.a`
  text-decoration: none;
`;
const ExamplesImg = styled.img`
  border-radius: 12px;
  background-color: #fff;
  max-width: 200px;
  min-height: 200px;
  object-fit: cover;

  @media (max-width: 1280px) {
    min-width: 390px;
    height: 271.66px;
  }

  @media (max-width: 916px) {
    min-width: 240px;
    height: 219px;
  }
`;

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  margin-bottom: 30px;
  font: 700 24px Manrope, sans-serif;
`;

const ExamplesTitle = styled.h3`
  max-width: 320px;
  width: 100%;
  font-weight: 800;
  font-size: 18px;
  text-align: start;
`;

const ExamplesText = styled.p`
  max-width: 320px;
  width: 100%;
  font-weight: 400;
  font-size: 80%;
`;

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props =>
    props.$active ? `${colors.btnPrimary}` : '#d7d7d7'};
`;

const ButtonWrapper = styled.div`
  display: flex !important;
  column-gap: 0 !important;
  justify-content: space-between;
  align-items: flex-end;
`;

const SecondButtonWrapper = styled.div`
  display: flex !important;
  column-gap: 0 !important;
  justify-content: center;
`;

const ExamplesButton = styled.a<{ $active?: boolean }>`
  cursor: pointer;
  justify-content: center;
  border-radius: 12px;
  border-color: rgba(16, 16, 16, 0.32);
  border-style: solid;
  border-width: 1px;
  background-color: ${colors.backgroundPrimary};
  white-space: nowrap;
  padding: 12px 20px;
  width: 134px;
  height: 44px;
  opacity: 1;

  font: 800 15px/133% Manrope, sans-serif;

  &:hover {
    background-color: ${colors.btnOutlineHover};
  }
`;

const IconWrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  column-gap: 12px !important;

  @media (max-width: 916px) {
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 76px;
    height: 76px;
  }
`;
const ExamplesIcons = styled.div`
  display: flex !important;
  flex-direction: row;
`;

export {
  ExamplesContainer,
  CardWrapper,
  ExamplesTitle,
  ExamplesText,
  ExamplesButton,
  ExamplesImg,
  SliderContainer,
  CustomDot,
  ColumnTitle,
  ButtonWrapper,
  ExamplesIcons,
  IconWrapper,
  ExamplesLink,
  SecondButtonWrapper
};
