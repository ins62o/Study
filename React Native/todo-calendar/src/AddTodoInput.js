import { TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH } from "./util";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AddTodoInput({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
}) {
  return (
    <View
      style={{
        width: ITEM_WIDTH,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ padding: 5, paddingBottom: 7, flex: 1, color: "595959" }}
      />

      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
