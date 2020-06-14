import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons"

const format = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

const MiniLabel = (props) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
    <View style={{ marginRight: 3 }}>{props.icon}</View>
    <Text style={{ fontSize: 10 }}>{props.label}</Text>
  </View>
)

const House = (props) => {
  return (
    <View>
      <View>
        <Image
          source={{ uri: props.image }}
          style={{ height: 215, width: "100%" }}
        />
        {props.underContract && (
          <View
            style={{
              backgroundColor: "gray",
              alignItems: "center",
              paddingVertical: 3,
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Under Contract
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{ position: "absolute", right: 0, padding: 10 }}
        >
          <AntDesign
            name={props.favorite ? "heart" : "hearto"}
            size={30}
            color={props.favorite ? "hotpink" : "gray"}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20, paddingVertical: 7 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>
            ${format(props.price)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <MiniLabel
              icon={<Ionicons name="ios-bed" color="darkgray" size={17} />}
              label={props.beds}
            />
            <MiniLabel
              icon={<FontAwesome name="bath" color="darkgray" size={17} />}
              label={props.baths}
            />
            <MiniLabel
              icon={
                <MaterialCommunityIcons
                  name="ruler-square"
                  color="darkgray"
                  size={17}
                />
              }
              label={props.sqft}
            />
          </View>
        </View>
        <Text>{props.address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default House
