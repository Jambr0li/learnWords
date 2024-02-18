import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./text_input";
import WordDetails from "./word_display";

export default function App() {
  const [wordData, setWordData] = useState(null);

  // Need to create a function that is called when text is submitted that calls the useEffect() function to display the word
  const word = "super"; // This word should be set from the inputted text

  // Gets word data from API
  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.learn}>Learn New Words!</Text>
        <Input />
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
