import colors from '@/shared/constants/colors'

import styled from 'styled-components'

type TStyledProps = {
  $height: string
  $additional: boolean
}

const SectionWrapper = styled.section<TStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px;
  max-width: 760px;
  width: 100%;

  transition: max-height 5s ease;
  max-height: ${(props) => (props.$height ? props.$height : '760px')};

  a {
    padding: 18px;
    margin: 32px 0 0 0;
  }
`
const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
`

const BlockTitle = styled.h3`
  margin-top: 20px;
  font-weight: 800;
  font-size: 18px;
`
const BlockParagraph = styled.p``

const BlockText = styled.div`
  white-space: pre-wrap;

  a {
    padding: 0;
    margin: 0;
    font-weight: 600;
  }
  span {
    padding: 0;
    margin: 0;
    font-weight: 600;
  }
`

export { SectionWrapper, SectionTitle, BlockTitle, BlockParagraph, BlockWrapper, BlockText }
