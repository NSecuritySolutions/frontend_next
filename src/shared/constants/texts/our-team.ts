import firstTeamMember from '../../../assets/images/team/dzhamalov.webp';
import secondTeamMember from '../../../assets/images/team/barkov.webp';
import thirdTeamMember from '/src/assets/images/team/uchaikin.webp';

import { TTeamContacts } from './types';

export const teamText: string[] = [
  'Уже более 10-ти лет мы занимаемся системами безопасности: системы видеонаблюдения, СКУД, охранная и пожарная сигнализации',
  'Имеем огромный опыт работы, начиная от жилых квартир, заканчивая крупными производственными комплексами',
  'Найдем решения под любые задачи и бюджет'
];

export const teamContacts: TTeamContacts[] = [
  {
    id: 1,
    name: 'Рамиль Джамалов',
    position: 'Ведущий инженер',
    tel: '+7-999-999-99-99',
    image: firstTeamMember
  },
  {
    id: 2,
    name: 'Павел Барков',
    position: 'Техник-инженер',
    tel: '+7-999-999-99-99',
    image: secondTeamMember
  },
  {
    id: 3,
    name: 'Евгений Учайкин',
    position: 'Менеджер',
    tel: '+7-999-999-99-99',
    image: thirdTeamMember
  }
];
