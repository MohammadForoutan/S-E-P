import { RegisterData } from "..";
import { httpClient } from "./base";

const httpRegister = (data: RegisterData) => {
  return httpClient.post("/auth/register", { data });
};

const httpLogin = (data: RegisterData) => {
  return httpClient.post("/auth/login", { data });
};
