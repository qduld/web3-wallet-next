import "i18next";
import { SVGProps } from "react";
import en from "@/locale/en.json";
import zh from "@/locale/zh.json";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TLocale = typeof en;

export interface ILocaleNamespaces {
  en: typeof en;
  zh: typeof zh;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: ILocaleNamespaces;
  }
}
