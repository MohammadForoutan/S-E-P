import axios from "axios";
import { State, useUserStore } from "../../src/stores";
import { httpRefreshToken } from ".";
import { useNavigate } from "react-router-dom";

let tokens: any | undefined;
const createHttpClient = () => {
  const client = axios.create({
    baseURL: "https://gglink.ir",
  });

  client.interceptors.request.use((config) => {
    tokens = localStorage.getItem("user-store")
      ? (JSON.parse(localStorage.getItem("user-store") ?? "") as State)?.tokens
      : null;
    const access = useUserStore.getState().tokens.access;

    config.headers!["Authorization"] = access ? `Bearer ${access}` : null;
    return config;
  });

  const addRefreshTokenInterceptor = () => {
    const interceptorId = client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status !== 401) {
          console.log("[REJECT-401]");

          return Promise.reject(error);
        }
        client.interceptors.response.eject(interceptorId);

        try {
          const token = await httpRefreshToken();
          // save token
          useUserStore.getState().setRefreshToken(token.refresh);
          //   saveToken();
        } catch (error2) {
          useUserStore.getState().logout();
          useNavigate()("/");

          throw error2;
        } finally {
          addRefreshTokenInterceptor();
        }
      }
    );
  };
  addRefreshTokenInterceptor();
  return client;
};

export const httpClient = createHttpClient();
