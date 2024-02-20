import React, { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";

export default function Input({ onSubmit }: { onSubmit: any }) {
  const [text, setText] = useState("");

  const handleTextChange = (input: React.SetStateAction<string>) => {
    setText(input);
  };

  const handleTextSubmit = () => {
    onSubmit(text);
    console.log(text);
  };

  return (
    <TextInput
      value={text}
      style={styles.input}
      placeholder="Type a word here"
      onChangeText={handleTextChange}
      onSubmitEditing={handleTextSubmit}
    ></TextInput>
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
