import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import colors from "../config/colors.js";

export default function Dashboard({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/dashboard.jpg")}
    >
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
