import App from "./App";
import { name as appName } from "./app.json";
import { AuthProvider } from "./app/context/AuthContext";
import { AxiosProvider } from "./app/context/AxiosContext";
import { registerRootComponent } from "expo";
import React from "react";

const Root = () => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <App />
      </AxiosProvider>
    </AuthProvider>
  );
};
registerRootComponent(Root);
