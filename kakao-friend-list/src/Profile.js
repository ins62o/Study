import { Image, Text, View } from "react-native";
import Margin from "./Margin";

export default ({ uri, name, introduction }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri }}
        style={{ width: 50, height: 50, borderRadius: 20 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Margin height={10} />
        <Text style={{ fontSize: 12, color: "grey" }}>{introduction}</Text>
      </View>
    </View>
  );
};
