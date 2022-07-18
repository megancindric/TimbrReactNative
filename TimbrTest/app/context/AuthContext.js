import React, { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    authenticated: false,
  });
  const logout = async () => {
    await SecureStore.setItemAsync("token", null);
    setAuthState({
      accessToken: null,
      authenticated: false,
    });
  };
  const getAccessToken = () => {
    return authState.accessToken;
  };
  return (
    <Provider value={{ authState, getAccessToken, setAuthState, logout }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
