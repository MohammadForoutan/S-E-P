import { StateCreator, create } from "zustand";
import { LANGS } from "../i18n/locales/type";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

type State = {
  lang: LANGS;
};
type Action = {
  updateLang: (lang: State["lang"]) => void;
};

type LangState = Action & State;

type MyPersist = (
  config: StateCreator<LangState>,
  options: PersistOptions<LangState>
) => StateCreator<LangState>;

export const useLangStore = create<LangState>(
  (persist as MyPersist)(
    (set, _) => ({
      lang: LANGS.en_US,
      updateLang: (lang: LANGS) => set(() => ({ lang })),
    }),
    {
      name: "lang",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
