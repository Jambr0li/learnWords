import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginForm</Text>
      <Text style={styles.subtitle}>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.subtitle}>Password</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    margin: 4,
    borderWidth: 1,
    height: 20,
    width: 200,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
  },
});
