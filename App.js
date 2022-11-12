import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const listPeople = [
    {
      name: "ivan",
      key: 1,
    },
    {
      name: "nova",
      key: 2,
    },
    {
      name: "ardiansyah",
      key: 3,
    },
    {
      name: "irvan",
      key: 4,
    },
    {
      name: "evan",
      key: 5,
    },
    {
      name: "ervan",
      key: 6,
    },
    {
      name: "ervano",
      key: 7,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerNavbar}>
        <Text style={styles.textBold}>List of People:</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {listPeople.map((item) => (
          <View key={item.key} style={styles.listContainer}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listContainer: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 30,
    marginTop: 20,
  },
  listText: {
    fontWeight: "bold",
    color: "white",
  },
});
