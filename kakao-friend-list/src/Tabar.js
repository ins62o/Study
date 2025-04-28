import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomSpace = getBottomSpace();

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
      onPress={onPress}
    >
      {isIconFontisto && (
        <Fontisto
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

export default function Tabar({ selectedTabIdx, setSelectedTabIdx }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingBottom: bottomSpace,
        borderTopWidth: 0.5,
        borderTopColor: "grey",
      }}
    >
      <TabButton
        isOtherBgColor
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName={"accessibility"}
        inactiveIconName={"accessibility-outline"}
        isIconIonicons
      />

      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />

      <TabButton
        isOtherBgColor
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />

      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  );
}
