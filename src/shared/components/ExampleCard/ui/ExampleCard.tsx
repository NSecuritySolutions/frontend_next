// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// import Image from 'next/image'

// import { BtnLink } from '@/shared/components/BtnLink/index.ts'

// import { TWorkExamples } from '@/shared/constants/texts/types.ts'
// import { rgbDataURL } from '@/shared/constants/utils/utils.ts'
// import colors from '@/shared/constants/colors'

// import blankImg from '@/assets/icons/examples/no-image.svg'

// import { TITLE_LIMIT, workExamples } from '@/shared/constants/texts/examples.ts'

// import {
//   CardWrapper,
//   ColumnTitle,
//   ButtonWrapper,
//   ExamplesContainer,
//   ExamplesTitle,
//   IconWrapper,
//   ExamplesLink,
//   InfoIcon,
//   InfoIconWrapper,
//   ExamplesImgWrapper,
//   SliderContainer,
// } from './styled.ts'

// import Modal from '@/shared/components/Modal/ui/Modal'

// const ExampleCard: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0)
//   const [isOpen, setIsOpen] = useState<boolean>(false)
//   const [modalItem, setModalItem] = useState<TWorkExamples | undefined>()

//   const router = useRouter()

//   const openModal = (item: TWorkExamples) => {
//     setIsOpen(true)
//     setModalItem(item)
//   }

//   const closeModal = () => {
//     setIsOpen(false)
//     router.push('/#examples')
//   }

//   const handleAfterChange = (slideIndex: number) => {
//     setCurrentSlide(slideIndex)
//   }

//   function truncate(str: string, maxlength: number) {
//     if (str.length > maxlength) {
//       return str.substring(0, maxlength - 3) + '...'
//     } else {
//       return str
//     }
//   }
//   return (
//     <section id="examples">
//       {/* <div> */}
//       <ColumnTitle>Примеры наших работ</ColumnTitle>

//       <SliderContainer>
//         {workExamples
//           .sort(
//             (newDate: TWorkExamples, olderDate: TWorkExamples) =>
//               new Date(olderDate.date as string).getTime() -
//               new Date(newDate.date as string).getTime(),
//           )
//           .map((item: TWorkExamples, i) => (
//             <CardWrapper key={item.id}>
//               {item.cardImage ? (
//                 <ExamplesLink href={`/examples/${item.id}`}>
//                   <ExamplesImgWrapper>
//                     <Image
//                       blurDataURL={rgbDataURL(225, 231, 244)}
//                       src={item?.cardImage}
//                       alt={item.cardTitle}
//                       fill
//                     />
//                   </ExamplesImgWrapper>
//                 </ExamplesLink>
//               ) : (
//                 <ExamplesImgWrapper>
//                   <Image
//                     src={(item.cardImage = blankImg)}
//                     fill
//                     alt={'Пустая картинка'}
//                     placeholder="blur"
//                     blurDataURL={rgbDataURL(225, 231, 244)}
//                   ></Image>
//                 </ExamplesImgWrapper>
//               )}
//               <ExamplesContainer key={i}>
//                 <ExamplesTitle>{truncate(item.cardTitle, TITLE_LIMIT)}</ExamplesTitle>

//                 <InfoIconWrapper>
//                   {item.quantities.map((item, i) => (
//                     <InfoIcon key={i}>
//                       {`${new Intl.NumberFormat('ru-RU').format(item.number)} ${item.measure}`}
//                     </InfoIcon>
//                   ))}
//                 </InfoIconWrapper>

//                 <ButtonWrapper>
//                   <BtnLink
//                     btnType="transparent"
//                     text={'Подробнее'}
//                     width="134px"
//                     height="44px"
//                     color={colors.darkPrimary}
//                     size="15px"
//                     link={`/examples/${item.id}`}
//                   ></BtnLink>

//                   <IconWrapper>{item.date ? item.date : '----'}</IconWrapper>
//                 </ButtonWrapper>
//               </ExamplesContainer>
//             </CardWrapper>
//           ))}
//       </SliderContainer>
//       {isOpen ? <Modal modalItem={modalItem} isOpen={isOpen} closeModal={closeModal} /> : ''}
//       {/* </div> */}
//     </section>
//   )
// }

// export default ExampleCard
