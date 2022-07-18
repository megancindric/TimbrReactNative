import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { FormData } from "../config/FormData";
import FormField from "../config/FormField";

export default function Login() {
  const [formValues, handleFormValueChange, setFormValues] = FormData({
    username: "",
    password: "",
  });
  const testLogin = () => {
    console.log(formValues);
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
        <Button title="Login" onPress={testLogin}></Button>
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
