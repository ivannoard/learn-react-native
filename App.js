import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("ivan");
  const [age, setAge] = useState("21");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My name is {name}</Text>
      <Text style={styles.heading}>My age is {age}</Text>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g John Doe"
        onChangeText={(val) => setAge(val)}
      />
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
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    width: 200,
  },
});
