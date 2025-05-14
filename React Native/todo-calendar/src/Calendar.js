import dayjs from "dayjs";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getDayColor, getDayText } from "./util";

const columnSize = 35;

export default function Calendar({
  columns,
  selectedDate,
  onPressLeftArrow,
  onPressRightArrow,
  onPressDate,
  setselectedDate,
  todoList,
}) {
  const Column = ({
    text,
    color,
    opacity,
    disabled,
    onPress,
    isSelected,
    hasTodo,
  }) => {
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
        <Text
          style={{ color, opacity, fontWeight: hasTodo ? "bold" : "normal" }}
        >
          {text}
        </Text>
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
          <ArrowButton Iconname={"left"} onPress={onPressLeftArrow} />

          <TouchableOpacity onPress={onPressDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentdateText}
            </Text>
          </TouchableOpacity>

          <ArrowButton Iconname={"right"} onPress={onPressRightArrow} />
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
    const hasTodo = todoList.find((todo) =>
      dayjs(todo.date).isSame(dayjs(date), "date")
    );

    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
        hasTodo={hasTodo}
      />
    );
  };

  return (
    <FlatList
      data={columns}
      keyExtractor={(_, index) => `column-${index}`}
      renderItem={renderItem}
      numColumns={7}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}
