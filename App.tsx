import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./text_input";
import WordDetails from "./word_details";

export default function App() {
  const [wordData, setWordData] = useState(null);

  // Gets word data from API

  const handleWordSubmit = async (word: { word: string }) => {
    console.log(`Here is what we are sending to the API: ${word}`);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setWordData(data);
      console.log(wordData);
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.learn}>Learn New Words!</Text>
        <Input onSubmit={handleWordSubmit} />
        <Button />
        {wordData && <WordDetails data={wordData} />}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  learn: {
    fontSize: 40,
  },
  container: {
    marginTop: "50%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
