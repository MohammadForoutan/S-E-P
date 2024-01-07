import axios from "axios";
import { useUserStore } from "../../src/stores";

// const tokenInfo = JSON.parse(localStorage.getItem("loginToken") ?? "");
const access = useUserStore.getState().tokens.access;

export const httpClient = axios.create({
  baseURL: "http://gglink.ir",
  headers: {
    "Content-Type": "application/json",
    Authorization: access ? `Bearer ${access}` : null,
  },
});

function createAxiosResponseInterceptor() {
  const interceptor = axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // Reject promise if usual error
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response.
       *
       * Must be re-attached later on or the token refresh will only happen once
       */
      axios.interceptors.response.eject(interceptor);

      return axios
        .post("/api/refresh_token", {
          // Get token from state manager
          refresh_token: useUserStore.getState().tokens.refresh,
        })
        .then((response) => {
          // save token in state manager
          useUserStore.getState().setAccessToken(response.data.access);
          useUserStore.getState().setRefreshToken(response.data.refresh);
          //   saveToken();

          error.response.config.headers["Authorization"] =
            "Bearer " + response.data.access_token;
          // Retry the initial call, but with the updated token in the headers.
          // Resolves the promise if successful
          return axios(error.response.config);
        })
        .catch((error2) => {
          // Retry failed, clean up and reject the promise
          // destroyToken();
          // remove tokens from state manager
          useUserStore.getState().setAccessToken("");
          useUserStore.getState().setRefreshToken("");

          // this.router.push("/login");
          window.history.pushState({}, "", "/");
          return Promise.reject(error2);
        })
        .finally(createAxiosResponseInterceptor); // Re-attach the interceptor by running the method
    }
  );
}
createAxiosResponseInterceptor(); // Execute the method once during start
