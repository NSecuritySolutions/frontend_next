import { TWorkExamples } from "src/shared/constants/texts/types";

export interface IArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export type TSliderProps = {
  modalItem: TWorkExamples | undefined;
};
