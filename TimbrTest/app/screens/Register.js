import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { FormData } from "../config/FormData";
import FormField from "../config/FormField";
export default function Register() {
  const [formValues, handleFormValueChange, setFormValues] = FormData({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const testRegister = () => {
    console.log(formValues);
  };

  return (
    <SafeAreaView>
      <View>
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
