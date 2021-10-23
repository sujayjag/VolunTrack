import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/screens/Home.js";
import Login from "../app/screens/Login.js";
import signUp from "../app/screens/signUp.js";
import Dashboard from "../app/screens/Dashboard.js";
import EventForm from "../app/screens/EventForm.js";
import Profile from "../app/screens/Profile.js";
import Success from "../app/screens/Success.js";
import QRCode from "../app/screens/QRCode.js";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={signUp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EventForm" component={EventForm} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="QRCode" component={QRCode} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };