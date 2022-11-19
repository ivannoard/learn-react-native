import React from "react";
import { Button, Text, View, StyleSheet, FlatList } from "react-native";

const Home = ({ navigation }) => {
  const step = [
    { key: 1, data: "Membuat Navigation di App.js (routing)" },
    { key: 2, data: "Melakukan Instace terhadap Stack" },
    {
      key: 3,
      data: "Terdapat 2 jenis Stack yaitu StackScreen dan StackNavigator",
    },
    { key: 4, data: "Pemberian nama terhadap Routing" },
    { key: 5, data: "Membuat halaman" },
    { key: 6, data: "Happy Coding" },
  ];
  return (
    <>
      <View style={[style.container, { flexDirection: "column" }]}>
        <Text>
          Ini adalah aplikasi pertama React Native pembuatan Todolist dengan
          menggunakan dua screen yaitu HomeScreen dan TodoScreen
        </Text>
        <Text style={{ marginTop: 10 }}>Langkah-Langkah:</Text>
        <FlatList
          data={step}
          renderItem={({ item }) => (
            <Text style={{ paddingVertical: 10 }}>
              {item.key}. {item.data}
            </Text>
          )}
        />
      </View>
      <Button
        title=" Go to Todo Screen"
        onPress={() => navigation.navigate("Todo")}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});

export default Home;
