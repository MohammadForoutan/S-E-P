import { RegisterData } from "..";
import { httpClient } from "./base";

export const httpRegister = (data: RegisterData) => {
  return httpClient.post("/accounts/register/",  data );
};

export const httpLogin = (data: RegisterData) => {
  return httpClient.post("/accounts/login/",  data );
};
