import styled from 'styled-components'

import colors from '@/shared/constants/colors'

const Section = styled.section`
  margin: 0 auto;
  background-color: ${colors.backgroundBase2};

  @media (max-width: 1180px) {
    align-items: center;
    justify-content: center;
  }
`

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
    max-width: 880px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 940px) {
    flex-direction: column;
    border-radius: 0;
    max-width: 579px;
    width: 100%;
    box-shadow: none;
  }
`

const ColumnTitle = styled.h2`
  color: ${colors.darkPrimary};
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  font-size: 24px;
  font-weight: 700;

  @media (max-width: 1300px) {
    margin-bottom: 0px;
  }

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
  }

  @media (max-width: 620px) {
    max-width: 328px;
    width: 100%;
    padding-left: 16px;
  }
`
const ColumnWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr 3fr);

  @media (max-width: 1300px) {
    padding: 20px 0 25px 0;
    display: grid;
  }

  @media (max-width: 940px) {
    padding: 0;
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
  s @media (max-width: 620px) {
    margin: 0;
    padding: 0 16px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 940px) {
    width: 100%;
    padding-top: 20px;
  }

  @media (max-width: 620px) {
    flex-direction: row;
  }
`
const CardImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'Аватар пользователя',
}))`
  border-radius: 500px;
  background-color: ${colors.backgroundCardBl};
  width: 48px;
  height: 48px;
  background-size: cover;
`
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

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
    gap: 12px;
    align-items: center;
  }

  @media (max-width: 620px) {
    justify-content: center;
    font-size: 16px;
    align-items: center;
    align-content: center;
  }
`

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

  @media (max-width: 940px) {
    max-width: 580px;
    width: 100%;
  }
  @media (max-width: 620px) {
    max-width: 328px;
    width: 100%;
  }
`

const ColumnImageWrapper = styled.div`
  width: 280px;
  height: 74px;
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
`

const StyledParagraph = styled.p`
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 620px) {
    width: 328px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;

    text-align: center;
  }
`
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

  @media (max-width: 620px) {
    flex-direction: column;
    justify-self: center;
  }
`
export {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  ColumnTitle,
  TextWrapper,
  ImageWrapper,
  ContactsWrapper,
  ColumnImageWrapper,
  CardImg,
  StyledParagraph,
}
