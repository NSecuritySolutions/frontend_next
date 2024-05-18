import colors from '@/shared/constants/colors'
import styled from 'styled-components'

const Card = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px;
  gap: 20px;
  max-width: 1180px;

  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const UnorderedList = styled.ul`
  margin-inline-start: 15px;

  li {
    font-size: 0.7em;
  }
`

export { Card, ColumnWrapper, ContentWrapper, UnorderedList }
