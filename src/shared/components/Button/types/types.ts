import { FormEvent } from "react";

type TBtnLinkProps = {
  width: string;
  height: string;
  color: string;
  text: string;
  disabled: boolean;
  onClick: (e: FormEvent<Element>) => void;
};

type TStyledBtnLinkProps = {
  width: string;
  height: string;
  color: string;
  onClick: (e: FormEvent<Element>) => void;
};

export type { TBtnLinkProps, TStyledBtnLinkProps };
