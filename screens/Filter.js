import React, { useEffect } from "react"
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Slider,
} from "react-native"

const Label = (props) => (
  <View
    style={{
      backgroundColor: "#e1e1e1",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingTop: 20,
      paddingBottom: 3,
    }}
  >
    <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
    <Text>{props.subtitle}</Text>
  </View>
)

const SwitchRow = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 5,
    }}
  >
    <Text>{props.title}</Text>
    <Switch value={true} trackColor={{ true: "#58dbc2" }} />
  </View>
)

const MSlider = (props) => (
  <Slider style={{ marginHorizontal: 15 }} minimumTrackTintColor="#58dbc2" />
)

const Filter = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ paddingLeft: 15 }}
        >
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ paddingRight: 15 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Apply</Text>
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <ScrollView>
      <Label title="Availability" />
      <SwitchRow title="For Sale" />
      <SwitchRow title="Under Contract" />
      <Label title="Bedrooms" subtitle="1 - 3" />
      <MSlider />
      <Label title="Bathrooms" subtitle="1 - 3" />
      <MSlider />
      <Label title="Price" subtitle="Any - Any" />
      <MSlider />
      <Label title="Square Feet" subtitle="0 sq ft - 5,000+ sq ft" />
      <MSlider />
      <Label title="Lot Size" subtitle="Any - Any" />
      <MSlider />
      <Label title="Year Built" subtitle="Any - Any" />
      <MSlider />
      <Label title="HOA" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default Filter
