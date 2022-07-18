import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { FormData } from "../config/FormData";
import FormField from "../config/FormField";
import * as SecureStore from "expo-secure-store";
import { AxiosContext } from "../context/AxiosContext";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formValues, handleFormValueChange, setFormValues] = FormData({
    username: "",
    password: "",
  });
  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);
  const loginUser = async () => {
    try {
      const response = await publicAxios.post("auth/login/", formValues);
      if (response.status === 201) {
        console.log("Login Successful!");
        await SecureStore.setItemAsync("token", response.data.access);
        setAuthState({
          accessToken: response.data.access,
          authenticated: true,
        });
      }
    } catch (error) {
      console.log(`Login Error: ${error}`);
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/loginregister.jpg")}
    >
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Login Test</Text>

        <FormField
          label="Username"
          formKey="username"
          placeholder="Username"
          handleFormValueChange={handleFormValueChange}
        ></FormField>
        <FormField
          label="Password"
          formKey="password"
          placeholder="Password"
          textInputProps={{
            secureTextEntry: true,
          }}
          handleFormValueChange={handleFormValueChange}
        ></FormField>
        <Button title="Login" onPress={loginUser}></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, //Image will fill entire screen
    alignItems: "center",
  },
  container: {
    display: "flex",
    margin: 20,
  },
  formContainer: {
    backgroundColor: "white",
    opacity: 0.55,
    padding: 25,
  },
  formText: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 0,
  },
  header: {
    fontSize: 20,
    paddingTop: 30,
  },
  titleText: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "300",
  },
});
