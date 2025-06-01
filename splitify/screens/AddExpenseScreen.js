import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddExpenseScreen({ route, navigation }) {
  const { groupId } = route.params;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const handleAddExpense = () => {
    if (!description || !amount || !paidBy) {
      Alert.alert("Please fill all fields");
      return;
    }

    // In a real app, you'd call backend API here
    Alert.alert("Expense Added", `${description} - ₹${amount}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense to Group {groupId}</Text>

      <TextInput
        placeholder="Description (e.g. Lunch)"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        placeholder="Paid by (e.g. You, Rahul)"
        style={styles.input}
        value={paidBy}
        onChangeText={setPaidBy}
      />

      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
});
