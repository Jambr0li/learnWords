import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../screens/homeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default LoggedInStack;
