import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  inputContainer: {
    paddingTop: 20,
  },
});
