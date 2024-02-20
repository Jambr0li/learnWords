import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function WordDetails({ data }: { data: any }) {
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{capitalizeFirstLetter(data[0].word)}</Text>
      {data[0].meanings.map(
        (def: { definitions: any[]; partOfSpeech: any }, index: number) => (
          <View key={index}>
            <Text style={styles.part_of_speech}>
              Part of Speech: {def.partOfSpeech}
            </Text>
            {def.definitions.map((defs: { definition: any }, i: number) => (
              <Text key={`${index}_${i}`} style={styles.definition}>
                {i + 1} - {defs.definition}
              </Text>
            ))}
          </View>
        )
      )}
    </View>
  );
}

function capitalizeFirstLetter(word: { charAt: any; slice: any }) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const styles = StyleSheet.create({
  word: {
    fontSize: 40,
    paddingBottom: 12,
  },
  part_of_speech: {
    fontSize: 28,
    paddingBottom: 8,
  },
  definition: {
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  container: {
    margin: 8,
    marginBottom: 20,
  },
});
