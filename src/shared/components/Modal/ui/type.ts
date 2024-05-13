import { TWorkExamples } from "../../../constants/texts/types";

export default interface TModalProps {
  modalItem?: TWorkExamples | undefined;
  isOpen: boolean;
  closeModal: () => void;
}
