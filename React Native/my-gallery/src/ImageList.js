import {
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";

const width = Dimensions.get("screen").width;
const minColumSize = width >= 500 ? 200 : 130;
const divisor = width / minColumSize;
const numColumns = Math.floor(divisor);
const columnSize = width / numColumns;

export default function ImageList({
  imagesWithAddButton,
  onPressOpenGallery,
  onLongPressImage,
  onPressImage,
}) {
  const renderItem = ({ item: image, index }) => {
    const { id, uri } = image;

    if (id === -1) {
      return (
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{
            width: columnSize,
            height: columnSize,
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 45 }}> + </Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        onLongPress={() => onLongPressImage(id)}
        onPress={() => onPressImage(image)}
      >
        <Image
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={imagesWithAddButton}
      renderItem={renderItem}
      numColumns={3}
      style={{ zIndex: -1 }}
    />
  );
}
