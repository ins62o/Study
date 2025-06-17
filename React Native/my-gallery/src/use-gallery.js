import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const defaultAlbum = {
  id: 1,
  title: "기본",
};

export const useGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [textInputModalVisible, setTextInputModalVisible] = useState(false);
  const [bigImgModalVisible, setBigImgModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      medialTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const lastid = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastid + 1,
        uri: result.assets[0].uri,
        albumId: selectedAlbum.id,
      };
      setImages([...images, newImage]);
    }
  };

  const deleteImage = (imageId) => {
    Alert.alert("이미지를 삭제하시겠어요?", "", [
      { style: "cancel", text: "취소" },
      {
        text: "삭제",
        onPress: () => {
          const newImages = images.filter((image) => image.id !== imageId);
          setImages(newImages);
        },
      },
    ]);
  };

  const filteredImages = images.filter(
    (image) => image.albumId === selectedAlbum.id
  );
  const imagesWithAddButton = [
    {
      id: -1,
      uri: "",
    },
    ...filteredImages,
  ];

  const openTextInputModal = () => setTextInputModalVisible(true);
  const closeTextInputModal = () => setTextInputModalVisible(false);
  const openBigImgModal = () => setBigImgModalVisible(true);
  const closeBigImgModal = () => setBigImgModalVisible(false);
  const openDropDown = () => setIsDropdownOpen(true);
  const closeDropDown = () => setIsDropdownOpen(false);

  const resetAlbumTitle = () => setAlbumTitle("");

  const onPressBackdrop = () => {
    closeTextInputModal();
  };

  const addAlbum = () => {
    const lastid = albums.length === 0 ? 0 : albums[albums.length - 1].id;
    const newAlbum = {
      id: lastid + 1,
      title: albumTitle,
    };

    setAlbums([...albums, newAlbum]);

    setSelectedAlbum(newAlbum);
  };

  const SelectAlbum = (album) => setSelectedAlbum(album);

  const deleteAlbum = (albumId) => {
    if (albumId === defaultAlbum.id) {
      Alert.alert("기본 앨범은 삭제할 수 없어요!");
      return;
    }

    Alert.alert("앨범을 삭제하시겠어요?", "", [
      { style: "cancel", text: "아니요" },
      {
        text: "삭제",
        onPress: () => {
          const newAlbums = albums.filter((album) => album.id !== albumId);
          setAlbums(newAlbums);
          setSelectedAlbum(defaultAlbum);
        },
      },
    ]);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  return {
    isDropdownOpen,
    albums,
    imagesWithAddButton,
    selectedAlbum,
    textInputModalVisible,
    albumTitle,
    openTextInputModal,
    closeTextInputModal,
    pickImage,
    deleteImage,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    onPressBackdrop,
    openDropDown,
    closeDropDown,
    SelectAlbum,
    deleteAlbum,
    bigImgModalVisible,
    openBigImgModal,
    closeBigImgModal,
    selectImage,
    selectedImage,
  };
};
