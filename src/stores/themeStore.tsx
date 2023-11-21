import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export enum SCHEME {
  dark = "dark",
  light = "light",
}
type State = {
  scheme: SCHEME;
};
type Action = {
  updateScheme: (scheme: State["scheme"]) => void;
};

export const useSchemeStore = create<Action & State>()(
  persist(
    (set, _) => ({
      scheme: SCHEME.dark,
      updateScheme: (scheme: SCHEME) => set(() => ({ scheme })),
    }),
    {
      name: "scheme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
