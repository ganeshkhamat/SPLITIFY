import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const sampleGroups = [
  { id: "1", name: "Goa Trip", balance: "You are owed ₹1,200" },
  { id: "2", name: "Roommates", balance: "You owe ₹700" },
];

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Groups</Text>
      <FlatList
        data={sampleGroups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.groupName}>{item.name}</Text>
            <Text style={styles.balance}>{item.balance}</Text>
            <Button title="View" onPress={() => navigation.navigate("Group", { groupId: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, marginBottom: 20 },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  groupName: { fontSize: 18, fontWeight: "bold" },
  balance: { marginVertical: 5 },
});
