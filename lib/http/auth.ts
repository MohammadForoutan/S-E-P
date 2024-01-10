import { RegisterData } from "..";
import { useUserStore } from "../../src/stores";
import { httpClient } from "./base";

export const httpRegister = (data: RegisterData) => {
  return httpClient.post("/accounts/register/", data);
};

export const httpLogin = (data: RegisterData) => {
  return httpClient.post("/accounts/login/", data);
};

export const httpRefreshToken = () => {
  const refresh = useUserStore.getState().tokens.refresh;
  return httpClient.post("/accounts/token/refresh", { refresh });
};
