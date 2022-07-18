import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";

import colors from "../config/colors.js";

export default function WelcomeScreen({ navigation }) {
  const displayLogin = () =>
    Alert.alert("LOGIN", "Log in to existing account", [
      { text: "Accept", onPress: () => console.log("Accept clicked!") },
      { text: "Perish.", onPress: () => console.log("Perish clicked") },
    ]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/unsplashforest.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/kirbydance.gif")}
        ></Image>
        <Text style={styles.logoText}>Timbr</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText.secondary}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText.primary}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, //Image will fill entire screen
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    primary: {
      color: colors.primary,

      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "Helvetica",
      textAlign: "center",
    },
    secondary: {
      color: colors.secondary,

      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "Helvetica",
      textAlign: "center",
    },
  },
  loginButton: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logoText: {
    color: colors.accent,
    fontSize: 60,
    top: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    textShadowColor: colors.black,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 10,
  },
  registerButton: {
    width: "100%",
    justifyContent: "center",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
