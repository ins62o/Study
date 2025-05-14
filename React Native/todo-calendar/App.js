import { useEffect, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

import { runPracticeDayjs } from "./practice-dayjs";
import { getCalendarColumns, ITEM_WIDTH, statusBarHeight } from "./src/util";
import { useCalendar } from "./src/hook/use-calendar";
import { useTodoList } from "./src/hook/use-todo-list";
import Calendar from "./src/Calendar";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./src/Margin";
import AddTodoInput from "./src/AddTodoInput";
import { Alert } from "react-native";

export default function App() {
  const now = dayjs();

  const {
    selectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
    setselectedDate,
  } = useCalendar(now);

  const {
    todoList,
    filteredTodoList,
    input,
    setInput,
    toggleTodo,
    removeTodo,
    addTodo,
    resetInput,
  } = useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);
  const flatListRef = useRef(null);

  const onPressLeftArrow = subtract1Month;
  const onPressRightArrow = add1Month;
  const onPressDate = showDatePicker;

  const ListHeaderComponent = () => (
    <View>
      <Calendar
        selectedDate={selectedDate}
        onPressLeftArrow={onPressLeftArrow}
        onPressRightArrow={onPressRightArrow}
        onPressDate={onPressDate}
        columns={columns}
        setselectedDate={setselectedDate}
        todoList={todoList}
      />
      <Margin height={15} />
      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 4 / 2,
          backgroundColor: "#a3a3a3",
          alignSelf: "center",
        }}
      />
      <Margin height={15} />
    </View>
  );

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () => {
      Alert.alert("삭제하시겠어요?", "", [
        {
          stlye: "cancel",
          text: "아니요",
        },
        {
          text: "네",
          onPress: () => removeTodo(todo.id),
        },
      ]);
    };
    return (
      <Pressable
        onLongPress={onLongPress}
        onPress={onPress}
        style={{
          width: ITEM_WIDTH,
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
          flexDirection: "row",
        }}
      >
        <Text style={{ flex: 1, fontSize: 14, color: "595959" }}>
          {todo.content}
        </Text>

        <Ionicons
          name="checkmark"
          size={17}
          color={isSuccess ? "#595959" : "#bfbfbf"}
        />
      </Pressable>
    );
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd();
    }, 300);
  };

  const onPressAdd = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  };

  const onFocus = () => {
    scrollToEnd();
  };

  useEffect(() => {
    runPracticeDayjs();
  }, []);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          {/* FlatList의 스크롤이 flex가 1이 아니면 ScrollToEnd가 안되는 문제 있음 (고질적 문제) */}
          <FlatList
            ref={flatListRef}
            data={filteredTodoList}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingTop: statusBarHeight * 5 }}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />

          <AddTodoInput
            value={input}
            onChangeText={setInput}
            placeholder={`${dayjs(selectedDate).format("MM.D")}에 추가할 투두`}
            onPressAdd={onPressAdd}
            onSubmitEditing={onPressAdd}
            onFocus={onFocus}
          />
        </View>
      </KeyboardAvoidingView>

      <Margin height={50} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
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
