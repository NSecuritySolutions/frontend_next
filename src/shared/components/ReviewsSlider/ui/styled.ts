import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const SliderContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background-color: ${colors.backgroundBase2};
  @media (max-width: 1300px) {
    max-width: 580px;
  }
  @media (max-width: 940px) {
    max-width: 580px;
  }

  @media (max-width: 619px) {
    max-width: 280px;
  }
`;
const ReviewsContainer = styled.article`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 25px;
  max-width: 280px;
  height: 289px;
  width: 100%;
  background-color: ${colors.backgroundPrimary};
  font-family: Manrope, sans-serif;

  @media (max-width: 940px) {
    margin-top: 30px;
  }

  @media (max-width: 619px) {
    margin-top: 30px;
  }
`;

const ReviewsTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

const ReviewsParagraph = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const ReviewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;

const CustomDot = styled.div<{ $active?: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: ${props =>
    props.$active ? `${colors.btnPrimary}` : '#d7d7d7'};
`;

const ReviewsLink = styled.a`
  cursor: poinetr;
  font-size: 14px;
  color: ${colors.darkPrimary};
  opacity: 0.5;
`;

export {
  ReviewsContainer,
  SliderContainer,
  ReviewsTitle,
  ReviewsParagraph,
  ReviewsText,
  CustomDot,
  ReviewsLink
};
