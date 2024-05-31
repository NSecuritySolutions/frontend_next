'use client'
// import { useEffect } from 'react'
// import dataFetch from '@/app/store/test.ts'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { BtnLink } from '@/shared/components/BtnLink/index.ts'

import { policy } from '@/shared/constants/texts/policy.ts'
import { IPolicyItem } from '@/shared/constants/texts/policy.ts'

import colors from '@/shared/constants/colors/index.ts'

import {
  SectionWrapper,
  SectionTitle,
  BlockTitle,
  BlockParagraph,
  BlockWrapper,
  BlockText,
} from './styled.ts'

const Policy = observer(() => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleContainerClick = () => {
    setIsExpanded(!isExpanded)
  }

  //@TODO - тест на работу с запросом от сервера
  // useEffect(() => {
  //   dataFetch.fetchData()
  // }, [])

  // const dataArray = dataFetch.data
  // console.log(dataArray, 'arr')

  // const text =
  //   'Большой ассортимент IP и AHD камер, регистраторов и коммутаторов для решения любой задачи и возможностью подбора необходимых функций\r\nПросмотр в приложении на смартфоне и через веб-браузер'

  // const splitArr = text.split(/\r\n|\r|\n/g)

  // const splitString = (string: string) => {
  //   string.split(/\r\n|\r|\n/g)
  // }

  //@TODO -  useRef - сделать высоту контейнера c текстом универсальной.

  return (
    <SectionWrapper $additional={isExpanded} $height={isExpanded ? '6150px' : '760px'} id="policy">
      <SectionTitle>{policy.title}</SectionTitle>
      <div style={{ overflow: 'hidden', scrollbarWidth: 'none' }}>
        {policy.paragraphs.map((item: IPolicyItem, i: number) => (
          <BlockWrapper key={i}>
            <BlockTitle>{item.title}</BlockTitle>
            <BlockParagraph>{item.paragraph}</BlockParagraph>
            <BlockText>{item.text}</BlockText>
          </BlockWrapper>
        ))}
      </div>
      <BtnLink
        onClick={handleContainerClick}
        btnType="transparent"
        text={isExpanded ? 'Вернуться' : 'Читать полностью'}
        width="214px"
        height="56px"
        color={colors.darkPrimary}
        size="15px"
      />
    </SectionWrapper>
  )
})
export default Policy
