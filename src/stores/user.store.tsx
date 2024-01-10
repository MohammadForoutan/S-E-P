import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

export type State = {
  isAuthenticated: boolean;
  username: string | null;
  email: string | null;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};
type Action = {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  updateUser: (user: State) => void;
  setIsAuthenticated: (isAuth: boolean) => void;
  logout: () => void;
  login: ({ access, refresh }: { access: string; refresh: string }) => void;
};

type UserStore = Action & State;

type MyPersist = (
  config: StateCreator<UserStore>,
  options: PersistOptions<UserStore>
) => StateCreator<UserStore>;

export const useUserStore = create<UserStore, []>(
  (persist as MyPersist)(
    (set, _get): UserStore => ({
      isAuthenticated: false,
      username: null,
      email: null,
      tokens: {
        access: null,
        refresh: null,
      },
      setIsAuthenticated: (isAuth: boolean) => {
        set((state) => ({ ...state, isAuthenticated: isAuth }));
      },
      setAccessToken: (access: string) => {
        set((state) => ({ ...state, tokens: { ...state.tokens, access } }));
      },
      setRefreshToken: (refresh: string) => {
        set((state) => ({ ...state, tokens: { ...state.tokens, refresh } }));
      },
      updateUser: (user: State) => {
        set((state) => ({ ...state, ...user }));
      },
      logout: () => {
        set((state) => ({
          ...state,
          isAuthenticated: false,
          tokens: { access: "", refresh: "" },
        }));
      },
      login: ({ access, refresh }) => {
        set((state) => ({
          ...state,
          isAuthenticated: true,
          tokens: { ...state.tokens, access, refresh },
        }));
      },
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
