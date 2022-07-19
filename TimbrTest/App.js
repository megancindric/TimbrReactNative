import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./app/context/AuthContext";
import * as SecureStore from "expo-secure-store";
import { AppStack, AuthStack } from "./app/stacks/stacks";

import Loader from "./app/config/Loader";

const Stack = createNativeStackNavigator();
export default function App() {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState("loading");

  const loadJWT = useCallback(async () => {
    try {
      const jwtToken = await SecureStore.getItemAsync("token");
      // console.log(value)
      // const jwt = JSON.parse(value.password);
      authContext.setAuthState({
        accessToken: jwtToken,
        authenticated: jwtToken !== null,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.log(`Encountered SecureStore Error: ${error.message}`);
      authContext.setAuthState({
        accessToken: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {authContext?.authState?.authenticated === false ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
