import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

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

type SchemaState = State & Action;

type MyPersist = (
  config: StateCreator<SchemaState>,
  options: PersistOptions<SchemaState>
) => StateCreator<SchemaState>;

export const useSchemeStore = create<SchemaState>(
  (persist as MyPersist)(
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
