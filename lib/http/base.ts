import axios from "axios";
import { useUserStore } from "../../src/stores";
const createHttpClient = () => {
  const client = axios.create({
    baseURL: "http://gglink.ir:8080",
  });

  client.interceptors.request.use((config) => {
    const access = useUserStore.getState().tokens.access;

    config.headers!["Authorization"] = access ? `Bearer ${access}` : null;
    return config;
  });

  return client;
};

export const httpClient = createHttpClient();
