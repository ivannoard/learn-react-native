import React, { useState } from "react";
import {
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Todo = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { key: 1, todo: "Sleep" },
    { key: 2, todo: "Coding" },
  ]);
  const [inputTodo, setInputTodo] = useState("");
  const handleChange = (todo) => {
    const randomId = Math.floor(Math.random() * 1000);
    setInputTodo({ key: randomId, todo: todo });
  };
  const handleSubmit = () => {
    setTodos([...todos, inputTodo]);
  };
  const handleDelete = (key) => {
    console.log(key);
    const filteredTodo = todos.filter((item) => item.key !== key);
    setTodos(filteredTodo);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.heading, { marginBottom: 10 }]}>Create Todo</Text>
        <TextInput
          style={styles.input}
          placeholder="create todo"
          onChangeText={(newText) => handleChange(newText)}
        />
        <Button
          title="Add Todo"
          onPress={handleSubmit}
          style={{ marginBottom: 20 }}
        />
        <Text style={[styles.heading, { marginBottom: 10 }]}>List Todo</Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard todoKey={item.key} todoItem={item.todo} />
          )}
        />
      </View>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </>
  );
};

const TodoCard = ({ todoItem, handleDelete, todoKey }) => {
  return (
    <View
      style={[
        styles.card,
        {
          shadowOffset: { height: 30, width: 30 },
          shadowOpacity: 1,
          shadowRadius: 10,
          marginVertical: 5,
        },
      ]}
    >
      <Text>{todoItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    border: "grey",
    marginBottom: 10,
  },
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
  },
});

export default Todo;
