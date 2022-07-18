import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from "react-native";
import React, { useContext, useState } from "react";
import { FormData } from "../config/FormData";
import FormField from "../config/FormField";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { AxiosContext } from "../context/AxiosContext";

export default function Register() {
  const [formValues, handleFormValueChange, setFormValues] = FormData({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);
  const testRegister = async () => {
    try {
      const response = await publicAxios.post("auth/register/", formValues);
      if (response.status === 201) {
        console.log("Registration Successful!  Try logging in!");
      }
    } catch (error) {
      console.log(`Registration Failure: ${error}`);
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/loginregister.jpg")}
    >
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Registration Test</Text>
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
        <FormField
          label="Email"
          formKey="email"
          placeholder="Email Address"
          handleFormValueChange={handleFormValueChange}
        ></FormField>
        <FormField
          label="First Name"
          formKey="first_name"
          placeholder="First Name"
          handleFormValueChange={handleFormValueChange}
        ></FormField>
        <FormField
          label="Last Name"
          formKey="last_name"
          placeholder="Last Name"
          handleFormValueChange={handleFormValueChange}
        ></FormField>
        <Button title="Register" onPress={testRegister}></Button>
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
    paddingBottom: 30,
  },
});
