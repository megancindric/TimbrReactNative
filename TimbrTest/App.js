import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "./app/context/AuthContext";
import * as SecureStore from "expo-secure-store";

import Kirby from "./app/Kirby";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import Dashboard from "./app/screens/Dashboard";
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
      <Stack.Navigator>
        {authContext?.authState?.authenticated === false ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Kirby" component={Kirby} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
