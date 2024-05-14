import styled from 'styled-components';

import colors from '../../../shared/constants/colors';

import yandexLogo from '../../../assets/images/yandex/yandex.webp';

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};

  @media (max-width: 1300px) {
    // padding: 60px 0;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 940px) {
    padding: 40px 0;
  }
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${colors.backgroundBase2};

  @media (max-width: 1300px) {
    flex-direction: row;
    max-width: 880px;
    width: 100%;
    gap: 120px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    border-radius: 0;
    max-width: 579px;
    width: 100%;
    box-shadow: none;
  }

  @media (max-width: 504px) {
  }
`;

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  font: 700 24px Manrope, sans-serif;

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 619px) {
    max-width: 268px;
    width: 100%;
    align-self: center;
  }
`;
const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr 3fr);

  @media (max-width: 1300px) {
    padding: 40px 0;
    display: grid;
  }

  @media (max-width: 940px) {
    padding: 0;
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }

  @media (max-width: 504px) {
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 940px) {
    width: 100%;
  }

  @media (max-width: 619px) {
    flex-direction: row;
  }
`;
const CardImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'Аватар пользователя'
}))`
  border-radius: 500px;
  background-color: ${colors.backgroundCardBl};
  width: 48px;
  height: 48px;
  background-size: cover;
`;
const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 619px) {
    justify-content: center;
    align-self: start;
    font-size: 16px;
    padding: 0 0 0 12px;
  }
`;

const ImageWrapper = styled.p`
  font-family: Manrope, sans-serif;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  display: flex;
  flex-direction: row;
  gap: 11.5px;

  @media (max-width: 1300px) {
    max-width: 880px;
    width: 100%;
  }

  @media (max-width: 619px) {
    max-width: 277px;
    width: 100%;
  }
`;

const ColumnImage = styled.img`
  margin: 0;
  padding: 0;
  max-width: 280px;
  width: 100%;

  @media (max-width: 940px) {
    padding: 30px 0 0 0;
  }

  @media (max-width: 619px) {
    display: none;
  }
`;

ColumnImage.defaultProps = {
  src: yandexLogo
};
const StyledParagraph = styled.p`
  font: 800 18px Manrope, sans-serif;
`;
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1300px) {
    gap: 130px;
  }

  @media (max-width: 940px) {
    gap: 19.5px;
  }

  @media (max-width: 619px) {
    flex-direction: column;
    justify-self: center;
  }
`;
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  ColumnTitle,
  TextWrapper,
  ImageWrapper,
  ContactsWrapper,
  ColumnImage,
  CardImg,
  StyledParagraph
};
