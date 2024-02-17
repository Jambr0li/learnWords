import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./text_input";
import WordDetails from "./word_display";

export default function App() {
  const [wordData, setWordData] = useState(null);

  // Gets word data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/read"
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
        <Text>Learn New Words!</Text>
        <Input />
        <Button />
        {wordData && <WordDetails data={wordData} />}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
