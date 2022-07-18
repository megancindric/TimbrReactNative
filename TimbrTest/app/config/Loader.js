import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import colors from "./colors";

const Loader = () => (
  <View>
    <ActivityIndicator size="large" color={colors.secondary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
