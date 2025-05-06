import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { runPracticeDayjs } from "./practice-dayjs";
import { getCalendarColumns, getDayColor, getDayText } from "./src/util";
import dayjs from "dayjs";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const now = dayjs();
  const [selectedDate, setselectedDate] = useState(now);
  const columns = getCalendarColumns(selectedDate);
  const columnSize = 35;

  const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{
          width: columnSize,
          height: columnSize,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isSelected ? "#c2c2c2" : "transparent",
          borderRadius: columnSize / 2,
        }}
      >
        <Text style={{ color, opacity }}>{text} </Text>
      </TouchableOpacity>
    );
  };

  const ArrowButton = ({ onPress, Iconname }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ paddingHorizontal: 20, paddingVertical: 15 }}
      >
        <AntDesign name={Iconname} size={15} color="#404040" />
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    const currentdateText = dayjs(selectedDate).format("YYYY.MM.DD");
    return (
      <View>
        {/* YYYY.MM.DD */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowButton Iconname={"left"} onPress={() => {}} />

          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentdateText}
            </Text>
          </TouchableOpacity>

          <ArrowButton Iconname={"right"} onPress={() => {}} />
        </View>

        {/* 일 ~ 토*/}
        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day, idx) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column
                key={idx}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => setselectedDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  useEffect(() => {
    runPracticeDayjs();
  }, []);

  useEffect(() => {
    console.log("나 바뀜ㅋ", dayjs(selectedDate).format("YYYY.MM.DD"));
  }, [selectedDate]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        keyExtractor={(_, index) => `column-${index}`}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
