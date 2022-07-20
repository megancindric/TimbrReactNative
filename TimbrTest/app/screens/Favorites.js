import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AxiosContext } from "../context/AxiosContext";
import { AuthContext } from "../context/AuthContext";

import colors from "../config/colors.js";

export default function Favorites({ navigation }) {
  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(AxiosContext);
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      const response = await authAxios.get("auth/userinfo/");
      if (response.status === 200) {
        console.log("getFavorites Successful!");
        console.log(response.data);
        setTrees(response.data.favorites);
      }
    } catch (error) {
      console.log(`getFavorites Error: ${error}`);
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/favorites.jpg")}
    >
      <View style={styles.buttonContainer}></View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Favorites</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
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
