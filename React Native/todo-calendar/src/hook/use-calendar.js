import dayjs from "dayjs";
import { useState } from "react";

export const useCalendar = (now) => {
  const [selectedDate, setselectedDate] = useState(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setselectedDate(dayjs(date));
    hideDatePicker();
  };

  const subtract1Month = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");
    setselectedDate(newSelectedDate);
  };

  const add1Month = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");
    setselectedDate(newSelectedDate);
  };
  return {
    selectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
    setselectedDate,
  };
};
