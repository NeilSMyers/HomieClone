import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer"
import { SimpleLineIcons } from "@expo/vector-icons"

import Home from "../screens/Home"
import Favorites from "../screens/Favorites"

const { Navigator, Screen } = createDrawerNavigator()

const DrawerItem = (props) => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate(props.destination)}
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 15,
      paddingLeft: 10,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#f1f1f1",
    }}
  >
    <SimpleLineIcons
      name={props.icon}
      color="#58dbc2"
      size={30}
      style={{ marginRight: 15 }}
    />
    <Text style={{ fontSize: 16 }}>{props.title}</Text>
  </TouchableOpacity>
)

const DrawerSectionLabel = (props) => (
  <View
    style={{
      backgroundColor: "#f1f1f1",
      height: 50,
      justifyContent: "flex-end",
    }}
  >
    <Text style={{ fontSize: 12, margin: 10 }}>{props.title}</Text>
  </View>
)

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerSectionLabel title="ACCOUNT" />
      <DrawerItem
        title="Your Favorites"
        icon="heart"
        destination="Favorites"
        {...props}
      />
      <DrawerItem title="Your Saved Searches" icon="magnifier" />
      <DrawerItem title="Your Tours" icon="eyeglass" />
      <DrawerItem title="Your Offers" icon="mustache" />
      <DrawerItem title="Your Buying Guide" icon="compass" />
      <DrawerSectionLabel title="BUY" />
      <DrawerItem title="Find a home" icon="magnifier" />
      <DrawerItem title="Tour a home" icon="eyeglass" />
      <DrawerItem title="Buy a home" icon="basket" />
      <DrawerSectionLabel title="SELL" />
      <DrawerItem title="List your home" icon="direction" />
      <DrawerSectionLabel title="ABOUT" />
      <DrawerItem title="Story" icon="book-open" />
      <DrawerItem title="FAQs" icon="exclamation" />
      <DrawerSectionLabel title="FEEDBACK" />
      <DrawerItem title="Make a suggestion" icon="bulb" />
      <DrawerItem title="Report an issue" icon="eye" />
      <DrawerSectionLabel />
      <DrawerItem title="Log Out" icon="logout" />
      <DrawerSectionLabel />
    </DrawerContentScrollView>
  )
}

const DrawerNavigation = () => {
  return (
    <Navigator
      drawerType="slide"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  )
}

export default DrawerNavigation
