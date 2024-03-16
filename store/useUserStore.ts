import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as bip39 from "bip39";

interface IUserState {
  pwd: string;
  mnemonicPhrase: string[];
  setPwd: (value: string) => void;
  setMnemonicPhrase: (value: string[]) => void;
  generateMnemonicPhrase: () => void;
}

const useUserStore = create<IUserState>()(
  persist(
    (set, get) => ({
      pwd: "",
      mnemonicPhrase: [],
      setPwd: (newVal) =>
        set((state) => ({
          pwd: (state.pwd = newVal),
        })),
      setMnemonicPhrase: (newVal: string[]) =>
        set((state) => ({
          mnemonicPhrase: (state.mnemonicPhrase = newVal),
        })),
      generateMnemonicPhrase: () =>
        set((state) => ({
          mnemonicPhrase: (state.mnemonicPhrase = bip39
            .generateMnemonic()
            .split(" ")),
        })),
    }),
    {
      name: "setting",
      storage: createJSONStorage(() => sessionStorage), // default localstorage
    }
  )
);

export default useUserStore;
