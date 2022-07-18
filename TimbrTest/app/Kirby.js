import { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";

export default function Kirby({ navigation }) {
  console.log("App executed!");
  const [kirbCount, setKirbCount] = useState(0);
  const [propValue, setPropValue] = useState("");
  const displayAlert = () =>
    Alert.alert("Important Message", "booba", [
      { text: "Accept.", onPress: () => console.log("Accept.") },
      { text: "Perish.", onPress: () => console.log("Perish.") },
    ]);
  const displayPrompt = () =>
    Alert.prompt("Important Prompt", "Value to pass to props test", (text) =>
      setPropValue(text)
    );
  const incrementCount = () => setKirbCount(kirbCount + 1);

  return (
    // Passing an array of styles, each will overwrite the last, similar to multiple CSS styles
    <SafeAreaView style={[styles.container, containerStyle]}>
      <TextInput
        placeholder="Enter Prop Test Value"
        style={styles.textInput}
        value={propValue}
        onChangeText={setPropValue}
      />
      <Button color="orange" title="Enter Props Test" onPress={displayPrompt} />
      <TouchableOpacity onPress={incrementCount}>
        <Image source={require("./assets/kirbydance.gif")} />
      </TouchableOpacity>
      {/* Image from remote source
      <Image 
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}}/>*/}
      <View>
        <Text style={styles.countText}>
          You've pressed Kirby {kirbCount} times!
        </Text>
      </View>
      <Button
        color="orange"
        title="GO BACK!"
        onPress={() => navigation.goBack()}
      />
      <Button
        color="orange"
        title="Go to props test!"
        // Navigating to test component, providing props as second parameter object
        onPress={() =>
          navigation.navigate("PropsTest", {
            propValue: propValue,
          })
        }
      />
    </SafeAreaView>
  );
}

//Conventional to style in same file as component, below component fn.
const containerStyle = {
  backgroundColor: "teal",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //OS-specific styling - will change styling for Android device, based on height of StatusBar
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  countText: {
    color: "#FF00FF",
  },
  textInput: {
    padding: 10,
    backgroundColor: "orange",
  },
});
