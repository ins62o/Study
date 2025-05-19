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
  const [modalVisible, setModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openDropDown = () => setIsDropdownOpen(true);
  const closeDropDown = () => setIsDropdownOpen(false);

  const resetAlbumTitle = () => setAlbumTitle("");

  const onPressBackdrop = () => {
    closeModal();
  };

  const addAlbum = () => {
    const lastid = albums.length === 0 ? 0 : albums[albums.length - 1].id;
    const newAlbum = {
      id: lastid + 1,
      title: albumTitle,
    };

    setAlbums([...albums, newAlbum]);
  };

  const SelectAlbum = (album) => setSelectedAlbum(album);

  return {
    pickImage,
    deleteImage,
    imagesWithAddButton,
    selectedAlbum,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    onPressBackdrop,
    openDropDown,
    closeDropDown,
    isDropdownOpen,
    albums,
    SelectAlbum,
  };
};
