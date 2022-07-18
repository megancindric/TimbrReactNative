import React, { createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import * as SecureStore from "expo-secure-store";

const AxiosContext = createContext();
const { Provider } = AxiosContext;

const AxiosProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: "http://192.168.1.74:8000/api/",
  });

  const publicAxios = axios.create({
    baseURL: "http://192.168.1.74:8000/api/",
  });

  authAxios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //   const refreshAuthLogic = (failedRequest) => {
  //     const data = {
  //       refreshToken: authContext.authState.refreshToken,
  //     };
  //     const options = {
  //       method: "POST",
  //       data,
  //       url: "http://127.0.0.1:8000/api/auth/login/refresh/",
  //     };
  //     return axios(options)
  //       .then(async (tokenRefreshResponse) => {
  //         failedRequest.response.config.headers.Authorization =
  //           "Bearer " + tokenRefreshResponse.data.accessToken;

  //         authContext.setAuthState({
  //           ...authContext.authState,
  //           accessToken: tokenRefreshResponse.data.accessToken,
  //         });
  //         await SecureStore.setItemAsync(
  //           "token",
  //           JSON.stringify({
  //             accessToken: tokenRefreshResponse.data.accessToken,
  //             refreshToken: authContext.authState.refreshToken,
  //           })
  //         );
  //         return Promise.resolve();
  //       })
  //       .catch((e) => {
  //         authContext.setAuthState({
  //           accessToken: null,
  //           refreshToken: null,
  //         });
  //       });
  //   };
  //   createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});
  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { AxiosContext, AxiosProvider };
