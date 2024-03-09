import { StyleSheet, View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Input from "../components/text_input";
import WordDetails from "../components/word_details";
import React, { useState } from "react";

const HomeScreen = () => {
  const [wordData, setWordData] = useState(null);

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
        {wordData && <WordDetails data={wordData} />}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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
