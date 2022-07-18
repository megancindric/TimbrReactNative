import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors.js";

export default function PropsTest({ route, navigation }) {
  //Getting the passed-in param
  const { propValue } = route.params;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/unsplashforest.jpg")}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          The passed-in prop is: {JSON.stringify(propValue)}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  text: {
    color: colors.primary,
    fontSize: 40,
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
  textContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});
