import React, { useEffect } from "react"
import { StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { SimpleLineIcons } from "@expo/vector-icons"

import House from "../components/House"

import houses from "../models/house"

const Home = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <SimpleLineIcons
            name="menu"
            color="white"
            size={21}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <SimpleLineIcons
            name="equalizer"
            color="white"
            size={20}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <FlatList
      data={houses}
      renderItem={({ item }) => <House {...item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}

const styles = StyleSheet.create({})

export default Home
