import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
// import { firebase } from "@react-native-firebase/auth";

export default function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState(null);

  // function onAuthStateChanged(result: any) {
  // setUser(result);
  // if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  // const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

  // return subscriber;
  // }, []);

  // if (initializing) return null;

  return <AppNavigator /* user={user as any} */ />;
}
