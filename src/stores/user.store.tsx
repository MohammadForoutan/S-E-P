import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

export type Role = "user" | "admin";
export type State = {
  firstName?: string | null;
  lastName?: string | null;
  isAuthenticated: boolean;
  username: string | null;
  email: string | null;
  role?: Role;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};
type Action = {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setIsAuthenticated: (isAuth: boolean) => void;
  setRole: (role: Role) => void;
  setUsername: (username: string) => void;
  setFullName: (firstName: string, lastName: string) => void;
  updateUser: (user: State) => void;
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
      setUsername: (username: string) => {
        set((state) => ({ ...state, username }));
      },
      setFullName: (firstName: string, lastName: string) => {
        set((state) => ({ ...state, firstName, lastName }));
      },
      setRole: (role: Role) => {
        set((state) => ({ ...state, role }));
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
