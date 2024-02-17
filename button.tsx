import React from "react";
import { StyleSheet, Button, Pressable, Text } from "react-native";

export default function button() {
  return (
    <Pressable
      onPress={() => {
        console.log("Pressed!");
      }}
    >
      <Text style={styles.blue}>Uhuh Uhuh Uhuh</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  blue: {
    padding: 10,
    backgroundColor: "#4ee8ed",
    color: "blue",
  },
});
