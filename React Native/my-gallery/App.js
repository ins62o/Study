import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useGallery } from "./src/use-gallery";
import MyDropDownPicker from "./src/MyDropDownPicker";
import TextInputModal from "./src/TextInputModal";
import BigImgModal from "./src/BigImgModal";
import ImageList from "./src/ImageList";

const width = Dimensions.get("screen").width;
const columnSize = width / 3;

export default function App() {
  const {
    pickImage,
    textInputModalVisible,
    addAlbum,
    openTextInputModal,
    closeTextInputModal,
    deleteImage,
    imagesWithAddButton,
    selectedAlbum,
    albumTitle,
    setAlbumTitle,
    resetAlbumTitle,
    onPressBackdrop,
    openDropDown,
    closeDropDown,
    isDropdownOpen,
    albums,
    SelectAlbum,
    deleteAlbum,
    bigImgModalVisible,
    openBigImgModal,
    closeBigImgModal,
    selectedImage,
    selectImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };

  const onPressWatchAd = () => {
    console.log("Loading AD");
  };

  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressAddAlbum = () => {
    if (albums.length >= 2) {
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다.", "", [
        {
          stlye: "cancel",
          text: "닫기",
        },
        {
          text: "광고 시청",
          onPress: onPressWatchAd,
        },
      ]);
    } else {
      openTextInputModal();
    }
  };
  const onSubmitEditing = () => {
    if (!albumTitle) return;

    //1. 앨범에 타이틀 추가
    addAlbum();
    // 2. 모달 닫기 & TextInput의 value 초기화
    closeTextInputModal();
    resetAlbumTitle();
  };

  const onPressHeader = () => {
    isDropdownOpen ? closeDropDown() : openDropDown();
  };

  const onPressTextInputModalBackdrop = () => {
    closeTextInputModal();
  };

  const onPressBigImgModalBackdrop = () => {
    closeBigImgModal();
  };

  const onPressAlbum = (album) => {
    SelectAlbum(album);
    closeDropDown();
  };

  const onLongPressAlbum = (albumId) => {
    deleteAlbum(albumId);
  };

  const onPressImage = (image) => {
    // TODO : image
    selectImage(image);
    openBigImgModal();
  };

  const onPressLeftArrow = () => {
    moveToPreviousImage();
  };

  const onPressRightArrow = () => {
    moveToNextImage();
  };

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
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker
        onPressHeader={onPressHeader}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        isDropdownOpen={isDropdownOpen}
        albums={albums}
        onPressAlbum={onPressAlbum}
        onLongPressAlbum={onLongPressAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={textInputModalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressTextInputModalBackdrop}
      />

      {/* 이미지를 크게 보는 모달 */}
      <BigImgModal
        modalVisible={bigImgModalVisible}
        onPressBackdrop={onPressBigImgModalBackdrop}
        selectedImage={selectedImage}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        showPreviousArrow={showPreviousArrow}
        showNextArrow={showNextArrow}
      />

      {/* 이미지 리스트 */}
      <ImageList
        imagesWithAddButton={imagesWithAddButton}
        onPressOpenGallery={onPressOpenGallery}
        onLongPressImage={onLongPressImage}
        onPressImage={onPressImage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
