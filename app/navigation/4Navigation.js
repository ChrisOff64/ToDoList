import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@ecrans/Home";
import ToDoCreate from "@ecrans/ToDoCreate";

export default function Navigation() {
  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="ToDoCreate" component={ToDoCreate} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
