import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  // Add other screens here
};
type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const LoginButton = () => {
  const navigation: NavigationProp = useNavigation();
  const goToHomePage = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={goToHomePage}>
        <Text>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginButton;
