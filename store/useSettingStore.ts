import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  fallbackLng,
  languages,
  dictionaries,
  TLanguage,
} from "@/locale/locale";
import { TLocale } from "@/types/index";

interface SettingState {
  defaultLocale: TLanguage;
  locales: TLanguage[];
  locale: TLanguage;
  dictionary: TLocale;
  setDefaultLocale: (newVal: TLanguage) => void;
  setDictionary: (newVal: TLanguage) => void;
  setLocale: (newVal: TLanguage) => void;
}

const useSettingStore = create<SettingState>()(
  persist(
    (set, get) => ({
      defaultLocale: get()?.defaultLocale ? get()?.defaultLocale : fallbackLng,
      locales: languages,
      locale: get()?.defaultLocale ? get()?.defaultLocale : fallbackLng,
      dictionary: get()?.defaultLocale
        ? dictionaries[get()?.defaultLocale]
        : dictionaries[fallbackLng],
      setDefaultLocale: (newVal) =>
        set((state) => ({
          defaultLocale: (state.defaultLocale = newVal),
        })),
      setLocale: (newVal: TLanguage) =>
        set((state) => ({
          locale: (state.locale = newVal),
        })),
      setDictionary: (newVal: TLanguage) =>
        set((state) => ({
          dictionary: (state.dictionary = dictionaries[newVal]),
        })),
    }),
    {
      name: "setting",
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    }
  )
);

export default useSettingStore;
