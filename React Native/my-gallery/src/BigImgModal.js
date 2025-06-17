import { View, Modal, Pressable, Image } from "react-native";

export default function BigImgeModal({
  modalVisible,
  onPressBackdrop,
  selectedImage,
}) {
  console.log("selectedImage", selectedImage);

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
        <Pressable>
          <Image
            source={{ uri: selectedImage?.uri }}
            style={{ width: 280, height: 280, backgroundColor: "white" }}
            resizeMode="contain"
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
