import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator()

import Home from "../screens/Home"
import Filter from "../screens/Filter"

const StackNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#58dbc2" },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerTitle: "" }} />
      <Screen
        name="Filter"
        component={Filter}
        options={{ headerTitle: "Search Settings" }}
      />
    </Navigator>
  )
}

export default StackNavigation
