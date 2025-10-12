import {
  RefreshControl,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BusInfo from "./BusInfo";
import { COLOR } from "../color";
import {
  busStop,
  getBusNumColorByType,
  getRemainedTimeText,
  getSeatStatusText,
  getSections,
} from "../data";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Margin from "./Components/Margin";
import BookmarkButton from "./Components/BookmarkButton";
import { useTheme } from "./use-theme";

const BUSSTOPBOOKMARKSIZE = 20;

const BUSSTOPBOOKMARKPADDINGHORIZONTAL = 6;

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  const [refreshing, setRefreshing] = useState(false);

  const { NEWCOLOR, toggleIsDark, isDark } = useTheme();

  const onPressBusStopBookmarked = () => {
    // TODO
  };

  const ListHeaderComponent = () => (
    <View
      style={{
        height: 170,
        backgroundColor: COLOR.GRAY_3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 정류소 번호, 이름, 방향 */}
      <Margin height={10} />

      <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 13 }}>
        {busStop.id}
      </Text>
      <Margin height={4} />
      <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 20 }}>
        {busStop.name}
      </Text>
      <Margin height={4} />

      <Text style={{ color: COLOR.GRAY_1, fontSize: 14 }}>
        {busStop.directionDescription}
      </Text>
      <Margin height={20} />

      {/* 북마크 */}
      <BookmarkButton
        NEWCOLOR={NEWCOLOR}
        size={BUSSTOPBOOKMARKSIZE}
        isBookmarked={busStop.isBookmarked}
        onPress={onPressBusStopBookmarked}
        style={{
          borderWidth: 0.3,
          borderColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius:
            (BUSSTOPBOOKMARKSIZE + BUSSTOPBOOKMARKPADDINGHORIZONTAL * 2) / 2,
          padding: BUSSTOPBOOKMARKPADDINGHORIZONTAL,
        }}
      />

      <Margin height={25} />

      <Switch value={isDark} onValueChange={toggleIsDark} />
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View
      style={{
        paddingLeft: 13,
        paddingVertical: 3,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: NEWCOLOR.GRAY_2_GRAY_3,
        borderBottomColor: NEWCOLOR.GRAY_2_GRAY_3,
      }}
    >
      <Text style={{ color: NEWCOLOR.GRAY_4_GRAY_1, fontSize: 12 }}>
        {title}
      </Text>
    </View>
  );

  useEffect(() => {
    // setInterval은 반환 값이 있다.
    const interval = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 5000);

    // 반환값을 기준으로 클리어 시켜준다.
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);

    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null;
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
    const newNextBusInfos =
      !firstNextBusInfo && !secondNextBusInfo
        ? [null]
        : [firstNextBusInfo, secondNextBusInfo];

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info)
        return {
          hasInfo: false,
          remainedTimeText: "도착 정보 없음",
        };

      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
    });

    return (
      <BusInfo
        NEWCOLOR={NEWCOLOR}
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}} // TODO
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
      />
    );
  };

  const onRefresh = () => {
    console.log("call onRefresh");
    setRefreshing(true);
  };

  useEffect(() => {
    if (refreshing) {
      setNow(dayjs());
      setTimeout(() => {
        setRefreshing(false);
      }, 500);
    }
  }, [refreshing]);

  const ListFooterComponent = () => <Margin height={30} />;

  const ItemSeparatorComponent = () => (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
      }}
    ></View>
  );

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: NEWCOLOR.WHITE_BLACK,
      }}
    >
      {/* 뒤로가기 , 홈 아이콘  */}
      <View style={{ backgroundColor: COLOR.GRAY_3, width: "100%" }}>
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <TouchableOpacity style={{ padding: 10 }} hitSlop={10}>
            <AntDesign
              name="arrow-left"
              size={20}
              color={NEWCOLOR.WHITE_BLACK}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 10 }} hitSlop={10}>
            <AntDesign name="home" size={20} color={NEWCOLOR.WHITE_BLACK} />
          </TouchableOpacity>
        </SafeAreaView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            backgroundColor: COLOR.GRAY_3,
          }}
        />
      </View>

      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
