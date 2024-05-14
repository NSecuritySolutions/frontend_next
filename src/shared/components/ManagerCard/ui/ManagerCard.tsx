import { teamContacts } from '../../../constants/texts/our-team';
import {
  CardContainer,
  CardImg,
  CardName,
  CardPosition,
  CardTel
} from './styled';

const ManagerCard = () => {
  return (
    <>
      {teamContacts.map(item => (
        <CardContainer key={item.id}>
          <CardImg $imgUrl={item.image} alt="Фотография сотрудника" />
          <CardName>{item.name}</CardName>
          <CardPosition>{item.position}</CardPosition>
          <CardTel>{item.tel}</CardTel>
        </CardContainer>
      ))}
    </>
  );
};

export default ManagerCard;
