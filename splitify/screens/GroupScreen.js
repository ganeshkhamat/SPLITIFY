import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const sampleExpenses = [
  {
    id: "e1",
    description: "Dinner at Ritz",
    amount: 1500,
    paidBy: "You",
    split: "₹500 each",
    date: "May 30",
  },
  {
    id: "e2",
    description: "Uber to airport",
    amount: 900,
    paidBy: "Amit",
    split: "₹300 each",
    date: "May 29",
  },
];

export default function GroupScreen({ navigation, route }) {
  const { groupId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group: {groupId}</Text>
      <FlatList
        data={sampleExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseCard}>
            <Text style={styles.desc}>{item.description}</Text>
            <Text>Paid by: {item.paidBy}</Text>
            <Text>Split: {item.split}</Text>
            <Text>Date: {item.date}</Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </View>
        )}
      />
      <View style={styles.addButton}>
        <Button
          title="+ Add Expense"
          onPress={() => navigation.navigate("AddExpense", { groupId })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  expenseCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  desc: { fontSize: 18, fontWeight: "bold" },
  amount: { marginTop: 5, fontWeight: "bold", color: "green" },
  addButton: { marginTop: 20 },
});
