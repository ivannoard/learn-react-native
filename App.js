import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("ivan");
  function handleClick() {
    setName("Ardiansyah");
  }
  return (
    <View style={styles.container}>
      <View style={styles.bgPink}>
        <Text style={styles.textBold}>Hello Word</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.textCenter}>My name is {name}</Text>
        <View style={styles.buttonStyle}>
          <Button title="Update My Name!" onPress={handleClick} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  bgPink: {
    backgroundColor: "pink",
    padding: 20,
  },
  secondContainer: {
    marginTop: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 10,
  },
});
