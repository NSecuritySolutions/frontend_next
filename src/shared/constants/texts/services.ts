import { TOurServices } from "./types";

import securityImg from "../../../assets/images/services/webp/services-image-2.webp";
import fireAlarmImg from "src/assets/images/services/webp/services-image-2.webp";

import videoSurvImg from "src/assets/images/services/webp/services-image-3.webp";

import intercomImg from "src/assets/images/services/webp/services-image-4.webp";

import calculateImg from "src/assets/images/services/webp/services-image-5.webp";

export const TEXT_LIMIT: number = 145;
export const TITLE_LIMIT: number = 23;

export const cardServices: TOurServices[] = [
  {
    id: 1,
    title: "Установка систем безопасности под ключ",
    text: "Комплексные решения, онлайн-консультации в сети и по телефону, проектирование от сбора первичных требований и выезда на замер до установки и подключения",
    img: "../../../assets/images/services/webp/services-image-2.webp",
    link: "#form",
    btnName: "Заказать",
  },
  {
    id: 2,
    title: "Установка охранно-пожарной сигнализации",
    text: "Выполним ремонт или установим противопожарную и\u00A0охранную системы. Имеем бессрочную лицензию МЧС на\u00A0осуществление деятельности.",
    img: "../../../assets/images/services/webp/services-image-2.webp",
    link: "#",
    btnName: "Подробнее",
  },
  {
    id: 3,
    title: "Установка видеонаблюдения",
    text: "Комплексные решения, онлайн-консультации в\u00A0сети и\u00A0по\u00A0телефону.",
    img: "../../../assets/images/services/webp/services-image-2.webp",
    link: "#",
    btnName: "Подробнее",
  },
  {
    id: 4,
    title: "Установка домофонии и систем контроля и учета доступа",
    text: "Профессиональная установка систем контроля доступа и\u00A0домофонов для вашей безопасности.",
    img: "../../../assets/images/services/webp/services-image-2.webp",
    link: "#",
    btnName: "Подробнее",
  },
];

export const cardServicesWithBannerData: TOurServices[] = [
  {
    id: 5,
    title: "Подробный расчет проекта",
    text: "Рассчитайте стоимость вашего проекта прямо на\u00A0сайте и\u00A0закажите обратную связь для дальнейшего сотрудничества",
    img: "../../../assets/images/services/webp/services-image-2.webp",
    link: "#calculator",
    btnName: "Рассчитать стоимость",
  },
];
