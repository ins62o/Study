import { StyleSheet, View } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfileCard } from "./data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import Tabar from "./src/Tabar";

const StatusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => setIsOpened(!isOpened);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Header />

        <Margin height={10} />

        <Profile
          uri={myProfileCard.uri}
          name={myProfileCard.name}
          introduce={myProfileCard.introduction}
        />

        <Margin height={15} />

        <Division />

        <Margin height={12} />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />

        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>
      <Tabar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBarHeight,
  },
});
