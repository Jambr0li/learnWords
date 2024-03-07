import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "../screens/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoggedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
