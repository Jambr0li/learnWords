import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/login_form";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  // Add other screens here
};
type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const LoginScreen = () => {
  const navigation: NavigationProp = useNavigation();
  const goToHomePage = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <LoginForm />
      <TouchableOpacity onPress={goToHomePage}>
        <Text>Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
