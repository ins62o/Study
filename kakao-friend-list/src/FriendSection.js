import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function FriendSection(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>
      <TouchableOpacity>
        <MaterialIcons
          name={`keyboard-arrow-${props.isOpened ? "down" : "up"}`}
          size={24}
          color="lightgray"
          onPress={props.onPressArrow}
        />
      </TouchableOpacity>
    </View>
  );
}
