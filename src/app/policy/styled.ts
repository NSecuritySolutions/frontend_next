import colors from '@/shared/constants/colors'

import styled from 'styled-components'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;
  padding: 40px;
  max-width: 760px;
  width: 100%;
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

const BlockText = styled.p``

export { SectionWrapper, SectionTitle, BlockTitle, BlockParagraph, BlockWrapper, BlockText }
