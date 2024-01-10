import axios from "axios";
import { State, useLangStore, useUserStore } from "../../src/stores";
import { httpRefreshToken } from ".";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LANGS } from "../../src/i18n/locales/type";

const createHttpClient = () => {
  const client = axios.create({
    baseURL: "https://gglink.ir",
  });

  client.interceptors.request.use((config) => {
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

          if (error?.response?.status === 403) {
            console.log("[FORBIDDEN-403]");
            const lang = useLangStore.getState().lang;
            toast.error(
              lang === LANGS.en_US ? "Forbidden Action" : "دسترسی غیرمجاز"
            );
            useUserStore.getState().logout();
            setTimeout(() => (window.location.href = "/"), 4000);
            return;
          }
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
          window.location.href = "/auth/login";

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
