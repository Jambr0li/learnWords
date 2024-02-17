import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function WordDetails({ data }: { data: any }) {
  console.log(data);
  return (
    <View>
      <Text>{data[0].word}</Text>
      {data[0].meanings.map(
        (def: { definitions: any[]; partOfSpeech: any }, index: number) => (
          <View key={index}>
            <Text>
              ((({index + 1}))) Part of Speech: {def.partOfSpeech}
            </Text>
            {/* <Text>{def.partOfSpeech}</Text> */}
            {def.definitions.map((defs: { definition: any }, i: number) => (
              <>
                <Text>{defs.definition}</Text>
                <Text>---- Here is definition {i + 1}! ----</Text>
              </>
            ))}
          </View>
        )
      )}
      {/* <Text>{data[0].meanings[0].definitions[0].definition}</Text> */}
    </View>
  );
}
