import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/login_form";
import LoginButton from "../components/buttons/login_button";
const LoginScreen = () => {
  return (
    <View>
      <LoginForm />
      <LoginButton />
    </View>
  );
};

export default LoginScreen;
