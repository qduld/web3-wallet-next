import { TLocale } from "@/types";
import en from "./en.json";
import zh from "./zh.json";

export type TLanguage = "en" | "zh";

export interface IParams {
  params: {
    locale: TLanguage;
  };
}

export const dictionaries = {
  en,
  zh,
} as Record<TLanguage, TLocale>;

export const fallbackLng = "en";
export const languages = [fallbackLng, "zh"] as TLanguage[];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
