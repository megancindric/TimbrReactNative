import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
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
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Login Test</Text>
      </View>
      <View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 20,
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
    fontSize: 24,
    textAlign: "center",
    fontWeight: "300",
    paddingBottom: 30,
  },
});
