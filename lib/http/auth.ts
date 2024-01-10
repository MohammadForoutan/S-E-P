import { RegisterData } from "..";
import { useUserStore } from "../../src/stores";
import { httpClient } from "./base";

export type RegisterResponse = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

export const httpRegister = (data: RegisterData) => {
  return httpClient.post("/accounts/register/", data);
};

export type LoginResponse = {
  access: string;
  refresh: string;
};

export const httpLogin = (data: RegisterData) => {
  return httpClient.post("/accounts/login/", data);
};

export type RefreshResponse = {
  access: string;
};
export const httpRefreshToken = () => {
  const refresh = useUserStore.getState().tokens.refresh;
  return httpClient.post("/accounts/token/refresh", { refresh });
};
