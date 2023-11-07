import { create } from 'zustand'
import { LANGS } from '../i18n/locales/type'
import { createJSONStorage, persist } from 'zustand/middleware'

type State = {
    lang: LANGS
}
type Action = {
    updateLang: (lang: State['lang']) => void;
}

export const useLangStore = create<Action & State>()(
    persist((set, get) => ({
        lang: LANGS.en_US,
        updateLang: (lang: LANGS) => set(() => ({ lang }))
    }),
        {
            name: "lang",
            storage: createJSONStorage(() => localStorage)
        }
    ))