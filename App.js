import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const listPeople = [
    {
      name: "ivan",
      id: 1,
    },
    {
      name: "nova",
      id: 2,
    },
    {
      name: "ardiansyah",
      id: 3,
    },
    {
      name: "irvan",
      id: 4,
    },
    {
      name: "evan",
      id: 5,
    },
    {
      name: "ervan",
      id: 6,
    },
    {
      name: "ervano",
      id: 7,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerNavbar}>
        <Text style={styles.textBold}>List of People:</Text>
      </View>
      <FlatList
        style={styles.scrollContainer}
        keyExtractor={(item) => item.id}
        data={listPeople}
        renderItem={({ item }) => (
          <Text style={styles.listText}>{item.name}</Text>
        )}
      />
      {/* <ScrollView style={styles.scrollContainer}>
        {listPeople.map((item) => (
          <View key={item.key} style={styles.listContainer}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  containerNavbar: {
    padding: 20,
    paddingTop: 40,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listText: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 30,
    marginTop: 20,
  },
});
