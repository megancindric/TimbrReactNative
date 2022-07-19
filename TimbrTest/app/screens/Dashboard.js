import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import colors from "../config/colors.js";

export default function Dashboard({ navigation }) {
  const authContext = useContext(AuthContext);

  const onPress = () => {};
  const logout = async () => {
    console.log("Logged Out!");
    await authContext.logout();
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/dashboard.jpg")}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Dashboard</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, //Image will fill entire screen
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    position: "absolute",
    top: 75,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.primary,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logoText: {
    color: colors.secondary,
    fontSize: 60,
    top: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
});
