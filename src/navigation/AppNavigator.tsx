import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeScreen";
import LoginScreen from "../screens/loginScreen";
import LoggedOutStack from "../stacks/LoggedInStack";
import LoggedInStack from "../stacks/LoggedInStack";

const Stack = createStackNavigator();

const AppNavigator = (/*{ user }*/) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user ? "LoggedInStack" : "LoggedOutStack"}
        initialRouteName="LoggedInStack"
        screenOptions={{ gestureEnabled: true, gestureDirection: "horizontal" }}
      >
        {/* {user ? ( */}
        {/* <Stack.Screen name="LoggedInStack" component={LoggedInStack} /> */}
        {/* ) : ( */}
        {/* <Stack.Screen name="LoggedOutStack" component={LoggedOutStack} /> */}
        {/* )} */}
        <Stack.Screen name="LoggedInStack" component={LoggedInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
