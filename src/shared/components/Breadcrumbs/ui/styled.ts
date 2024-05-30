import styled from 'styled-components'

const Nav = styled.nav`
  padding-block: 40px;
  display: flex;
  gap: 12px;
  width: 1180px;

  @media (max-width: 1300px) {
    width: 880px;
  }

  @media (max-width: 940px) {
    width: 580px;
    padding-block: 32px;
  }

  @media (max-width: 620px) {
    width: 328px;
  }
`

const Text = styled.p`
  font-weight: 800;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  gap: 12px;

  @media (max-width: 620px) {
    font-size: 16px;
    font-weight: 700;
    min-width: 7px;
  }
`

export { Nav, Text }
