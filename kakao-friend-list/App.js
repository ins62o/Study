import { StyleSheet } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfileCard } from "./data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";

const StatusBarHeight = getStatusBarHeight(true);

export default function App() {
  const onPressArrow = () => console.log("click");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
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
        />

        <FriendList data={friendProfiles} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBarHeight,
    paddingHorizontal: 15,
    marginTop: 30,
  },
});
