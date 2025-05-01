import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfileCard } from "./data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import { useState } from "react";
import Tabar from "./src/Tabar";

const StatusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => setIsOpened(!isOpened);

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "#fff" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfileCard.uri}
        name={myProfileCard.name}
        introduce={myProfileCard.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        stickyHeaderIndices={[0]} // 고정을 할 헤더의 인덱스
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
      />
      <Tabar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBarHeight,
  },
});
