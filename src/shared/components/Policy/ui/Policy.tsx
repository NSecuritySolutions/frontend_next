'use client'

import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { BtnLink } from '@/shared/components/BtnLink/index.ts'
import Loader from '../../Loader/Loader.tsx'
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
  const [updatedPolicy, setUpdatedPolicy] = useState<IPolicyItem[] | undefined>(undefined)

  const handleContainerClick = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    const transformPolicyParagraphs = () => {
      const updatedParagraphs = policy.paragraphs.map((item) => {
        let updatedText = item.text

        if (updatedText !== undefined) {
          updatedText = updatedText.replace(
            /https:\/\/opticontol\.ru\/policy\.html/g,
            '<a href="https://opticontol.ru/policy.html" target="_blank">https://opticontol.ru/policy.html</a>',
          )

          updatedText = updatedText.replace(
            /info@opticontrol\.ru/g,
            '<a href="mailto:info@opticontrol.ru">info@opticontrol.ru</a>',
          )
          updatedText = updatedText.replace(/ОПТИКОНТРОЛЬ/gi, '<span>ОПТИКОНТРОЛЬ</span>')
        }
        return { ...item, text: updatedText }
      })

      setUpdatedPolicy(updatedParagraphs)
    }

    transformPolicyParagraphs()
  }, [policy])

  const createMarkup = (text: string) => ({ __html: text })

  if (!updatedPolicy) {
    return <Loader />
  }

  // @TODO - тест на работу с запросом от сервера
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

  //@TODO -  useRef - сделать высоту контейнера c текстом универсальной.

  return (
    <SectionWrapper $additional={isExpanded} $height={isExpanded ? '10150px' : '660px'} id="policy">
      <SectionTitle>{policy.title}</SectionTitle>
      <div style={{ overflow: 'hidden', scrollbarWidth: 'none' }}>
        {updatedPolicy.map((item: IPolicyItem, i: number) => (
          <BlockWrapper key={i}>
            <BlockTitle>{item.title}</BlockTitle>
            <BlockParagraph>{item.paragraph}</BlockParagraph>
            <BlockText
              dangerouslySetInnerHTML={item && item.text ? createMarkup(item.text) : { __html: '' }}
            ></BlockText>
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
