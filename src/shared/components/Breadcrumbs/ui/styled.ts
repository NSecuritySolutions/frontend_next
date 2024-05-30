import styled from 'styled-components'

const Nav = styled.nav`
  padding: 40px 0px;
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 620px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export { Nav }
