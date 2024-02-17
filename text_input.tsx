import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

export default function Input() {
  return (
    <TextInput style={styles.input} placeholder="Type a word here"></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    height: 30,
    width: 200,
    borderRadius: 5,
  },
});
