import axios from "axios";

const tokenInfo = JSON.parse(localStorage.getItem('loginToken') ?? "")

export const httpClient = axios.create({
  baseURL: "http://gglink.ir",
  headers: {
    "Content-Type": "application/json",
    Authorization: tokenInfo ? `Bearer ${tokenInfo.token}` : null,
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
                  refresh_token: this._getToken("refresh_token"),
              })
              .then((response) => {

                  saveToken();
                  error.response.config.headers["Authorization"] =
                      "Bearer " + response.data.access_token;
                  // Retry the initial call, but with the updated token in the headers. 
                  // Resolves the promise if successful
                  return axios(error.response.config);
              })
              .catch((error2) => {
                  // Retry failed, clean up and reject the promise
                  destroyToken();
                  this.router.push("/login");
                  return Promise.reject(error2);
              })
              .finally(createAxiosResponseInterceptor); // Re-attach the interceptor by running the method
      }
  );
}
createAxiosResponseInterceptor(); // Execute the method once during start

