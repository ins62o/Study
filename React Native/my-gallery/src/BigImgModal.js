import { View, Modal, Pressable, Image, TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <SimpleLineIcons
        name={iconName}
        size={20}
        color={disabled ? "transparent" : "black"}
      />
    </TouchableOpacity>
  );
};

export default function BigImgeModal({
  modalVisible,
  onPressBackdrop,
  selectedImage,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgba(115,115,115,0.5)`,
        }}
        onPress={onPressBackdrop}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* < 화살표 */}
          <ArrowButton
            iconName={"arrow-left"}
            onPress={onPressLeftArrow}
            disabled={!showPreviousArrow}
          />

          {/* 이미지 */}
          <Pressable>
            <Image
              source={{ uri: selectedImage?.uri }}
              style={{ width: 280, height: 280, backgroundColor: "white" }}
              resizeMode="contain"
            />
          </Pressable>

          {/* < 화살표 */}
          <ArrowButton
            iconName={"arrow-right"}
            onPress={onPressRightArrow}
            disabled={!showNextArrow}
          />
        </View>
      </Pressable>
    </Modal>
  );
}
